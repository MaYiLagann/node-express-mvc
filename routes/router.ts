/* eslint-disable @typescript-eslint/no-misused-promises */
import { Request, Response, Router } from 'express';
import { UserController } from "../src/controllers/user/user.controller";

export const router = Router();

/* GET home page. */
router.get('/', (_req: Request, res: Response) => res.render('index', { title: 'Express' }));

/* GET users listing. */
router.get('/users', async (_req: Request, res: Response) => res.send(await new UserController().Get()));
