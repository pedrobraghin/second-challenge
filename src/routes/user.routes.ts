import { Router } from 'express';
import { createUserController } from '../use-cases/user';

const router = Router();

router.post('/signUp', createUserController.handle);
