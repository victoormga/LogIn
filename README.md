# LogIn

Proyecto que permite a un usuario iniciar sesión y ser redirigido a otra web.

## Requisitos

Asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) y npm  
- [Docker](https://www.docker.com/)  
- [SQLite](https://www.sqlite.org)  

## Ejecución con Node

1. Clona el repositorio:

   ```bash
   git clone https://github.com/victoormga/LogIn.git
   cd LogIn
   npm install
   ```

2. Ejecuta el servidor:

   ```bash
   node server.js
   ```

3. Accede desde el navegador:

   ```
   http://localhost:3000
   http://localhost:8080
   ```

## Ejecución con Docker desde la terminal

1. Ve al directorio del proyecto:

   ```bash
   cd LogIn
   ```

2. Construye la imagen de Docker:

   ```bash
   docker build -t login .
   ```

3. Ejecuta el contenedor:

   ```bash
   docker run -p 3000:3000 -p 8080:8080 login
   ```

   > ⚠️ **Nota:** Si es la primera vez que ejecutas el contenedor y lo detienes con `Ctrl + C`, puedes volver a iniciarlo con:  
   ```bash
   docker run login
   ```

4. Accede desde el navegador:

   ```
   http://localhost:3000
   http://localhost:8080
   ```
