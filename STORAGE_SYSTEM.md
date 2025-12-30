# Sistema de Almacenamiento de Formularios

Este documento explica cómo funciona el sistema de almacenamiento de todos los formularios y archivos PDF.

## 📁 Estructura de Carpetas

```
web-vanguardkids/
├── data/                          # Datos de formularios en JSON
│   ├── contact/                   # Formularios de contacto
│   │   └── YYYY-MM/               # Organizados por año-mes
│   │       └── YYYY-MM-DD.json    # Un archivo por día
│   ├── apply/                     # Aplicaciones de trabajo
│   │   └── YYYY-MM/
│   │       └── YYYY-MM-DD.json
│   └── chat/                      # Mensajes del chat
│       └── YYYY-MM/
│           └── YYYY-MM-DD.json
└── uploads/
    └── resumes/                    # PDFs de currículums
        └── {timestamp}_{filename}.pdf
```

## 📝 Formato de los Archivos JSON

Cada archivo JSON contiene un array de todas las submisiones del día:

```json
[
  {
    "id": "1705320000000-abc123xyz",
    "timestamp": "2024-01-15T10:30:00.000Z",
    "date": "January 15, 2024, 10:30 AM",
    "formType": "contact",
    "data": {
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "+1 (813) 555-0123",
      "subject": "Inquiry about programs",
      "message": "I would like to know more...",
      "location": "Vanguard Kids Preschool"
    }
  }
]
```

## 📄 Almacenamiento de PDFs

Los currículums (PDFs) se guardan en:
- **Carpeta**: `uploads/resumes/`
- **Formato**: `{timestamp}_{nombre-original}.pdf`
- **Ejemplo**: `1705320000000_John_Doe_Resume.pdf`

El nombre del archivo guardado se almacena en el JSON bajo `resumeFileName`.

## 🔍 Consultar Datos

### 1. API de Reportes

#### Obtener todos los datos (JSON):
```
GET /api/reports
GET /api/reports?type=contact
GET /api/reports?type=apply
GET /api/reports?type=chat
```

**Respuesta:**
```json
{
  "success": true,
  "count": 150,
  "data": [...]
}
```

#### Obtener estadísticas:
```
GET /api/reports?format=stats
```

**Respuesta:**
```json
{
  "success": true,
  "stats": {
    "contact": 45,
    "apply": 30,
    "chat": 75,
    "total": 150,
    "resumes": 30
  }
}
```

#### Exportar a CSV:
```
GET /api/reports?format=csv
GET /api/reports?format=csv&type=contact
```

Descarga un archivo CSV con todos los datos.

### 2. Acceso Directo a Archivos

Los archivos JSON se pueden leer directamente desde:
- `data/contact/YYYY-MM/YYYY-MM-DD.json`
- `data/apply/YYYY-MM/YYYY-MM-DD.json`
- `data/chat/YYYY-MM/YYYY-MM-DD.json`

Los PDFs están en:
- `uploads/resumes/{filename}.pdf`

## 📊 Tipos de Formularios

### 1. Contact (`contact`)
Guarda:
- name
- email
- phone
- subject
- message
- location (opcional)

**Ubicación**: `data/contact/YYYY-MM/YYYY-MM-DD.json`

### 2. Apply (`apply`)
Guarda:
- firstName, lastName
- email, phone
- position, location
- address, city, state, zipCode
- education, experience
- coverLetter (opcional)
- resumeFileName (nombre del PDF guardado)
- resumeSaved (boolean)

**Ubicación**: 
- Datos: `data/apply/YYYY-MM/YYYY-MM-DD.json`
- PDF: `uploads/resumes/{timestamp}_{filename}.pdf`

### 3. Chat (`chat`)
Guarda:
- name
- email
- phone (opcional)
- message

**Ubicación**: `data/chat/YYYY-MM/YYYY-MM-DD.json`

## 🔧 Funciones Disponibles

### `saveFormData(formType, data)`
Guarda los datos del formulario en JSON.

### `saveResumeFile(fileName, fileContent)`
Guarda el PDF del currículum y retorna el nombre del archivo guardado.

### `getAllFormData(formType?)`
Obtiene todos los datos de formularios (opcionalmente filtrado por tipo).

### `getStorageStats()`
Retorna estadísticas de almacenamiento.

### `getResumeFilePath(fileName)`
Obtiene la ruta completa de un archivo PDF.

## 📈 Ejemplo de Uso

### Consultar todas las aplicaciones de trabajo:
```javascript
import { getAllFormData } from '@/lib/storage'

const applications = getAllFormData('apply')
console.log(`Total applications: ${applications.length}`)
```

### Obtener estadísticas:
```javascript
import { getStorageStats } from '@/lib/storage'

const stats = getStorageStats()
console.log(stats)
// {
//   contact: 45,
//   apply: 30,
//   chat: 75,
//   total: 150,
//   resumes: 30
// }
```

## 🔒 Seguridad

- Los archivos en `data/` y `uploads/` están en `.gitignore`
- Los datos no se exponen públicamente
- Solo se puede acceder a través de la API `/api/reports`
- Los PDFs se guardan con nombres únicos (timestamp)

## 📋 Notas Importantes

1. **Organización Automática**: Los archivos se organizan automáticamente por fecha (año-mes-día).

2. **IDs Únicos**: Cada entrada tiene un ID único generado automáticamente.

3. **Timestamps**: Todas las entradas incluyen timestamp ISO y fecha legible.

4. **PDFs**: Los PDFs se guardan con timestamp para evitar conflictos de nombres.

5. **Backup**: Se recomienda hacer backup periódico de las carpetas `data/` y `uploads/`.

6. **Límites**: No hay límites de tamaño, pero se recomienda monitorear el espacio en disco.

## 🚀 Próximos Pasos

Para generar reportes más avanzados, puedes:
1. Crear scripts que lean los JSONs
2. Usar la API `/api/reports` para exportar datos
3. Integrar con herramientas de análisis de datos
4. Crear dashboard de administración

---

**Última actualización**: Enero 2024


