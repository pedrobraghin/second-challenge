import { Router } from 'express';

import { createEventController } from '../use-cases/event';

const eventsRouter = Router({ mergeParams: true });

eventsRouter.post('/', createEventController.handle);

export { eventsRouter };
