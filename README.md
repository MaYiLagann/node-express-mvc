# node-express-mvc

## Node Specification
- Node 20.11.0 (Installed on January 28, 2024)

## Global Packages
- NPM 10.4.0

## Express Settings
- Project created by [express-generator](https://www.npmjs.com/package/express-generator)
- View engine: None
- Style sheet engine: Plain CSS

## App Environments
- Manage the environment using [dotenv](https://www.npmjs.com/package/dotenv)
- Modify `.env` file to update environments

## Usages

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
- Start server the build javascript server

```
npm run start
```
