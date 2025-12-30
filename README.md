# 🌟 Vanguard Kids - Website

Sitio web oficial de Vanguard Kids Preschool & Academy. Desarrollado con Next.js 14, TypeScript y Tailwind CSS.

## 📋 Características

- ✅ Diseño moderno y responsive
- ✅ Sistema de formularios (Contact, Apply, Chat)
- ✅ Envío de correos electrónicos con Nodemailer
- ✅ Widget de chat flotante
- ✅ Almacenamiento de datos en JSON
- ✅ Almacenamiento de currículums (PDFs)
- ✅ Sistema de reportes
- ✅ Notificaciones toast (react-hot-toast)

## 🚀 Tecnologías

- **Next.js 14** - Framework React
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos
- **React Icons** - Iconos
- **Nodemailer** - Envío de correos
- **Zod** - Validación de datos
- **react-hot-toast** - Notificaciones

## 📁 Estructura del Proyecto

```
web-vanguardkids/
├── app/                    # App Router de Next.js
│   ├── api/               # API routes
│   │   ├── contact/       # Formulario de contacto
│   │   ├── apply/         # Formulario de aplicación
│   │   ├── chat/          # Mensajes del chat
│   │   └── reports/      # Reportes de datos
│   ├── aboutus/           # Página About Us
│   ├── apply/             # Página de aplicación
│   ├── contact/           # Página de contacto
│   ├── forms/             # Página de formularios
│   ├── teacher-training/  # Página de entrenamiento
│   ├── work-with-us/      # Página de trabajo
│   └── page.tsx           # Página principal
├── components/            # Componentes React
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── ChatWidget.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   └── Section.tsx
├── lib/                   # Utilidades
│   ├── email.ts           # Configuración de correos
│   ├── email-templates.ts # Plantillas de correo
│   └── storage.ts         # Almacenamiento de datos
├── public/               # Archivos estáticos
│   ├── logo.png
│   ├── favicon.png
│   └── img*.jpg
├── data/                 # Datos de formularios (generado)
├── uploads/              # Archivos subidos (generado)
└── formularios.json      # Configuración de formularios
```

## 🔧 Instalación

### Requisitos

- Node.js 18+
- npm o yarn

### Pasos

1. **Clonar el repositorio**
```bash
git clone https://github.com/LiamFranKi/vanguardkids-web.git
cd vanguardkids-web
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**

Crear archivo `.env.local` en la raíz del proyecto:

```env
# Configuración SMTP para envío de emails
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=tu-email@gmail.com
SMTP_PASS=tu-contraseña-de-aplicacion
SMTP_FROM=tu-email@gmail.com

# Email de contacto por defecto
CONTACT_EMAIL=admin@vanguardkids.com

# URL del sitio
NEXT_PUBLIC_SITE_URL=https://www.vanguardkids.com
```

4. **Configurar formularios**

Editar `formularios.json` con los destinatarios de correo:

```json
{
  "contact": {
    "to": ["email1@example.com", "email2@example.com"],
    "subject": "📧 New Contact Form Submission",
    "replyTo": true
  },
  "apply": {
    "to": ["email@example.com"],
    "subject": "💼 New Job Application",
    "replyTo": true
  },
  "chat": {
    "to": ["email@example.com"],
    "subject": "💬 New Chat Message",
    "replyTo": true
  }
}
```

5. **Ejecutar en desarrollo**
```bash
npm run dev
```

6. **Construir para producción**
```bash
npm run build
npm start
```

## 📧 Sistema de Correos

El sistema envía correos automáticamente cuando se envían formularios:

- **Correo al administrador**: Con todos los datos del formulario
- **Correo de agradecimiento**: Al usuario que envió el formulario

Los correos incluyen:
- Logo de Vanguard Kids
- Diseño profesional con gradientes
- Botones de acción rápida (Email y WhatsApp para chat)
- Información completa del formulario

## 💾 Almacenamiento de Datos

### Formularios

Todos los formularios se guardan en archivos JSON organizados por fecha:

```
data/
├── contact/
│   └── 2025-01/
│       └── 2025-01-15.json
├── apply/
│   └── 2025-01/
│       └── 2025-01-15.json
└── chat/
    └── 2025-01/
        └── 2025-01-15.json
```

### Currículums

Los PDFs de currículums se guardan en:

```
uploads/
└── resumes/
    └── [timestamp]_[filename].pdf
```

## 📊 Reportes

Acceder a los reportes mediante la API:

- `GET /api/reports` - Todos los datos
- `GET /api/reports?type=contact` - Solo contactos
- `GET /api/reports?type=apply` - Solo aplicaciones
- `GET /api/reports?type=chat` - Solo chats
- `GET /api/reports?stats=true` - Estadísticas
- `GET /api/reports?export=csv` - Exportar a CSV

## 🌐 Despliegue en VPS (Hostinger)

Ver el archivo `CONTEXTO_NUEVA_WEB.md` para instrucciones completas de despliegue.

### Resumen rápido:

1. **Conectarse al VPS**
```bash
ssh root@72.60.172.101
```

2. **Clonar el repositorio**
```bash
cd /var/www
git clone https://github.com/LiamFranKi/vanguardkids-web.git vanguardkids-web
cd vanguardkids-web
```

3. **Instalar dependencias y construir**
```bash
npm install
npm run build
```

4. **Configurar .env.local** (crear en el servidor)

5. **Iniciar con PM2**
```bash
pm2 start npm --name "vanguardkids-web" -- start -- --port 3001
pm2 save
```

6. **Configurar Nginx** (ver CONTEXTO_NUEVA_WEB.md)

7. **Configurar SSL con Certbot**

## 📝 Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Construir para producción
- `npm run start` - Iniciar servidor de producción
- `npm run lint` - Ejecutar linter
- `npm run kill` - Cerrar puerto 3000

## 🔒 Seguridad

- Variables de entorno en `.env.local` (no se sube a Git)
- Validación de datos con Zod
- Sanitización de nombres de archivo
- Headers de seguridad en respuestas

## 📱 Redes Sociales

- **Facebook**: https://www.facebook.com/people/Vanguard-Kids-Academy/61577858960786/
- **Instagram**: https://www.instagram.com/vanguard_kids_academy/

## 📄 Licencia

Proyecto privado de Vanguard Kids.

## 👥 Contacto

Para más información, contactar a través del formulario en el sitio web.

---

**Última actualización**: Enero 2025
