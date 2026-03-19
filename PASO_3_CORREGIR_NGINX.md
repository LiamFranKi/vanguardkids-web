# PASO 3: Corregir configuración de Nginx (si es necesario)

**Solo ejecuta esto si el Paso 2 mostró que la configuración necesita ajustes.**

Ejecuta estos comandos UNO POR UNO en PuTTY:

## 3.1 Hacer backup (por seguridad)

```bash
sudo cp /etc/nginx/sites-available/vanguardkids.com /etc/nginx/sites-available/vanguardkids.com.backup
```

✅ **Espera confirmación antes de continuar**

## 3.2 Editar la configuración

```bash
sudo nano /etc/nginx/sites-available/vanguardkids.com
```

**En el editor nano:**
- Presiona `Ctrl+K` varias veces para borrar TODO el contenido
- Luego pega esta configuración completa:

```nginx
server {
    listen 443 ssl http2;
    server_name vanguardkids.com www.vanguardkids.com;
    
    ssl_certificate /etc/letsencrypt/live/vanguardkids.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/vanguardkids.com/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

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

server {
    listen 80;
    server_name vanguardkids.com www.vanguardkids.com;
    return 301 https://$server_name$request_uri;
}
```

**Para guardar en nano:**
- Presiona `Ctrl+O` (guardar)
- Presiona `Enter` (confirmar)
- Presiona `Ctrl+X` (salir)

✅ **Cuando hayas guardado, avísame y pasamos al Paso 4**

