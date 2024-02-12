/* eslint-disable @typescript-eslint/no-unsafe-call */

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
import cors from 'cors';

// Import swagger (type-unsafe).
import swaggerUi, { JsonObject } from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

// Import routes.
import { router } from './routes/router';

const app: Express = express();
const appName = 'node-express-mvc';
const appVersion = '0.0.0';

// Todo: Use danger middlewares only local dev environment.
app.use(cors());
app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Application router.
app.use('/', router);

// Swagger router.
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc({
  failOnErrors: true,
  definition: {
    openapi: '3.0.0',
    info: {
      title: appName,
      version: appVersion,
    },
  },
  apis: ['./routes/*.ts'], // files containing annotations as above
} as swaggerJSDoc.Options) as JsonObject));

export = app;
