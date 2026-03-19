# PASO 2: Verificar configuración actual de Nginx

Ejecuta estos comandos en PuTTY:

```bash
# Ver la configuración actual de vanguardkids.com
sudo cat /etc/nginx/sites-available/vanguardkids.com
```

**¿Qué buscar?**
- Debe tener `server_name vanguardkids.com www.vanguardkids.com`
- Debe tener `proxy_pass http://localhost:3001` (este es el puerto de tu app)

**También verifica que el enlace simbólico existe:**
```bash
ls -la /etc/nginx/sites-enabled/vanguardkids.com
```

**Deberías ver algo como:**
```
lrwxrwxrwx ... vanguardkids.com -> /etc/nginx/sites-available/vanguardkids.com
```

✅ **Cuando veas esto, comparte el resultado y pasamos al Paso 3**

