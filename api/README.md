# Explanation of the functioning of the backend

## Explanation of folders

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
      DB_USER=postgres
      DB_PASSWORD=44019204
      DB_HOST=localhost
      DB_DIALECT=postgres

      PORT=3001

      JWT_SECRET=vizta
      JWT_EXPIRATION=12h

      CLIENT_ID=577878164983-u5d6a8vgv7724d6ljdr93jq39rgn8drd.apps.googleusercontent.com
      CLIENT_SECRET=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
      REDIRECT_URI=http://localhost:3001/auth/signingoogle/register

      NM_PASS=fhndtzhxomddvroo

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

- Admin

- Ads

  |              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
  | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | GET /ads     | Este controlador es una función que se utiliza para obtener anuncios de una base de datos, utilizando ciertos criterios de búsqueda proporcionados en los parámetros de una solicitud HTTP. La función utiliza el objeto req.query para extraer los parámetros opcionales de la consulta y construye dinámicamente un objeto options que se utiliza para llamar al método findAll de la clase Ad, que devuelve los anuncios que cumplen con los criterios de búsqueda. La función también maneja los errores y devuelve una respuesta HTTP adecuada en consecuencia. En resumen, este controlador se encarga de buscar y filtrar anuncios de una base de datos en función de ciertos criterios de búsqueda y devolver los resultados adecuados en una respuesta HTTP.                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
  | GET /ads/:id | Este controlador es una función que se utiliza para obtener un anuncio específico de una base de datos, utilizando el identificador único de dicho anuncio proporcionado en los parámetros de una solicitud HTTP. La función utiliza el objeto req.params para extraer el valor de id de los parámetros de la consulta y busca el anuncio correspondiente utilizando el método findByPk de la clase Ad. Si el anuncio no se encuentra, la función devuelve una respuesta HTTP con el código de estado 404 y un mensaje de error, en caso contrario devuelve una respuesta HTTP con el código de estado 200 y el objeto anuncio en formato JSON. La función también maneja los errores y devuelve una respuesta HTTP adecuada en consecuencia.                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
  | POST /ads    | Este controlador es una función que se utiliza para crear un nuevo anuncio en una base de datos utilizando los datos proporcionados en el cuerpo de una solicitud HTTP. La función extrae los datos necesarios del objeto req.body y luego busca el usuario y la categoría correspondiente a través de los identificadores proporcionados utilizando los métodos findByPk de las clases User y Category respectivamente. Si el usuario o la categoría no se encuentran en la base de datos, la función devuelve una respuesta HTTP con el código de estado 404 y un mensaje de error correspondiente. En caso contrario, la función utiliza el método create de la clase Ad para crear el nuevo anuncio en la base de datos con los datos proporcionados en el cuerpo de la solicitud. Después de crear el anuncio, la función utiliza el módulo nodemailer para enviar un correo electrónico al usuario que creó el anuncio, notificándole que el anuncio se ha publicado correctamente. Finalmente, la función devuelve una respuesta HTTP con el código de estado 201 y el objeto anuncio recién creado en formato JSON. La función también maneja los errores y devuelve una respuesta HTTP adecuada en consecuencia. |

