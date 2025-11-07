🧮 Calculator-TSX: Calculadora Básica (React, TypeScript, Tailwind)

Este es un miniproyecto de práctica desarrollado para implementar una Calculadora Básica utilizando tecnologías modernas. El enfoque principal del proyecto ha sido la construcción de la interfaz de usuario (UI) con una arquitectura de componentes limpia y un diseño responsivo.

🚀 Estado del Proyecto

Característica

Estado

Notas

Interfaz (UI/UX)

✅ Completa

Se han definido los componentes Button, ButtonClear, Screen, y Title. El diseño se ha implementado utilizando Tailwind CSS.

Lógica Funcional

⏳ Pendiente

Falta implementar la lógica de las operaciones matemáticas (suma, resta, multiplicación, división, y manejo de la entrada de números).

Pruebas

❌ No iniciadas

Pendiente de añadir pruebas unitarias.

🛠️ Tecnologías Utilizadas

Este proyecto fue iniciado con Vite y utiliza las siguientes herramientas en su stack:

Framework: React v19.1.1

Lenguaje: TypeScript

Estilos: Tailwind CSS v4.1.17 (Zero-config)

Bundler: Vite v7.1.7

Gestor de Paquetes: npm (ver package.json)

📂 Estructura de Archivos Clave

La aplicación sigue una estructura modular para mantener la claridad del código:

src/
├── components/           # Componentes reusables de la UI
│   ├── Button.tsx        # Botón estándar de la calculadora
│   ├── ButtonClear.tsx   # Botón para la función "C" o "CE"
│   ├── Screen.tsx        # Pantalla donde se muestra la entrada/resultado
│   └── Title.tsx         # Título de la aplicación
├── pages/
│   └── Calculator.tsx    # Contiene toda la lógica y la disposición (Layout) de la calculadora
├── App.tsx               # Componente principal que renderiza la aplicación
├── main.tsx              # Punto de entrada de la aplicación
└── index.css             # Estilos globales y reseteo


⚙️ Configuración y Ejecución Local

Para poner en marcha el proyecto en tu máquina local, sigue los siguientes pasos:

1. Clonar el Repositorio

# Reemplaza con el comando de clonación si estuviera en un repositorio
# git clone [URL_DEL_REPO]
# cd calculator-tsx


2. Instalar Dependencias

Asegúrate de tener Node.js v22+ instalado.

npm install


3. Modo Desarrollo

Ejecuta el proyecto en modo desarrollo con recarga en caliente (hot module replacement).

npm run dev


La aplicación estará disponible en http://localhost:5173 (o el puerto que te indique Vite).

4. Compilar para Producción

Genera la versión optimizada para despliegue.

npm run build


5. Previsualización de Producción

Sirve la compilación localmente para verificar el resultado del build.

npm run preview
