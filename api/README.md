# Explanation of the functioning of the backend

## Explanation of folders

- ### node_modules

  #### Directorio que contiene las dependencias de Node.js.

- ### scr

  #### La carpeta "src" es donde se escribe el código fuente de la aplicación.

  #### Dentro de esta encontramos las siguentes carpetas y archivos:

  |             |                                                                                                                                   |
  | ----------- | --------------------------------------------------------------------------------------------------------------------------------- |
  | controller  | Contiene los controladores que manejan las solicitudes HTTP entrantes.                                                            |
  | handler     | Contiene los manejadores de errores y excepciones que pueden ocurrir durante el procesamiento de las solicitudes HTTP.            |
  | middleware  | Contiene funciones o módulos de código que realizan tareas específicas.                                                           |
  | models      | Contiene las definiciones de los modelos de la base de datos utilizando Sequelize ORM.                                            |
  | routes      | Contiene los archivos de rutas que manejan las solicitudes HTTP entrantes y las dirigen hacia los controladores correspondientes. |
  | database.js | Archivo que utiliza la información de configuración para inicializar la conexión a la base de datos utilizando Sequelize ORM.     |
  | server.js   | El archivo principal de la aplicación que inicializa Express.js y carga las rutas y controladores.                                |

- ### .env

  #### Archivo de configuración que contiene la información de la base de datos.

  #### Colócalo en la raíz del directorio de tu proyecto. Esto significa que el archivo debe estar ubicado en el mismo nivel que la carpeta que contiene tu código fuente y otros archivos de configuración, como package.json o requirements.txt.

  #### Este esta configurado de esta forma:

      DB_NAME=vizta
      DB_USER= Your postgres user
      DB_PASSWORD= Your postgres password
      DB_HOST=localhost
      DB_DIALECT=postgres

      JWT_SECRET=vizta

      PORT=3000

- ### package.json

  #### Archivo que describe la aplicación y sus dependencias.

## Project scripts

|                |                                                                                                                                                                                                                                                                                                              |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| npm start      | Este script inicia la aplicación ejecutando el archivo server.js ubicado en el directorio "src" utilizando Node.js. Este script se utiliza generalmente en un entorno de producción.                                                                                                                         |
| npm run dev    | Este script inicia la aplicación utilizando nodemon, una herramienta de reinicio automático para Node.js, lo que significa que la aplicación se recargará automáticamente cada vez que se realice un cambio en el código fuente. Este script se utiliza generalmente durante el desarrollo de la aplicación. |
| npm run lint   | Este script utiliza la herramienta "eslint" para analizar el código y buscar posibles errores, inconsistencias y violaciones de estilo en el código JavaScript.                                                                                                                                              |
| npm run format | Este script utiliza la herramienta "prettier" para formatear automáticamente el código según ciertas reglas predefinidas.                                                                                                                                                                                    |

---

## Routes

#Hola

---

## Tables Relationship

---
