import { Router } from 'express';
import { createUserController, loginUserController } from '../use-cases/user';
import { validateUserData } from '../middlewares/valiteUserData';
const usersRouter = Router();

usersRouter.post('/signUp', validateUserData, createUserController.handle);
usersRouter.post('/signIn', loginUserController.handle);

export { usersRouter };
