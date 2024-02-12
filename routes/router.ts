/* eslint-disable @typescript-eslint/no-misused-promises */
import { Request, Response, Router } from 'express';
import { container } from "../inversify.config";
import { UserController } from "../src/controllers/user/user.controller";

export const router = Router();

/* GET home page. */
router.get('/', (_req: Request, res: Response) => res.render('index', { title: 'Express' }));

/**
 * @swagger
 * /users:
 *   get:
 *     description: Returns users
 *     tags: [Users]
 *     produces:
 *       - plain/text
 *     responses:
 *       200:
 *         description: users
 */
router.get('/users', async (_req: Request, res: Response) => {
  const controller = container.resolve(UserController);
  res.send(await controller.Get());
});

/**
 * @swagger
 * /user:
 *   post:
 *     description: Create a new user
 *     tags: [Users]
 *     produces:
 *       - plain/text
 *     responses:
 *       200:
 *         description:
 */
router.post('/user', async (req: Request, res: Response) => {
  const controller = container.resolve(UserController);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-argument
  res.send(await controller.Post(req.body.email, req.body.password, req.body.name));
});
