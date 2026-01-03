# Configurar SSL/HTTPS para vanguardkids.com

## Paso 1: Verificar Nginx está configurado

```bash
# Verificar configuración existe
ls -la /etc/nginx/sites-available/vanguardkids.com

# Si no existe, crearla (ver instrucciones en el chat)
```

## Paso 2: Instalar Certbot

```bash
sudo apt update
sudo apt install certbot python3-certbot-nginx -y
```

## Paso 3: Obtener Certificado SSL

```bash
sudo certbot --nginx -d vanguardkids.com -d www.vanguardkids.com
```

Seguir las instrucciones:
1. Email: ingresar tu email
2. Términos: presionar Y y Enter
3. Compartir email: presionar N y Enter
4. Redirección HTTP a HTTPS: presionar 2 y Enter (recomendado)

## Paso 4: Verificar que Certbot actualizó Nginx

```bash
# Ver la configuración actualizada
sudo cat /etc/nginx/sites-available/vanguardkids.com
```

Debería mostrar bloques para puerto 443 (HTTPS) y redirección de 80 a 443.

## Paso 5: Actualizar .env.local

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

## Paso 6: Probar

Abrir en navegador:
- https://vanguardkids.com
- https://www.vanguardkids.com

## Renovación Automática

Certbot configura renovación automática. Verificar:

```bash
sudo certbot renew --dry-run
```

