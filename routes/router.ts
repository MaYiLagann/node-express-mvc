/* eslint-disable @typescript-eslint/no-misused-promises */
import { Request, Response, Router } from 'express';
import { ZodError } from "zod";
import { container } from "../inversify.config";
import { UserController } from "../src/controllers/user/user.controller";
import { RequestPostUserSchema, ResponsePostUserSchema } from "../src/models/apis/post-user-schema";

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
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description:
 */
router.post('/user', async (req: Request, res: Response) => {
  try {
    const request = RequestPostUserSchema.parse(req.body);
    const controller = container.resolve(UserController);
    const response = ResponsePostUserSchema.parse(await controller.Post(request));

    res.send(response);
  } catch (err) {
    if (err instanceof ZodError) {
      res.status(400).send(err);
    } else {
      res.status(500).send(err);
    }
  }
});
