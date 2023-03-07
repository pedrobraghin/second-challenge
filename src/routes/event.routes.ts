import { Router } from 'express';
import { createEventController } from '../use-cases/event';

const router = Router();

router.post('/', createEventController.handle);
