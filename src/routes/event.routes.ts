import { Router } from 'express';
// import { AppError } from '../errors/AppError';

import {
	createEventController,
	// getAllEventsController,
	// deleteEventByIdController,
	// deleteEventByWeekDayController,
	// getEventById,
} from '../use-cases/event';

const eventsRouter = Router({ mergeParams: true });

eventsRouter.post('/', (req, res, next) => {
	console.log(createEventController);
	createEventController.handle(req, res, next);
});

// eventsRouter.get('/:id', getEventById.handle);
// eventsRouter.get('/', getAllEventsController.handle);

// eventsRouter.delete('/:id', deleteEventByIdController.handle);
// eventsRouter.delete('/', (req, res, next) => {
// 	const { weekDay } = req.query;

// 	if (!weekDay) {
// 		return next(new AppError(400, 'A week day is required'));
// 	}
// 	deleteEventByWeekDayController.handle(req, res, next);
// });

export { eventsRouter };
