# Contributing to open3diy-dao-poc-ui

Gracias por tu interés en contribuir a open3diy-dao-poc-ui. Aquí tienes algunas instrucciones para comenzar.

## Requisitos Previos

Asegúrate de tener instaladas las siguientes herramientas:

- [Node.js](https://nodejs.org/) 
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)

## Configuración del Entorno de Desarrollo

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/demovoidgan/open3diy-dao-poc-ui.git
   cd open3diy-dao-poc-ui.git
    ```

2. **Instala las dependencias:**

    ```bash
    cd open3diy-dao-poc-ui
    npm install??
    npm install react-router-dom
    ``` 

3. **Inicia el servidor de desarrollo:**

   ```bash
   cd open3diy-dao-poc-ui
   npm start
   ```

## Normas de Codificación

Por favor, sigue las siguientes normas de codificación:

- Usa [ESLint](https://eslint.org/) para mantener un estilo de código consistente.
- Usa [Prettier](https://prettier.io/) para formatear el código automáticamente.
- Usa [Conventional Commits](https://www.conventionalcommits.org/) para escribir mensajes de commit.
- Usa [Gitmoji](https://gitmoji.dev/) para añadir emojis a tus mensajes de commit.
- Sigue las convenciones de estilo del código especificadas en el archivo .eslintrc y .prettierrc.
- Escribe pruebas para cualquier cambio en el código. Utilizamos [Jest](https://jestjs.io/) y [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) para pruebas.
    

## Flujo de Trabajo de Git

1. Crea una rama a partir de `main` para trabajar en tu funcionalidad:

   ```bash
   git checkout -b feature/nombre-de-la-funcionalidad
   ```

2. Realiza tus cambios y escribe pruebas para ellos.

3. Asegúrate de que todas las pruebas pasan:

   ```bash
   npm test
   ```      
4. Haz un commit de tus cambios:

   ```bash
   git add .
   git commit -m ":sparkles: Añade nueva funcionalidad"
   ```

5. Sube tus cambios a tu repositorio:

   ```bash
    git push origin feature/nombre-de-la-funcionalidad
    ```

6. Crea una solicitud de extracción (pull request) en GitHub y describe tus cambios.

7. Espera a que tu solicitud de extracción sea revisada y fusionada.

8. Empaqueta para producción:

   ```bash
   npm run build
   ```

## Versionado

Este proyecto sigue las convenciones de versionado semántico. Cada versión se etiqueta con un número de versión en el formato `MAJOR.MINOR.PATCH`. 

- `MAJOR` se incrementa cuando se realizan cambios incompatibles en la API.
- `MINOR` se incrementa cuando se agregan funcionalidades de manera retrocompatible.
- `PATCH` se incrementa cuando se realizan correcciones de errores retrocompatibles.

Puedes encontrar más información sobre el versionado semántico en [semver.org](https://semver.org/).

## Reportar Problemas

Si encuentras algún problema o tienes alguna sugerencia, por favor, abre un [issue]

## Pregruntas

Si tienes alguna pregunta, no dudes en abrir un issue o contactar a los mantenedores del proyecto.


