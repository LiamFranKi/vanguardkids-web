# Solución: Corregir Nginx para vanguardkids.com

## Paso 1: Diagnóstico (Ejecutar en PuTTY)

Ejecuta estos comandos uno por uno y comparte los resultados:

```bash
# 1. Ver todos los sitios habilitados
ls -la /etc/nginx/sites-enabled/

# 2. Ver qué tiene default_server (NO modificar, solo ver)
sudo grep -r "default_server" /etc/nginx/sites-enabled/

# 3. Ver configuración actual de vanguardkids.com
sudo cat /etc/nginx/sites-available/vanguardkids.com

# 4. Probar que la app responde en puerto 3001
curl -I http://localhost:3001

# 5. Probar con header Host correcto
curl -I -H "Host: vanguardkids.com" http://localhost:3001
```

## Paso 2: Aplicar Configuración Corregida

Si el diagnóstico muestra que la configuración necesita ajustes, ejecuta:

```bash
# 1. Hacer backup de la configuración actual
sudo cp /etc/nginx/sites-available/vanguardkids.com /etc/nginx/sites-available/vanguardkids.com.backup

# 2. Editar la configuración
sudo nano /etc/nginx/sites-available/vanguardkids.com
```

Luego reemplaza TODO el contenido con la configuración del archivo `nginx-vanguardkids-fixed.conf` que acabo de crear.

**O si prefieres, puedes copiar y pegar directamente:**

```bash
# Copiar la nueva configuración
sudo tee /etc/nginx/sites-available/vanguardkids.com > /dev/null << 'EOF'
# Configuración mejorada para vanguardkids.com
server {
    listen 443 ssl http2;
    server_name vanguardkids.com www.vanguardkids.com;
    
    ssl_certificate /etc/letsencrypt/live/vanguardkids.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/vanguardkids.com/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    location / {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Forwarded-Host $host;
        proxy_set_header X-Forwarded-Port $server_port;
        proxy_cache_bypass $http_upgrade;
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
        proxy_buffering off;
    }
}

server {
    listen 80;
    server_name vanguardkids.com www.vanguardkids.com;
    return 301 https://$server_name$request_uri;
}
EOF
```

## Paso 3: Verificar y Aplicar

```bash
# 1. Verificar sintaxis de Nginx
sudo nginx -t

# 2. Si está OK, recargar Nginx (NO reiniciar)
sudo systemctl reload nginx

# 3. Verificar logs
sudo tail -f /var/log/nginx/error.log
```

## Paso 4: Probar

Abre en el navegador:
- `https://vanguardkids.com`
- `https://www.vanguardkids.com`

Deberías ver el sitio correcto de vanguardkids.

## Si Aún No Funciona

Si después de estos pasos aún ves el sitio incorrecto:

1. **Limpiar caché del navegador** (Ctrl+Shift+Delete)
2. **Probar en modo incógnito**
3. **Verificar logs de Nginx** para ver qué sitio está sirviendo:
   ```bash
   sudo tail -f /var/log/nginx/access.log
   ```

