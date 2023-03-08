import { Router } from 'express';
import { usersRouter } from './user.routes';
import { eventsRouter } from './event.routes';

const router = Router();

router.use('/users', usersRouter);
router.use('/events', eventsRouter);

export { router };
