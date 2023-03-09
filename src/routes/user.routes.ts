import { Router } from 'express';
import {
	createUserController,
	loginUserController,
	getUserByIdController,
	updateUserByIdController,
	deleteUserByIdController,
} from '../use-cases/user';

import { auth } from '../middlewares/auth';

const usersRouter = Router();

usersRouter.post('/signUp', createUserController.handle);
usersRouter.post('/signIn', loginUserController.handle);

usersRouter.get('/me', auth, getUserByIdController.handle);
usersRouter.patch('/me', auth, updateUserByIdController.handle);
usersRouter.delete('/me', auth, deleteUserByIdController.handle);

export { usersRouter };
