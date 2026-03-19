# 📋 Resumen: Pasos para Configurar vanguardkids.com

## ¿Cómo funciona?

1. **DNS (GoDaddy)**: `vanguardkids.com` → `72.60.172.101` (tu VPS)
2. **Nginx (VPS)**: Recibe la petición, lee el dominio, busca la configuración
3. **Configuración**: Encuentra `server_name vanguardkids.com` → redirige a puerto 3001
4. **Tu App**: Responde desde el puerto 3001

## Pasos a Seguir (UNO POR UNO)

### ✅ PASO 1: Verificar que la app está corriendo
- Ver archivo: `PASO_1_VERIFICAR_APP.md`
- Comando: `pm2 list`

### ✅ PASO 2: Verificar configuración de Nginx
- Ver archivo: `PASO_2_VERIFICAR_NGINX.md`
- Comando: `sudo cat /etc/nginx/sites-available/vanguardkids.com`

### ✅ PASO 3: Corregir configuración (si es necesario)
- Ver archivo: `PASO_3_CORREGIR_NGINX.md`
- Editar: `sudo nano /etc/nginx/sites-available/vanguardkids.com`

### ✅ PASO 4: Verificar y aplicar
- Ver archivo: `PASO_4_VERIFICAR_Y_APLICAR.md`
- Comandos: `sudo nginx -t` y `sudo systemctl reload nginx`

### ✅ PASO 5: Probar
- Ver archivo: `PASO_5_PROBAR.md`
- Abrir: `https://vanguardkids.com` en modo incógnito

## ⚠️ Importante

- **NO modificar** configuraciones de `vanguardschools.com`
- **Solo trabajar** con `vanguardkids.com`
- **Ejecutar pasos UNO POR UNO** y avisar cuando termines cada uno

## 📚 Explicación Detallada

Ver archivo: `COMO_FUNCIONA_NGINX.md` para entender cómo Nginx decide a qué puerto ir.

