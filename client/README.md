# Explanation of the functioning of the frontend

## Explanation of folders

- ### public

  #### La carpeta "public" es donde se almacenan los archivos estáticos necesarios para el proyecto.

- ### scr

  #### La carpeta "src" es donde se escribe el código fuente de la aplicación.

  #### Dentro de esta encontramos las siguentes carpetas y archivos:

|            |                                                                                                                                                                                                                                                                                                                                                                                                |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| app        | La carpeta "app" se utiliza para almacenar el punto de entrada principal de la aplicación web. Dentro de la carpeta "app", se encuentra el archivo "main.jsx" que define y renderiza el componente raíz de la aplicación.                                                                                                                                                                      |
| components | Se utiliza para almacenar los componentes de React que se reutilizan en varias partes de la aplicación web. Estos componentes son pequeñas piezas de código que encapsulan la lógica y la apariencia de una sección de la interfaz de usuario. Su uso ayuda a mantener una estructura coherente en toda la aplicación y reduce la duplicación de código.                                       |
| layout     | Devuelve el elemento de la ruta secundaria en este nivel de la jerarquía de rutas. Este gancho es utilizado internamente por Outlet para renderizar rutas secundarias.                                                                                                                                                                                                                         |
| pages      | Cada archivo dentro de la carpeta "pages" se convierte en una ruta de la aplicación, y su nombre de archivo se utiliza como la parte final de la URL. Por ejemplo, el archivo "home.jsx" dentro de la carpeta "pages" se convertiría en la ruta "/home" de la aplicación.                                                                                                                      |
| router     | Este es el enrutador recomendado para todos los proyectos web de React Router. Utiliza DOM history API para actualizar la URL y administrar la pila de historial.                                                                                                                                                                                                                              |
| store      | Dentro de la carpeta "store", hay un archivo llamado "store.js" que exporta la configuración de la tienda. La carpeta "store" también puede contener archivos adicionales, como por ejemplo, carpetas separadas para cada slice de Redux que se esté utilizando en la aplicación. Cada slice puede tener su propio archivo de configuración con su reducer, actions y middlewares específicos. |

- ### .eslintrc.cjs

- ### .prettierrc.json

- ### index.html

- ### package.json

  #### Archivo que describe la aplicación y sus dependencias.

- ### vite.config.js

---

## Project scripts

|                 |                                                                                                                                                                                                            |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| npm run dev     | Ejecuta el servidor de desarrollo de Vite. Se utiliza para desarrollar la aplicación y muestra un servidor en vivo que se actualiza automáticamente cuando se realizan cambios en el código fuente.        |
| npm run build   | Compila y empaqueta la aplicación para producción. Este script utiliza Vite para construir una versión optimizada y lista para producción de la aplicación. El resultado se guarda en la carpeta "dist".   |
| npm run preview | Muestra una vista previa de la versión compilada de la aplicación en un servidor local. Se utiliza para verificar que la aplicación compilada se comporta correctamente antes de publicarla en producción. |
| npm run lint    | Ejecuta ESLint para analizar el código fuente y encontrar posibles errores o problemas de estilo.                                                                                                          |
| npm run format  | Utiliza Prettier para aplicar un formato consistente al código fuente.                                                                                                                                     |

---
