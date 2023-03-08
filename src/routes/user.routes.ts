import { Router } from 'express';
import { createUserController } from '../use-cases/user';

const usersRouter = Router();

usersRouter.post('/signUp', (req, res, next) => {
	createUserController.handle(req, res, next);
});

export { usersRouter };