- Auth

  |                        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
  | ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | POST /auth/singup      | Este es un controlador para el registro de nuevos usuarios. Primero, se extraen el nombre, el correo electrónico y la contraseña del cuerpo de la solicitud. Luego, se realizan algunas validaciones para asegurarse de que se proporcionen los campos necesarios y de que el correo electrónico tenga un formato válido. Después, se verifica si ya existe un usuario con la misma dirección de correo electrónico y si es así, se devuelve un error de conflicto. Si todo está bien, la contraseña se cifra y se crea un nuevo usuario en la base de datos. Se envía un correo electrónico de bienvenida al nuevo usuario y se devuelve una respuesta exitosa al cliente. Si algo sale mal durante el proceso, se devuelve un mensaje de error al cliente.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
  | POST /auth/signin      | Este es un controlador para el inicio de sesión de nuevos usuarios. Toma un objeto email y password del objeto req.body. Primero se valida si los campos email y password existen en el objeto req.body. A continuación, se verifica si el correo electrónico existe en la base de datos. Si no existe, se devuelve un error. Si el correo electrónico existe, se compara la contraseña cifrada almacenada en la base de datos con la contraseña proporcionada por el usuario utilizando la función bcrypt.compare(). Si las contraseñas no coinciden, se devuelve un error. Si la autenticación tiene éxito, se emite un token JSON Web con la ayuda de la biblioteca jsonwebtoken. El token contiene el id del usuario y su rol. El token se envía junto con la información del usuario en el objeto de respuesta en un formato JSON.                                                                                                                                                                                                                                                                                                                                                                                                                                |
  | GET /auth/signingoogle | Este es un controlador para el registro y inicio de sesión de los usuarios. El controlador genera una URL de autorización utilizando el cliente de OAuth2 de Google. Luego, si no hay un código en la solicitud, se redirige al usuario a la URL de autorización para que inicie sesión en Google. Cuando el usuario inicia sesión en Google y proporciona los permisos necesarios, Google devuelve un código en la solicitud. El controlador utiliza este código para obtener los tokens de acceso y actualizar las credenciales del cliente de OAuth2. Luego, utiliza el cliente actualizado para hacer una solicitud a la API de Google para obtener información del usuario, incluyendo su dirección de correo electrónico. Si un usuario con la misma dirección de correo electrónico ya está registrado en la base de datos, se devuelve la información del usuario y se crea un token JWT para esa cuenta. Si el usuario no está registrado en la base de datos, se crea una nueva cuenta con los datos proporcionados por Google, se envía un correo electrónico de bienvenida y se crea un token JWT para la nueva cuenta. En caso de ocurrir algún error durante el proceso, se devuelve una respuesta con el estado 400 (BadRequest) y un mensaje de error. |

- Category

  |               |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
  | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | GET /category | Este controlador obtiene todas las categorías disponibles en la base de datos. Primero, busca todas las categorías existentes en la base de datos, y si no hay ninguna, crea las categorías predeterminadas (Artículo, Bienes Raíces, Servicio, Vehículo y Trabajo). Luego, busca todas las categorías nuevamente y devuelve una respuesta JSON con un arreglo que contiene el id y el nombre de cada categoría encontrada. Si ocurre un error al intentar acceder a la base de datos, el controlador devuelve una respuesta de error con un mensaje 'Failed to retrieve the data'. |

- Rating

- Report

- User

  |                          |     |
  | ------------------------ | --- |
  | GET /users/:id           |     |
  | GET /users/:id/ads       |     |
  | GET /users/:id/favorites |     |
  | PUT /users/id:           |     |
  | DELETE /users/:id        |     |

---

## Tables Relationship

- #### Un usuario puede tener muchos anuncios (Ad).

- #### Un anuncio (Ad) pertenece a un usuario.

- #### Un usuario puede tener muchos favoritos (Favorite).

- #### Un favorito (Favorite) pertenece a un usuario.

- #### Un usuario puede tener muchas órdenes (Order).

- #### Una orden (Order) pertenece a un usuario.

- #### Un usuario puede tener muchos reportes (Report).

- #### Un reporte (Report) pertenece a un usuario.

- #### Un anuncio (Ad) pertenece a una categoría (Category).

- #### Una categoría (Category) puede tener muchos anuncios (Ad).

- #### Un anuncio (Ad) puede tener muchos favoritos (Favorite).

- #### Un favorito (Favorite) pertenece a un anuncio (Ad).

- #### Un anuncio (Ad) puede tener muchas órdenes (Order).

- #### Una orden (Order) pertenece a un anuncio (Ad).

- #### Un anuncio (Ad) puede tener muchas calificaciones (Rating).

- #### Una calificación (Rating) pertenece a un anuncio (Ad).

- #### Un anuncio (Ad) puede tener muchos reportes (Report).

- #### Un reporte (Report) pertenece a un anuncio (Ad).

---
