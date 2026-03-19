# 📸 Instrucciones para Logo y Favicon

## 📁 Dónde colocar los archivos

### Logo
Coloca tu logo en la carpeta:
```
public/logo.png
```
o
```
public/logo.svg
```

**Formatos recomendados:**
- PNG con fondo transparente (recomendado)
- SVG (mejor calidad, escalable)

**Tamaños recomendados:**
- Logo principal: 200x200px o más grande
- Logo para header: 48x48px o 64x64px

### Favicon
Coloca tu favicon en la carpeta:
```
public/favicon.ico
```

**Formatos:**
- ICO (formato tradicional)
- También puedes usar PNG: `public/favicon.png`

**Tamaño recomendado:**
- 32x32px o 64x64px

## 🔧 Cómo actualizar el código

Una vez que coloques los archivos, necesitarás actualizar:

### 1. Header (components/Header.tsx)
Reemplaza el logo actual con una imagen:

```tsx
<Link href="/" className="flex items-center space-x-2 group">
  <Image 
    src="/logo.png" 
    alt="Vanguard Kids Logo" 
    width={48} 
    height={48}
    className="transform group-hover:scale-110 transition-transform duration-300"
  />
  <div>
    <h1 className="text-xl font-bold text-gray-800">Vanguard Kids</h1>
    <p className="text-xs text-gray-600">Preschool & Academy</p>
  </div>
</Link>
```

### 2. Favicon (app/layout.tsx)
El favicon se carga automáticamente desde `public/favicon.ico`, pero puedes agregarlo explícitamente:

```tsx
export const metadata: Metadata = {
  title: 'Vanguard Kids - Premier Early Childhood Education',
  description: '...',
  icons: {
    icon: '/favicon.ico',
  },
}
```

## 📝 Notas importantes

- El logo debe tener fondo transparente para verse bien sobre cualquier color
- El favicon se mostrará en la pestaña del navegador
- Asegúrate de que los archivos tengan nombres exactos: `logo.png` y `favicon.ico`
- Si usas SVG, asegúrate de que esté optimizado

## 🎨 Colores del logo

Dado que el color predominante del sitio es ahora **celeste pastel (azul)**, asegúrate de que tu logo se vea bien con estos colores de fondo.



