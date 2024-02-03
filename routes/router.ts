import { Request, Response, Router } from 'express';

export const router = Router();

/* GET home page. */
router.get('/', (_req: Request, res: Response) => {
  res.render('index', { title: 'Express' });
});

/* GET users listing. */
router.get('/users', (_req: Request, res: Response) => {
  res.send('respond with a resource');
});

