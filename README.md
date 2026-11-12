<div align="center">

# TECNO — Celulares, Servicio Técnico & Repuestos

**Sitio web oficial de TECNO · Cruz del Eje, Córdoba, Argentina**

*Tu equipo, en buenas manos.*

[Instagram](https://www.instagram.com/tecno.cde) · [WhatsApp](https://wa.me/5493549449999) · [Linktree](https://linktr.ee/tecno.cde)

</div>

---

## 📱 Sobre el proyecto

Sitio web catálogo para **TECNO**, un comercio de tecnología con dos locales en Cruz del Eje. En la web se pueden ver los productos, armar un carrito y **enviar el pedido por WhatsApp**. No tiene pagos online.

**Qué ofrece TECNO:**
- Celulares nuevos y usados seleccionados (iPhone, Samsung, Motorola y Xiaomi)
- Servicio técnico de celulares
- Electrodomésticos y scooters eléctricos

## ✨ Funcionalidades

- 🛒 **Carrito de compras** guardado en `localStorage`, para que no se pierda al recargar la página
- 💬 **Pedido por WhatsApp**: el carrito arma un mensaje automático con los productos, las cantidades y el total
- 🔍 **Buscador en vivo** por nombre o marca
- 🗂️ **Catálogo por categorías**: iPhone nuevos, iPhone usados, Samsung, Motorola, Xiaomi, Electro y scooters
- 🔧 **Sección de servicio técnico** con el proceso de reparación en 3 pasos
- 📍 **Locales** con mapa embebido y horarios
- 📲 **Diseño responsive** pensado primero para el celular
- 🟢 **Botón flotante de WhatsApp**

## 🛠️ Tecnologías

- HTML5
- CSS3 (variables CSS / design tokens)
- JavaScript (vanilla, sin frameworks)
- Google Fonts: [Saira](https://fonts.google.com/specimen/Saira) e [Inter](https://fonts.google.com/specimen/Inter)
- Íconos: [Lucide](https://lucide.dev)

## 📁 Estructura del proyecto

```
tecno-web/
├── index.html          # Página principal (HTML, CSS y JS)
├── img/
│   ├── logos/          # Logo, isotipo y favicon en SVG
│   └── productos/      # Fotos de los productos por categoría
│       ├── android-motorola/
│       ├── android-samsung/
│       ├── android-xiaomi/
│       ├── iphones-nuevos/
│       └── iphones-usados/
└── README.md
```

> Ajustá esta estructura si tus carpetas o archivos tienen otros nombres.

## 🚀 Cómo verlo en local

1. Cloná el repositorio:
   ```bash
   git clone https://github.com/TU-USUARIO/tecno-web.git
   ```
2. Abrí `index.html` en el navegador, o usá la extensión **Live Server** de VS Code.

## ✏️ Cómo editar productos y precios

Todos los productos están en un único array de JavaScript dentro de `index.html`. Para agregar, quitar o cambiar un precio, solo hay que editar ese array:

```js
{
  id: "iphone-16-pro",
  nombre: "iPhone 16 Pro 128 GB",
  marca: "Apple",
  categoria: "iphones-nuevos",
  estado: "Nuevo",            // "Nuevo" | "Usado seleccionado"
  precio: 1499999,
  imagen: "img/productos/iphones-nuevos/iph-16-pro-2.webp"
}
```

## 🎨 Identidad de marca

La web sigue el **Manual de Identidad de Marca de TECNO**:

| Elemento | Valor |
|---|---|
| Paleta | Negro `#0A0A0A` · Grafito `#1C1C1E` · Acero `#3A3A3C` · Gris `#8E8E93` · Niebla `#E5E5EA` · Humo `#F5F5F7` · Blanco `#FFFFFF` |
| Tipografía títulos | Saira (Bold / SemiBold) |
| Tipografía textos | Inter |
| Estilo | 100% monocromático, botones en forma de píldora, "línea de encendido" antes de los títulos |

## 🌐 Deploy

Se puede publicar gratis con:
- **GitHub Pages**: *Settings → Pages → Branch: `main` → `/root`*
- **Vercel** o **Netlify**: importando el repositorio (no necesita build)

## 📞 Contacto

| | |
|---|---|
| 📍 Locales | San Martín 272 y Alvear 325 — Cruz del Eje, Córdoba |
| 🕘 Horario | Lun a Sáb 8:45–12:45 y 17:30–22 · Dom cerrado |
| 💬 WhatsApp | [+54 9 3549 44-9999](https://wa.me/5493549449999) |
| 📸 Instagram | [@tecno.cde](https://www.instagram.com/tecno.cde) |

---

<div align="center">

Diseño y desarrollo: **Uma** · 2026

</div>
