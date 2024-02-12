/**
 * The reflect-metadata polyfill should be imported only once in your entire application.
 * See also: https://www.npmjs.com/package/inversify#-installation
 */
import "reflect-metadata";

import express, { Express } from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

// Import routes.
import { router } from './routes/router';

const app: Express = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', router);

export = app;
