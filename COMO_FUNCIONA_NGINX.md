# ¿Cómo sabe Nginx a qué puerto ir?

## Explicación Simple

Cuando alguien visita `https://vanguardkids.com`, esto es lo que pasa:

```
1. El navegador envía una petición a: https://vanguardkids.com
   └─> DNS resuelve: vanguardkids.com → 72.60.172.101 (tu VPS)
   
2. La petición llega a tu VPS en el puerto 443 (HTTPS)
   └─> Nginx recibe la petición
   
3. Nginx lee el header "Host: vanguardkids.com" de la petición
   └─> Busca en sus configuraciones cuál tiene ese server_name
   
4. Encuentra la configuración de vanguardkids.com
   └─> Esa configuración dice: proxy_pass http://localhost:3001
   
5. Nginx redirige la petición al puerto 3001
   └─> Tu app de Next.js responde
   
6. Nginx devuelve la respuesta al navegador
```

## Visualización

```
Internet
   │
   │ Petición: https://vanguardkids.com
   │ Header: Host: vanguardkids.com
   ▼
┌─────────────────────────────────────┐
│  VPS (72.60.172.101)               │
│                                     │
│  ┌──────────────────────────────┐  │
│  │  Nginx (Puerto 443)          │  │
│  │                               │  │
│  │  Lee: Host: vanguardkids.com │  │
│  │  Busca configuración...      │  │
│  │  Encuentra:                  │  │
│  │  server_name vanguardkids.com│  │
│  │  proxy_pass → puerto 3001    │  │
│  └───────────┬──────────────────┘  │
│              │                      │
│              ▼                      │
│  ┌──────────────────────────────┐  │
│  │  App vanguardkids (Puerto 3001)│  │
│  │  Next.js corriendo aquí      │  │
│  └──────────────────────────────┘  │
│                                     │
│  ┌──────────────────────────────┐  │
│  │  App vanguardschools (Puerto 3000)│
│  │  (NO se usa para vanguardkids)│  │
│  └──────────────────────────────┘  │
└─────────────────────────────────────┘
```

## Puntos Clave

1. **DNS solo apunta a la IP**: `vanguardkids.com → 72.60.172.101`
2. **Nginx decide según el dominio**: Lee el header `Host` de la petición
3. **Cada dominio tiene su configuración**: 
   - `vanguardkids.com` → puerto 3001
   - `vanguardschools.com` → puerto 3000 (u otro)
4. **Nginx actúa como "traductor"**: Recibe en puerto 443 y redirige al puerto correcto

## Por eso necesitamos:

- ✅ Configuración de Nginx con `server_name vanguardkids.com`
- ✅ Esa configuración debe tener `proxy_pass http://localhost:3001`
- ✅ La app debe estar corriendo en puerto 3001

