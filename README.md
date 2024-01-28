# node-express-mvc

## Node Specification
- [Node 20.11.0](https://nodejs.org/) (Installed on January 28, 2024)

## Packages

### Global Packages
- [npm 10.4.0](https://www.npmjs.com/package/npm)

### Project Packages
- [express 4.18.2](https://www.npmjs.com/package/express)
- [dotenv 16.4.1](https://www.npmjs.com/package/dotenv)

### Dev Packages
- [typescript 5.3.3](https://www.npmjs.com/package/typescript)
- [ts-node 10.9.2](https://www.npmjs.com/package/ts-node)
- [nodemon 3.0.3](https://www.npmjs.com/package/nodemon)
- [ncp 2.0.0](https://www.npmjs.com/package/ncp)
  - Used for copying `/public` folder into `/dist` folder with **pure node command**

## Express Settings
- Project created by [express-generator](https://www.npmjs.com/package/express-generator)
- View engine: None
- Style sheet engine: Plain CSS

## App Environments
- Manage the environment using [dotenv](https://www.npmjs.com/package/dotenv)
- Modify `.env` file to update environments

## Usages

### Initialize the project
- Install node modules before run project

```
npm install
```

### Start server with dev mode
- Run server on localhost with **watching file changes** using [ts-node](https://www.npmjs.com/package/ts-node) and [nodemon](https://www.npmjs.com/package/nodemon)

```
npm run dev
```

### Build server
- Compile application sources from typescript to javascript using [tsc in typescript](https://www.npmjs.com/package/typescript)
- Also, this command copies the `/public` folder into `/dist` for build includes the asset files. 

```
npm run build
```

### Start server
- Start server with compiled javascript sources

```
npm run start
```
