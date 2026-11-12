# TECNO Design System
TECNO — Celulares, Servicio Técnico & Repuestos. Comercio de Cruz del Eje (Córdoba, AR), locales en San Martín 272 y Alvear 325. Vende celulares nuevos y usados seleccionados, servicio técnico, repuestos (también por mayor), electrodomésticos y scooters eléctricos. Promesa: **"Tu equipo, en buenas manos."**

**Fuentes:** `uploads/TECNO_Manual_de_Marca.pdf` (no se pudo leer en el entorno; se usó el brief textual) y notas del usuario. **Los logos SVG no fueron adjuntados**: no hay logo en `assets/`; se usa el nombre "TECNO" en Saira Bold. Logo: wordmark geométrico cuya "O" final es el ícono de encendido; no deformar, rotar, recolorear ni dar sombra; espacio libre = ancho del isotipo.

## Content fundamentals
Voseo argentino, claro, cercano y resolutivo. Siempre mostrar precio, estado del equipo y garantía. Cada mensaje cierra con una acción: *escribinos, vení, consultá*. Sin emoji. Ej: "Cambiamos tu pantalla en el día y con garantía. Escribinos." Títulos en MAYÚSCULAS.

## Visual foundations
- **Color:** 100% monocromático. Negro #0A0A0A, Grafito #1C1C1E, Acero #3A3A3C, Gris medio #8E8E93, Niebla #E5E5EA, Humo #F5F5F7, Blanco. ~60% negro, 25% blanco, 15% grises. Solo las fotos de producto aportan color.
- **Tipo:** Saira (Bold/SemiBold) para títulos en mayúsculas con tracking 2%, etiquetas con tracking 20%; Inter para texto, botones y formularios. Precios: Saira Bold, números tabulares.
- **Recurso gráfico:** "línea de encendido" (barra vertical 4px, puntas redondeadas) antes de títulos/etiquetas. El isotipo power, grande, recortado, a 6–10% de opacidad como textura de fondo.
- **Radios:** 8 inputs, 16 cards, 999 botones. Espaciado en múltiplos de 8.
- **Cards/bordes/sombras:** fondo Humo (claro) o Grafito (oscuro), borde 1px Niebla/Acero, sin sombras. Sin gradientes.
- **Hover:** botones invierten colores (relleno ↔ contorno); link baja opacidad. Transición 160ms. Sin animaciones llamativas.
- **Imágenes:** fotos de producto limpias; el único color de la marca.

## Iconography
Lineales estilo Lucide (https://lucide.dev), trazo 1.5–2px, solo blanco o negro. Sin emoji ni íconos unicode. *Se enlaza Lucide por CDN (no hay set propio adjunto).*

## Components
Button, Badge, Input, Card, PowerLine — en `components/core/`. Tarjeta: `components/core/core.card.html`.

## Index
- `styles.css` → `tokens/{colors,typography,spacing}.css` (fuentes de Google Fonts vía @import)
- `guidelines/` tarjetas de fundamentos
- `thumbnail.html`, `SKILL.md`
