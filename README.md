# Citronela

Asociación Civil dedicada al cannabis medicinal: acceso legal, científico y solidario en Córdoba, Argentina.

## Estado actual

**La landing page está funcional.** El resto de la plataforma está en construcción.

## Stack

- Next.js 14 (App Router)
- Drizzle ORM
- Neon PostgreSQL
- Tailwind CSS
- shadcn/ui

## Variables de Entorno

Copia `.env.example` a `.env.local` y configura:

```env
DATABASE_URL=postgresql://...
JWT_SECRET=tu-secret-segura
```

## Desarrollo

```bash
npm install
npm run dev
```

## Deploy en Vercel

1. Conectá el repo a Vercel
2. Configurá las Environment Variables en Project Settings
3. Listo!

## Estructura

```
app/
├── page.tsx       # Landing page (única funcional por ahora)
├── layout.tsx     # Root layout
└── globals.css    # Global styles
components/
├── landing/       # Landing page components
└── features/landing/  # Landing page sections
public/
├── images/        # Static images
└── fonts/         # Custom fonts
```