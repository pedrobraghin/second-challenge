import { Router } from 'express';

import { createEventController } from '../use-cases/event';
import { auth } from '../middlewares/auth';

const eventsRouter = Router({ mergeParams: true });

eventsRouter.post('/', auth, createEventController.handle);

export { eventsRouter };
