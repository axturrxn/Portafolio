# Portafolio

Sitio de una sola página, organizado como proyecto (no un solo HTML monolítico).

## Estructura

```
portafolio/
├── index.html
├── css/
│   ├── variables.css     ← colores (magenta, dark bg) y tipografías, edita solo aquí para cambiar el look global
│   ├── reset.css         ← normalización base
│   ├── layout.css        ← nav, secciones, fondo, footer, animación de reveal
│   └── components.css    ← hero, botones, pillars, cards de proyecto, skills, contacto
├── js/
│   ├── main.js            ← scroll del nav + reveal on scroll
│   └── role-cycle.js       ← animación de "Desarrollador / Diseñador / Creador 3D"
├── assets/
│   ├── images/             ← screenshots de proyectos, avatar, etc. (vacío por ahora)
│   └── icons/                ← iconos SVG si los necesitas
└── README.md
```

## Cómo verlo localmente

Solo abre `index.html` en el navegador, o si prefieres correr un server local (recomendado para que las rutas relativas siempre funcionen igual que en producción):

```bash
cd portafolio
python -m http.server 8000
```

Y entra a `http://localhost:8000`.

## Pendientes / personalización

- Reemplaza "TU NOMBRE" en el `<nav>` y `<h1>` del hero.
- Cambia `tucorreo@ejemplo.com` y los links de GitHub/LinkedIn/Instagram en `#contact`.
- Sustituye las 4 tarjetas de `#work` por tus proyectos reales (usa `assets/images/` para las capturas).
- El color magenta y las tipografías viven todos en `css/variables.css` — cambia ahí si algún día quieres otro acento.
