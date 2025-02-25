# LogIn

Proyecto mediante el cual un log in conduce a otra web.

## Requisitos

Asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) y npm 
- [Docker](https://www.docker.com/) 
- [Squlite](https://www.sqlite.org)

## Ejecución con Node.

1. Clona el repositorio:

  ```bash
  git clone https://github.com/victoormga/LogIn.git
  cd LogIn
  npm install

2. Ejecutar:

  ```bash
  node server.js

## Ejecución con Docker desde terminal.

  ```bash
  cd LogIn
  docker build -t login .
  docker run -p 3000:3000 -p 8080:8080 login  
    
