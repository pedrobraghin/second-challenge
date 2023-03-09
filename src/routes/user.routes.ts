import { Router } from 'express';
import { createUserController } from '../use-cases/user';

const usersRouter = Router();

usersRouter.post('/signUp', createUserController.handle);

export { usersRouter };
