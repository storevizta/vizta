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
      DB_USER=
      DB_PASSWORD=
      DB_HOST=localhost
      DB_DIALECT=postgres

      PORT=3001

      JWT_SECRET=vizta
      JWT_EXPIRATION=12h

      CLIENT_ID=577878164983-u5d6a8vgv7724d6ljdr93jq39rgn8drd.apps.googleusercontent.com
      CLIENT_SECRET=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
      REDIRECT_URI=http://localhost:3001/auth/singingoogle

      NM_EMAIL=storevizta@gmail.com
      NM_PASSWORD=fhndtzhxomddvroo

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

Recibe una solicitud POST que contiene el nombre, correo electrónico y contraseña del usuario a través del objeto "req.body". Verifica si se proporcionaron el nombre, correo electrónico y contraseña. Si alguno de ellos falta, devuelve una respuesta con el estado 400 (BadRequest) y un mensaje de error.
Verifica si el correo electrónico proporcionado es válido utilizando el paquete "validator". Si no es válido, devuelve una respuesta con el estado 400 y un mensaje de error.
Busca en la base de datos si el correo electrónico ya está registrado. Si se encuentra un usuario con el mismo correo electrónico, devuelve una respuesta con el estado 409 (Conflict) y un mensaje de error indicando que el correo electrónico ya está registrado.
Si el correo electrónico no está registrado, el controlador hashea la contraseña proporcionada utilizando la biblioteca "bcrypt".
Crea un nuevo usuario en la base de datos con el nombre, correo electrónico y contraseña hasheada.
Envía un correo electrónico de bienvenida al usuario utilizando el servicio de correo electrónico "transporter".
Devuelve una respuesta con el estado 201 (Created) y un mensaje de éxito indicando que el registro fue exitoso.

- Auth

  |                        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
  | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | POST /auth/singup      | El controlador recibe una solicitud POST a través del objeto "req.body", el cual debe contener el nombre, correo electrónico y contraseña del usuario. Si alguno de ellos falta, devuelve una respuesta con el estado 400 (BadRequest) y un mensaje de error. Luego, se utiliza el paquete "validator" para verificar si el correo electrónico proporcionado es válido, y si no lo es, se devuelve una respuesta con el estado 400 y un mensaje de error. Después, se busca en la base de datos si el correo electrónico ya está registrado. Si se encuentra un usuario con el mismo correo electrónico, se devuelve una respuesta con el estado 409 (Conflict) y un mensaje de error indicando que el correo electrónico ya está registrado. Si el correo electrónico no está registrado, el controlador hashea la contraseña proporcionada utilizando la biblioteca "bcrypt" y crea un nuevo usuario en la base de datos con el nombre, correo electrónico y contraseña hasheada. Finalmente, se envía un correo electrónico de bienvenida al usuario utilizando el servicio de correo electrónico "transporter", y se devuelve una respuesta con el estado 201 (Created) y un mensaje de éxito indicando que el registro fue exitoso. En caso de ocurrir algún error en el proceso de registro, el controlador devuelve una respuesta con el estado 400 (BadRequest) y un mensaje de error.                                                                                                                                                                                                                                              |
  | POST /auth/singin      | El controlador recibe una solicitud POST a través del objeto "req.body", el cual debe contener el correo electrónico y contraseña del usuario.. Si alguno de ellos falta, el controlador devuelve una respuesta con el estado 400 (BadRequest) y un mensaje de error que indica que se deben proporcionar ambos campos. Luego, el controlador busca en la base de datos si existe un usuario con el correo electrónico proporcionado. Si no se encuentra un usuario con ese correo electrónico, el controlador devuelve una respuesta con el estado 401 (Unauthorized) y un mensaje de error que indica que el correo electrónico no se encuentra registrado. Después, el controlador utiliza la biblioteca "bcrypt" para comparar la contraseña proporcionada con la contraseña hasheada del usuario en la base de datos. Si las contraseñas no coinciden, el controlador devuelve una respuesta con el estado 401 (Unauthorized) y un mensaje de error que indica que la contraseña es incorrecta. Si el correo electrónico y la contraseña son correctos, el controlador genera un token JWT utilizando la biblioteca "jsonwebtoken", el cual incluye el ID y el rol del usuario. El token tiene una fecha de expiración y se firma utilizando una clave secreta. Luego, el controlador devuelve una respuesta con el estado 200 (OK) y un mensaje de éxito que incluye el ID, nombre, correo electrónico, rol y token del usuario.En caso de que ocurra algún error durante el proceso de inicio de sesión, el controlador captura la excepción y devuelve una respuesta con el estado 400 (BadRequest) y un mensaje de error genérico. |
  | GET /auth/singingoogle | El controlador genera una URL de autorización utilizando el cliente de OAuth2 de Google. Luego, si no hay un código en la solicitud, se redirige al usuario a la URL de autorización para que inicie sesión en Google. Cuando el usuario inicia sesión en Google y proporciona los permisos necesarios, Google devuelve un código en la solicitud. El controlador utiliza este código para obtener los tokens de acceso y actualizar las credenciales del cliente de OAuth2. Luego, utiliza el cliente actualizado para hacer una solicitud a la API de Google para obtener información del usuario, incluyendo su dirección de correo electrónico. Si un usuario con la misma dirección de correo electrónico ya está registrado en la base de datos, se devuelve la información del usuario y se crea un token JWT para esa cuenta. Si el usuario no está registrado en la base de datos, se crea una nueva cuenta con los datos proporcionados por Google, se envía un correo electrónico de bienvenida y se crea un token JWT para la nueva cuenta. En caso de ocurrir algún error durante el proceso, se devuelve una respuesta con el estado 400 (BadRequest) y un mensaje de error.                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

- Category

  |               |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
  | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | GET /category | El controlador utiliza el método findAll de Sequelize para buscar todas las categorías en la base de datos. Si no se encuentran categorías, se agregan varias a la base de datos mediante el método bulkCreate de Sequelize. Luego, se buscan nuevamente todas las categorías y se devuelve una respuesta con un array de objetos que contienen las propiedades id y name de cada categoría en la base de datos. Si ocurre algún error en el proceso, se devuelve una respuesta con el estado 400 (BadRequest) y un mensaje de error. |

- Rating

- Report

- User

---

## Tables Relationship

### Usuario (User)

- #### Un usuario puede tener muchos anuncios (Ad).

- #### Un anuncio (Ad) pertenece a un usuario.

- #### Un usuario puede tener muchos favoritos (Favorite).

- #### Un favorito (Favorite) pertenece a un usuario.

- #### Un usuario puede tener muchas órdenes (Order).

- #### Una orden (Order) pertenece a un usuario.

- #### Un usuario puede tener muchos reportes (Report).

- #### Un reporte (Report) pertenece a un usuario.

### Anuncio (Ad)

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
