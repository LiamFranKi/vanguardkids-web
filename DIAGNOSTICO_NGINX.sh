#!/bin/bash
# Script de diagnóstico para vanguardkids.com
# NO modifica ninguna configuración, solo lee información

echo "=== DIAGNÓSTICO NGINX PARA VANGUARDKIDS.COM ==="
echo ""

echo "1. Verificando sitios habilitados en Nginx:"
ls -la /etc/nginx/sites-enabled/
echo ""

echo "2. Buscando configuraciones con default_server:"
sudo grep -r "default_server" /etc/nginx/sites-enabled/ || echo "No se encontró default_server"
echo ""

echo "3. Verificando configuración de vanguardkids.com:"
if [ -f /etc/nginx/sites-available/vanguardkids.com ]; then
    echo "✓ Archivo existe"
    sudo cat /etc/nginx/sites-available/vanguardkids.com
else
    echo "✗ Archivo NO existe"
fi
echo ""

echo "4. Verificando enlace simbólico:"
ls -la /etc/nginx/sites-enabled/vanguardkids.com || echo "✗ Enlace simbólico NO existe"
echo ""

echo "5. Probando puerto 3001 directamente:"
curl -s -o /dev/null -w "HTTP Status: %{http_code}\n" http://localhost:3001 || echo "✗ No responde"
echo ""

echo "6. Probando con header Host vanguardkids.com:"
curl -s -H "Host: vanguardkids.com" http://localhost:3001 | head -20
echo ""

echo "7. Verificando que PM2 está corriendo vanguardkids-web:"
pm2 list | grep vanguardkids-web || echo "✗ No encontrado en PM2"
echo ""

echo "=== FIN DEL DIAGNÓSTICO ==="

