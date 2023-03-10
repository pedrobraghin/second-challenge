import { Router } from 'express';

import {
	createEventController,
	getAllEventsController,
	getEventByIdController,
	getEventByWeekDayController,
	deleteEventByIdController,
	deleteEventByWeekDayController,
} from '../use-cases/event';

import { validateEventData } from '../middlewares/validateEventData';
import { auth } from '../middlewares/auth';

const eventsRouter = Router({ mergeParams: true });

eventsRouter.use(auth);


eventsRouter.post('/', validateEventData, createEventController.handle);


eventsRouter.get('/', (req, res, next) => {
	const { weekDay } = req.query;
	if (weekDay) getEventByWeekDayController.handle(req, res, next);
	else getAllEventsController.handle(req, res, next);
});

eventsRouter.get('/:id', getEventByIdController.handle);

eventsRouter.delete('/:id', deleteEventByIdController.handle);
eventsRouter.delete('/', deleteEventByWeekDayController.handle);

export { eventsRouter };
