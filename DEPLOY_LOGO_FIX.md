# Pasos para aplicar el fix del logo en el servidor

## 1. Conectarse al servidor
```bash
ssh root@72.60.172.101
```

## 2. Ejecutar estos comandos en el servidor (uno por uno):
```bash
cd /var/www/web-vanguardkids
git pull origin main
npm run build
pm2 restart vanguardkids-web
pm2 logs vanguardkids-web --lines 30
```

## 3. Probar enviando un email
- Ve a la página web en el puerto 3001: http://72.60.172.101:3001
- Envía un formulario de contacto o usa el chat widget
- Verifica que el email recibido muestre el logo correctamente

## Notas importantes:
- El logo ahora se incrusta directamente en el email como base64
- No depende de URLs externas, por lo que siempre se mostrará
- Si hay algún error, revisa los logs con: `pm2 logs vanguardkids-web`
