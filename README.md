# Calculadora Básica en React con TypeScript

Este es un proyecto de calculadora básica construida con **React**, **TypeScript**, y **Tailwind CSS**. Permite realizar operaciones matemáticas simples, como suma, resta, multiplicación, división y más. Además, incluye manejo de errores para evitar resultados como "Infinity" o "Error" debido a entradas incorrectas.

Visita mi [App de calculator.tsx en:](https://calculator-tsx-six.vercel.app/)

## Tecnologías Utilizadas

- **React**: Biblioteca para construir interfaces de usuario.
- **TypeScript**: Superset de JavaScript que añade tipado estático.
- **Tailwind CSS**: Framework CSS para un diseño rápido y flexible.
- **Math.js**: Librería para realizar evaluaciones matemáticas de forma segura.
- **Vite**: Herramienta de desarrollo rápida para proyectos modernos en JavaScript y TypeScript.

## Estructura del Proyecto

La estructura del proyecto es la siguiente:

```plaintext
calculator-tsx/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Button.tsx
│   │   ├── Screen.tsx
│   │   └── Title.tsx
│   ├── App.tsx
│   ├── index.tsx
│   └── styles/
│       └── index.css
├── package.json
└── vite.config.ts

```

### Descripción de los Componentes:

- **Button.tsx**: Componente que representa un botón de la calculadora. Usa un estilo condicional basado en el tipo de botón (número, operador, etc.).
- **Screen.tsx**: Componente que muestra el valor actual de la pantalla de la calculadora.
- **Title.tsx**: Componente que muestra el título de la aplicación.

## Instalación

1. Clona el repositorio en tu máquina local:

  ```bash
   git clone https://github.com/tu_usuario/calculator-tsx.git
  ```
2. Navega al directorio del proyecto:
  ```bash
    cd calculator-tsx
  ```
3. Instala las dependencias utilizando npm o yarn:
   ```bash
    npm install
  ```
4. Inicia el servidor de desarrollo:
   ```bash
    npm run dev
  ```
Esto abrirá la aplicación en http://localhost:5173/ (puerto predeterminado de Vite).

USO

La calculadora permite realizar operaciones matemáticas básicas. Puedes agregar números y operadores presionando los botones. El botón de AC limpia la pantalla, y el botón de = calcula el resultado de la expresión.

Botones disponibles:

Números: 0 - 9

Operadores: +, -, *, /, %

Funciones adicionales: (, ), ., AC

Botón de igual = para obtener el resultado.

MANEJO DE ERRORES

Si se produce un error de sintaxis o un resultado de "Infinity", se mostrará un mensaje de alerta y la pantalla se limpiará automáticamente.



