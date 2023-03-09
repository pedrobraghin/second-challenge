import { Router } from 'express';
// import { AppError } from '../errors/AppError';

import {
	createEventController,
	getAllEventsController,
	getEventByIdController,
	getEventByWeekDayController,
	deleteEventByIdController,
	// deleteEventByWeekDayController,
} from '../use-cases/event';

const eventsRouter = Router({ mergeParams: true });

eventsRouter.post('/', (req, res, next) => {
	createEventController.handle(req, res, next);
});

eventsRouter.get('/', (req, res, next) => {
	const { weekDay } = req.query;
	if (weekDay) getEventByWeekDayController.handle(req, res, next);
	else getAllEventsController.handle(req, res, next);
});

eventsRouter.get('/:id', (req, res, next) => {
	getEventByIdController.handle(req, res, next);
});

// eventsRouter.get('/:id', getEventById.handle);
// eventsRouter.get('/', getAllEventsController.handle);

eventsRouter.delete('/:id', (req, res, next) => {
	deleteEventByIdController.handle(req, res, next);
});
// eventsRouter.delete('/', (req, res, next) => {
// 	const { weekDay } = req.query;

// 	if (!weekDay) {
// 		return next(new AppError(400, 'A week day is required'));
// 	}
// 	deleteEventByWeekDayController.handle(req, res, next);
// });

export { eventsRouter };
