import { Router } from 'express';
import { createUserController, loginUserController } from '../use-cases/user';

const usersRouter = Router();

usersRouter.post('/signUp', createUserController.handle);
usersRouter.post('/signIn', loginUserController.handle);

export { usersRouter };
