/**
 * The reflect-metadata polyfill should be imported only once in your entire application.
 * See also: https://www.npmjs.com/package/inversify#-installation
 */
import "reflect-metadata";

// Import express.
import express, { Express } from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

// Import swagger (type-unsafe).
import swaggerUi, { JsonObject } from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import packageJson from './package.json';

// Import routes.
import { router } from './routes/router';

const app: Express = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Application router.
app.use('/', router);

// Swagger router.
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc({
  failOnErrors: true,
  definition: {
    openapi: '3.0.0',
    info: {
      title: packageJson.name, // eslint-disable-line
      version: packageJson.version, // eslint-disable-line
    },
  },
  apis: ['./routes/*.ts'], // files containing annotations as above
} as swaggerJSDoc.Options) as JsonObject));

export = app;
