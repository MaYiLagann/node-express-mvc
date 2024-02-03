import { Request, Response, Router } from 'express';

const router = Router();

/* GET users listing. */
router.get('/', (_req: Request, res: Response) => {
  res.send('respond with a resource');
});

export = router;
