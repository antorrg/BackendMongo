# BackendMongo

Proyecto con Base de datos MongoDB. Iniciado el día 29/12/2023
Al día 25/01/2024 las rutas son:

## Usuarios

### Creación de Usuario

- Método: `POST`
- Ruta: `/user/create`
- Descripción: Crea un nuevo usuario.
- Parámetros:
  - `nombre` (cadena): Nombre del usuario.
  - `correo` (cadena): Correo electrónico del usuario.
  - `contrasena` (cadena): Contraseña del usuario.

### Inicio de Sesión de Usuario

- Método: `POST`
- Ruta: `/user/login`
- Descripción: Inicia sesión para obtener un token de acceso.
- Parámetros:
  - `correo` (cadena): Correo electrónico del usuario.
  - `contrasena` (cadena): Contraseña del usuario.

### Obtener Todos los Usuarios (con permiso)

- Método: `GET`
- Ruta: `/user`
- Descripción: Obtiene la lista de todos los usuarios con permisos especiales.

