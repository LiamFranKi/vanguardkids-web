#!/bin/bash
# Script para diagnosticar y corregir Nginx para vanguardkids.com
# IMPORTANTE: NO modifica vanguardschools.com

set -e  # Salir si hay error

echo "=========================================="
echo "Diagnóstico y Corrección de Nginx"
echo "para vanguardkids.com"
echo "=========================================="
echo ""

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Paso 1: Diagnóstico
echo -e "${YELLOW}=== PASO 1: DIAGNÓSTICO ===${NC}"
echo ""

echo "1.1 Verificando sitios habilitados:"
ls -la /etc/nginx/sites-enabled/ | grep -E "(vanguardkids|vanguardschools)" || echo "No se encontraron configuraciones relevantes"
echo ""

echo "1.2 Buscando default_server (solo lectura):"
sudo grep -r "default_server" /etc/nginx/sites-enabled/ 2>/dev/null || echo "No se encontró default_server"
echo ""

echo "1.3 Verificando configuración actual de vanguardkids.com:"
if [ -f /etc/nginx/sites-available/vanguardkids.com ]; then
    echo -e "${GREEN}✓ Archivo existe${NC}"
    echo "Contenido actual:"
    sudo cat /etc/nginx/sites-available/vanguardkids.com
else
    echo -e "${RED}✗ Archivo NO existe${NC}"
    exit 1
fi
echo ""

echo "1.4 Verificando enlace simbólico:"
if [ -L /etc/nginx/sites-enabled/vanguardkids.com ]; then
    echo -e "${GREEN}✓ Enlace simbólico existe${NC}"
    ls -la /etc/nginx/sites-enabled/vanguardkids.com
else
    echo -e "${YELLOW}⚠ Enlace simbólico NO existe, creándolo...${NC}"
    sudo ln -s /etc/nginx/sites-available/vanguardkids.com /etc/nginx/sites-enabled/
fi
echo ""

echo "1.5 Probando puerto 3001:"
if curl -s -o /dev/null -w "%{http_code}" http://localhost:3001 | grep -q "200\|301\|302"; then
    echo -e "${GREEN}✓ Puerto 3001 responde correctamente${NC}"
else
    echo -e "${RED}✗ Puerto 3001 NO responde${NC}"
    echo "Verifica que PM2 está corriendo: pm2 list"
fi
echo ""

# Paso 2: Crear backup
echo -e "${YELLOW}=== PASO 2: CREAR BACKUP ===${NC}"
sudo cp /etc/nginx/sites-available/vanguardkids.com /etc/nginx/sites-available/vanguardkids.com.backup.$(date +%Y%m%d_%H%M%S)
echo -e "${GREEN}✓ Backup creado${NC}"
echo ""

# Paso 3: Aplicar configuración corregida
echo -e "${YELLOW}=== PASO 3: APLICAR CONFIGURACIÓN CORREGIDA ===${NC}"

sudo tee /etc/nginx/sites-available/vanguardkids.com > /dev/null << 'NGINX_CONFIG'
# Configuración mejorada para vanguardkids.com
# Asegura que vanguardkids.com tenga prioridad correcta

server {
    listen 443 ssl http2;
    server_name vanguardkids.com www.vanguardkids.com;
    
    # Certificados SSL (configurados por Certbot)
    ssl_certificate /etc/letsencrypt/live/vanguardkids.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/vanguardkids.com/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

    # Headers de seguridad
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    location / {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        
        # Headers importantes para Next.js
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Forwarded-Host $host;
        proxy_set_header X-Forwarded-Port $server_port;
        
        proxy_cache_bypass $http_upgrade;
        
        # Timeouts
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
        
        # Buffer settings
        proxy_buffering off;
    }
}

# Bloque HTTP - Redirige a HTTPS
server {
    listen 80;
    server_name vanguardkids.com www.vanguardkids.com;
    
    # Redirigir todo a HTTPS
    return 301 https://$server_name$request_uri;
}
NGINX_CONFIG

echo -e "${GREEN}✓ Configuración actualizada${NC}"
echo ""

# Paso 4: Verificar sintaxis
echo -e "${YELLOW}=== PASO 4: VERIFICAR SINTAXIS ===${NC}"
if sudo nginx -t; then
    echo -e "${GREEN}✓ Sintaxis correcta${NC}"
else
    echo -e "${RED}✗ Error en la sintaxis${NC}"
    echo "Restaurando backup..."
    sudo cp /etc/nginx/sites-available/vanguardkids.com.backup.* /etc/nginx/sites-available/vanguardkids.com
    exit 1
fi
echo ""

# Paso 5: Recargar Nginx
echo -e "${YELLOW}=== PASO 5: RECARGAR NGINX ===${NC}"
sudo systemctl reload nginx
echo -e "${GREEN}✓ Nginx recargado${NC}"
echo ""

# Paso 6: Verificar
echo -e "${YELLOW}=== PASO 6: VERIFICACIÓN FINAL ===${NC}"
echo "Verificando que la configuración está activa:"
sudo nginx -T 2>/dev/null | grep -A 5 "server_name vanguardkids.com" | head -10
echo ""

echo "=========================================="
echo -e "${GREEN}✓ PROCESO COMPLETADO${NC}"
echo "=========================================="
echo ""
echo "Próximos pasos:"
echo "1. Abre https://vanguardkids.com en el navegador"
echo "2. Limpia la caché del navegador si es necesario"
echo "3. Prueba en modo incógnito"
echo ""
echo "Si aún ves el sitio incorrecto, verifica los logs:"
echo "  sudo tail -f /var/log/nginx/access.log"
echo ""

