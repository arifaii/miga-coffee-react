# ☕ Miga & Coffee — React

Migración a React de la landing page responsive de una cafetería ficticia. El proyecto conserva el diseño original y reorganiza la interfaz en componentes reutilizables.

## Tecnologías

- React
- Vite
- React Router
- JavaScript (JSX)
- CSS3 con metodología Mobile First
- Font Awesome

## Funcionalidades

- Navegación por secciones.
- Cards de productos generadas desde datos y props.
- Galería reutilizable generada con `map`.
- Formulario controlado con `useState`.
- Registro de eventos de los inputs, envío y reset en la consola.
- Envío del formulario con `event.preventDefault()`.
- Navegación con React Router y página personalizada de error 404.
- Diseño responsive para celular, tablet y escritorio.

## Estructura

```text
src/
├── assets/images/       # Imágenes del proyecto
├── components/          # Componentes visuales reutilizables
├── hooks/               # Custom hooks
├── pages/               # Páginas asociadas a rutas
├── styles/              # Estilos CSS
├── App.jsx              # Rutas y layout principal
└── main.jsx             # Punto de entrada de React
```

## Instalación y ejecución

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/arifaii/Miga-Coffee.git
   ```

2. Entrar a la carpeta del proyecto:

   ```bash
   cd Miga-Coffee
   ```

3. Instalar las dependencias:

   ```bash
   npm install
   ```

4. Iniciar el servidor de desarrollo:

   ```bash
   npm run dev
   ```

5. Abrir en el navegador la URL que muestra la terminal, normalmente `http://localhost:5173`.

## Compilación de producción

```bash
npm run build
```

## Autora

**Ariela Faivisovich**

- [GitHub](https://github.com/arifaii)
- [LinkedIn](https://www.linkedin.com/in/ariela-faivisovich-krowicki/)

Proyecto realizado con fines educativos para la **Diplomatura en Desarrollo Web Full Stack**.
