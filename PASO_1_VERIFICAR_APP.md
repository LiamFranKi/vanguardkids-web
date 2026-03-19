# PASO 1: Verificar que la app está corriendo

Ejecuta estos comandos en PuTTY:

```bash
# Verificar que la app está corriendo
pm2 list
```

**¿Qué buscar?**
- Debe aparecer `vanguardkids-web` con status `online`

**Si NO está corriendo, ejecuta:**
```bash
cd /var/www/web-vanguardkids
pm2 start npm --name "vanguardkids-web" -- start -- --port 3001
pm2 save
```

**Luego verifica que el puerto 3001 está escuchando:**
```bash
sudo netstat -tulpn | grep 3001
```

**Deberías ver algo como:**
```
tcp6  0  0 :::3001  :::*  LISTEN  12345/node
```

✅ **Cuando veas esto, avísame y pasamos al Paso 2**

