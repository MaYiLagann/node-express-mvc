# node-express-mvc

- The [Node-express](https://expressjs.com/) server template with [TypeScript](https://www.typescriptlang.org/) and [MVC architecture](https://en.wikipedia.org/wiki/Model-view-controller)

## Node Specification

- [Node 20.11.0](https://nodejs.org/) (Installed on January 28, 2024)

## Packages

### Global Packages

- [npm 10.4.0](https://www.npmjs.com/package/npm)

### Project Packages

- [express 4.18.2](https://www.npmjs.com/package/express)
- [dotenv 16.4.1](https://www.npmjs.com/package/dotenv)
  - This can be removed, [Node 20.6.0](https://nodejs.org/en/blog/release/v20.6.0) has built-in support for `.env` file
- [inversify 6.0.2](https://www.npmjs.com/package/inversify)

### Dev Packages

- [typescript 5.3.3](https://www.npmjs.com/package/typescript)
- [ts-node 10.9.2](https://www.npmjs.com/package/ts-node)
- [nodemon 3.0.3](https://www.npmjs.com/package/nodemon)
- [ncp 2.0.0](https://www.npmjs.com/package/ncp)
  - Used for copying `/public` folder into `/dist` folder with **pure node command**
- [eslint 8.56.0](https://www.npmjs.com/package/eslint)
- [jasmine 5.1.0](https://www.npmjs.com/package/jasmine)

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

```bash
npm install
```

### Start server with dev mode

- Run server on localhost with **watching file changes** using [ts-node](https://www.npmjs.com/package/ts-node) and [nodemon](https://www.npmjs.com/package/nodemon)

```bash
npm run dev
```

### Start server with dev mode (VSCode)

- Create `/.vscode/launch.json` file with the following contents

```bash
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Launch via NPM",
            "request": "launch",
            "runtimeArgs": [
                "run-script",
                "dev"
            ],
            "runtimeExecutable": "npm",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "type": "node"
        }
    ]
}
```

- Run VSCode debug with **Launch via NPM**
- See also [Node.js debugging in VS Code](https://code.visualstudio.com/docs/nodejs/nodejs-debugging)

### Linting the source code

- Run [ESLint](https://typescript-eslint.io/getting-started) for typescript codes in project

```bash
npm run lint
```

### Testing the test code

- Run [Jasmine](https://jasmine.github.io/pages/getting_started) with typescript spec codes
- Write the spec codes in `/spec` folder

```bash
npm run test
```

### Build server

- Compile application sources from typescript to javascript using [tsc in typescript](https://www.npmjs.com/package/typescript)
- Also, this command copies the `/public` folder into `/dist` for build includes the asset files

```bash
npm run build
```

### Start server

- Start server with compiled javascript sources

```bash
npm run start
```

## Todo List

1. Add database handling solution
2. Add redis handling solution
