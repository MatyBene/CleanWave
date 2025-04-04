# Clean Wave

## Descripción
Clean Wave es una plataforma de comercio electrónico especializada en productos de limpieza, ofreciendo una experiencia de compra diferenciada para consumidores finales y clientes mayoristas.

## Características Principales
- **Doble Portal**: Interfaz específica para consumidores finales y mayoristas
- **Gestión de Usuarios**: Sistema completo de registro y autenticación
- **Carrito de Compras**: Funcionalidad completa con gestión de productos
- **Panel de Administración**: Dashboard para gestión de productos y usuarios
- **Responsive Design**: Interfaz adaptable a diferentes dispositivos

## Tecnologías Utilizadas
- **Frontend**: 
  - HTML5
  - CSS3
  - JavaScript
  - React
  - Chart.js
  - Vite

- **Backend**:
  - Node.js
  - Express
  - MySQL
  - Sequelize ORM

## Requisitos Previos
- Node.js (versión 14 o superior)
- MySQL
- npm o yarn

## Instalación

1. Clonar el repositorio
```bash
git clone [URL del repositorio]
```

2. Instalar dependencias del proyecto principal
```bash
npm install
```

3. Instalar dependencias del dashboard
```bash
cd dashboard
npm install
```

4. Configurar la base de datos
- Crear una base de datos MySQL
- Configurar las credenciales en `/src/database/config/config.js`
- Ejecutar las migraciones:
```bash
npm run migrate
```

5. Iniciar el servidor de desarrollo
```bash
npm run dev
```

## Estructura del Proyecto
```
├── dashboard/           # Panel de administración en React
├── public/             # Archivos estáticos
├── src/
│   ├── controllers/    # Controladores de la aplicación
│   ├── database/       # Configuración y modelos de base de datos
│   ├── middlewares/    # Middlewares de Express
│   ├── routes/         # Rutas de la aplicación
│   ├── services/       # Lógica de negocio
│   ├── validations/    # Validaciones
│   └── views/          # Vistas EJS
└── tests/              # Tests de la aplicación
```

## Características por Tipo de Usuario

### Consumidor Final
- Catálogo de productos con precios minoristas
- Carrito de compras personalizado
- Gestión de perfil y direcciones

### Cliente Mayorista
- Precios especiales al por mayor
- Historial de pedidos
- Facturación automática

### Administrador
- Gestión de productos
- Administración de usuarios
- Visualización de estadísticas
- Control de inventario

