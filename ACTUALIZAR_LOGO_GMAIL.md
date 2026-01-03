# Actualizar Logo para Gmail

## Problema
- ✅ Hotmail muestra el logo correctamente
- ❌ Gmail NO muestra el logo

## Solución
Se actualizó el código para usar la URL pública HTTPS del logo (Gmail prefiere URLs públicas sobre base64).

## Pasos para Aplicar

### Paso 1: Subir archivo actualizado (WinSCP)

1. Abre WinSCP y conéctate al servidor
2. Navega a: `/var/www/web-vanguardkids/lib/`
3. Sube el archivo `email-templates.ts` desde tu computadora
   - Ruta local: `c:\web-vanguardkids\lib\email-templates.ts`
   - Ruta remota: `/var/www/web-vanguardkids/lib/email-templates.ts`
4. Reemplaza el archivo existente

### Paso 2: Verificar .env.local (PuTTY)

Conéctate por PuTTY y ejecuta:

```bash
cd /var/www/web-vanguardkids
cat .env.local | grep NEXT_PUBLIC_SITE_URL
```

**Debe mostrar:**
```
NEXT_PUBLIC_SITE_URL=https://www.vanguardkids.com
```

**Si NO está así, edítalo:**
```bash
nano .env.local
```

Asegúrate de tener:
```
NEXT_PUBLIC_SITE_URL=https://www.vanguardkids.com
```

Guarda: `Ctrl+O`, `Enter`, `Ctrl+X`

### Paso 3: Reconstruir y reiniciar (PuTTY)

```bash
cd /var/www/web-vanguardkids

# Reconstruir la aplicación
npm run build

# Reiniciar la app
pm2 restart vanguardkids-web

# Ver logs para verificar
pm2 logs vanguardkids-web --lines 20
```

**En los logs deberías ver:**
```
Using public HTTPS URL for logo (Gmail compatible): https://www.vanguardkids.com/logo.png
```

### Paso 4: Verificar que el logo está accesible

Abre en el navegador:
```
https://www.vanguardkids.com/logo.png
```

**Debe mostrar el logo correctamente.**

### Paso 5: Probar enviando un formulario

1. Envía un formulario de prueba desde el sitio
2. Revisa el correo en Gmail
3. El logo debería aparecer ahora

## ¿Por qué funciona ahora?

- **Antes**: Usaba base64 (funciona en Hotmail, pero Gmail lo bloquea a veces)
- **Ahora**: Usa URL pública HTTPS `https://www.vanguardkids.com/logo.png` (Gmail lo acepta mejor)

## Si aún no funciona

1. Verifica que el logo existe en: `/var/www/web-vanguardkids/public/logo.png`
2. Verifica permisos del archivo:
   ```bash
   ls -la /var/www/web-vanguardkids/public/logo.png
   ```
3. Verifica que Nginx sirve el archivo correctamente:
   ```bash
   curl -I https://www.vanguardkids.com/logo.png
   ```

