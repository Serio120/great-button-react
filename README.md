# Great Button React

Pequeño proyecto didáctico para practicar componentes reutilizables en React y el paso de propiedades (*props*).

## Qué incluye

- Un componente `MiBoton` que recibe el texto mediante la prop `texto`.
- Un botón HTML semántico y un enlace externo al curso de React.
- Estilos adaptables a pantallas pequeñas, estados de foco visibles y respeto por la preferencia de movimiento reducido.
- Vite para desarrollo y compilación, y ESLint para revisar el código.

## Requisitos

- Node.js 20.19+ o 22.12+.
- npm (incluido con Node.js).

## Instalación

```bash
git clone https://github.com/Serio120/great-button-react.git
cd great-button-react
npm ci
```

## Desarrollo

```bash
npm run dev
```

Vite mostrará la dirección local en la que puedes abrir la aplicación.

## Comprobaciones

```bash
npm run lint
npm run build
```

## Estructura

```text
src/
├── components/
│   └── MiBoton.jsx
├── App.jsx
├── App.css
├── index.css
└── main.jsx
index.html
package.json
vite.config.js
```

## Aprendizaje

En `src/App.jsx`, el componente principal utiliza `MiBoton` y le pasa el texto con `<MiBoton texto="Mi botón" />`. Puedes modificar esa prop para observar cómo se reutiliza el componente.

## Licencia

No se ha especificado una licencia para este repositorio. Consulta al propietario antes de reutilizar o distribuir el código.
