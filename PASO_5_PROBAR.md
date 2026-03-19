# PASO 5: Probar que funciona

## 5.1 Probar desde el servidor (opcional)

En PuTTY, ejecuta:

```bash
curl -I -H "Host: vanguardkids.com" http://localhost:3001
```

**Deberías ver algo como:**
```
HTTP/1.1 200 OK
...
```

## 5.2 Probar desde tu navegador

1. **Abre una ventana de incógnito** (Ctrl+Shift+N en Chrome)
2. **Ve a:** `https://vanguardkids.com`
3. **¿Qué ves?**
   - ✅ Tu sitio de vanguardkids → ¡Perfecto!
   - ❌ Página de vanguardschools → Necesitamos revisar más
   - ❌ Error → Comparte el error

## 5.3 Si aún no funciona

**Limpiar caché DNS en tu computadora (Windows):**

Abre PowerShell como Administrador y ejecuta:
```powershell
ipconfig /flushdns
```

Luego prueba de nuevo en modo incógnito.

✅ **Cuando pruebes, avísame qué ves**

