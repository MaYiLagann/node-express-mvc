import { Request, Response, Router } from 'express';

const router = Router();

/* GET home page. */
router.get('/', (req: Request, res: Response) => {
  res.render('index', { title: 'Express' });
});

export = router;
