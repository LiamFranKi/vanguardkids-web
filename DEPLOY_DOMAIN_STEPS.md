# Pasos Completos para Vincular Dominio vanguardkids.com

## Paso 1: Cambiar Nameservers en GoDaddy

1. En GoDaddy, ve a "Servidores de nombres"
2. Haz clic en "Cambiar servidores de nombres"
3. Selecciona "Usar los servidores de nombres predeterminados de GoDaddy"
4. Guarda los cambios
5. Espera 5-10 minutos para que se propaguen

## Paso 2: Agregar Registros DNS en GoDaddy

1. Ve a la pestaña "Registros DNS"
2. Haz clic en "Añadir un registro nuevo"
3. Agrega estos dos registros:

**Registro 1:**
- Tipo: A
- Nombre: @
- Valor: 72.60.172.101
- TTL: 600

**Registro 2:**
- Tipo: A
- Nombre: www
- Valor: 72.60.172.101
- TTL: 600

4. Guarda ambos registros

## Paso 3: Verificar App en VPS

```bash
# Conectarse al VPS
ssh root@72.60.172.101

# Verificar que la app está corriendo
pm2 list

# Si no está corriendo, iniciarla
cd /var/www/web-vanguardkids
pm2 start npm --name "vanguardkids-web" -- start -- --port 3001
pm2 save

# Verificar puerto 3001
sudo netstat -tulpn | grep 3001
```

## Paso 4: Configurar Nginx

```bash
# Crear archivo de configuración
sudo nano /etc/nginx/sites-available/vanguardkids.com
```

Pegar esta configuración:

```nginx
# Bloque HTTP (temporal para probar)
server {
    listen 80;
    server_name vanguardkids.com www.vanguardkids.com;

    location / {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }
}
```

Guardar: Ctrl+O, Enter, Ctrl+X

## Paso 5: Habilitar Sitio en Nginx

```bash
# Crear enlace simbólico
sudo ln -s /etc/nginx/sites-available/vanguardkids.com /etc/nginx/sites-enabled/

# Verificar sintaxis
sudo nginx -t

# Si está OK, recargar Nginx
sudo systemctl reload nginx
```

## Paso 6: Probar (esperar 10-15 minutos para propagación DNS)

Abrir en navegador:
- http://vanguardkids.com
- http://www.vanguardkids.com

## Paso 7: Configurar SSL

```bash
# Instalar Certbot
sudo apt update
sudo apt install certbot python3-certbot-nginx -y

# Obtener certificado SSL
sudo certbot --nginx -d vanguardkids.com -d www.vanguardkids.com
```

Seguir instrucciones de Certbot.

## Paso 8: Actualizar .env.local

```bash
cd /var/www/web-vanguardkids
nano .env.local
```

Asegurarse de tener:
```
NEXT_PUBLIC_SITE_URL=https://www.vanguardkids.com
```

Guardar y reiniciar:
```bash
pm2 restart vanguardkids-web
```

