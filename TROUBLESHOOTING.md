# Troubleshooting Guide

## Error 500 al enviar formularios

Si recibes un error 500 al enviar formularios, verifica lo siguiente:

### 1. Verificar Variables de Entorno

Asegúrate de tener un archivo `.env.local` en la raíz del proyecto con las siguientes variables:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=tu-email@gmail.com
SMTP_PASS=tu-contraseña-de-aplicacion
SMTP_FROM=tu-email@gmail.com
CONTACT_EMAIL=admin@vanguardkids.com
NEXT_PUBLIC_SITE_URL=https://www.vanguardkids.com
```

### 2. Verificar que el archivo existe

El archivo debe estar en: `c:\web-vanguardkids\.env.local`

**Importante**: 
- El archivo `.env.local` NO debe estar en el repositorio (ya está en `.gitignore`)
- Debes crearlo manualmente si no existe
- Reinicia el servidor después de crear o modificar `.env.local`

### 3. Para Gmail - Contraseña de Aplicación

Si usas Gmail, necesitas crear una "Contraseña de aplicación":

1. Ve a tu cuenta de Google: https://myaccount.google.com/
2. Seguridad → Verificación en 2 pasos (debe estar activada)
3. Contraseñas de aplicaciones
4. Genera una nueva contraseña para "Correo"
5. Usa esa contraseña en `SMTP_PASS`

### 4. Verificar en la Consola

Si el error persiste, revisa la consola del servidor (terminal donde corre `npm run dev`) para ver el error específico.

Los errores comunes incluyen:
- `SMTP configuration is missing` → Falta alguna variable de entorno
- `Invalid login` → Credenciales incorrectas
- `Connection timeout` → Problema de red o configuración SMTP incorrecta

### 5. Probar la Configuración

Puedes probar si la configuración SMTP es correcta creando un script de prueba temporal.

---

## Warning de Imagen

El warning sobre `sizes` prop ya fue corregido. Si aún aparece, limpia la caché:

```bash
# Detener el servidor
# Eliminar .next
rm -rf .next
# O en Windows:
rmdir /s .next

# Reiniciar
npm run dev
```

---

## Otros Problemas Comunes

### El formulario se envía pero no llega el correo

1. Verifica la carpeta de spam
2. Verifica que los emails en `formularios.json` sean correctos
3. Revisa los logs del servidor para ver si hay errores de SMTP

### Los datos no se guardan en JSON

1. Verifica que la carpeta `data/` tenga permisos de escritura
2. Revisa los logs del servidor para ver errores de archivos

### El chat no aparece

1. Verifica que `ChatWidget` esté importado en `app/layout.tsx`
2. Limpia la caché del navegador
3. Verifica que no haya errores en la consola del navegador


