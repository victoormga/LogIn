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

  ```bash
  npm install
  node server.js
  http://localhost:3000 & http://localhost:8080



## Ejecución con Docker desde terminal.

  ```bash
  cd LogIn
  docker build -t login .
  docker run -p 3000:3000 -p 8080:8080 login  
  (Primer vez, si se cierra el servicio con ctrl + C, se podrá ejecutar con docker run login)
  http://localhost:3000 & http://localhost:8080
