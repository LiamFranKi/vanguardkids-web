# PASO 4: Verificar sintaxis y aplicar cambios

Ejecuta estos comandos UNO POR UNO en PuTTY:

## 4.1 Verificar que no hay errores

```bash
sudo nginx -t
```

**¿Qué deberías ver?**
```
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
```

✅ **Si ves esto, continúa al paso 4.2**

❌ **Si ves errores, compártelos y los corregimos**

## 4.2 Recargar Nginx (NO reiniciar)

```bash
sudo systemctl reload nginx
```

**No deberías ver ningún error.**

✅ **Si no hay errores, pasamos al Paso 5**

