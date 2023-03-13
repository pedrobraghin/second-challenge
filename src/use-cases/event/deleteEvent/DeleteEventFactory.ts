import { DeleteEventByIdController } from './deleteEventById/DeleteEventByIdController';
import { DeleteEventsByWeekDayController } from './deleteEventsByWeekDay/DeleteEventsByWeekDayController';
import { DeleteEventByIdService } from './deleteEventById/DeleteEventByIdService';
import { DeleteEventsByWeekDayService } from './deleteEventsByWeekDay/DeleteEventsByWeekDayService';
import { eventsRepository } from '../EventsRepositoryFactory';

const deleteEventByIdService = new DeleteEventByIdService(eventsRepository);
const deleteEventByIdController = new DeleteEventByIdController(
	deleteEventByIdService
);

const deleteEventsByWeekDayService = new DeleteEventsByWeekDayService(
	eventsRepository
);
const deleteEventsByWeekDayController = new DeleteEventsByWeekDayController(
	deleteEventsByWeekDayService
);

export {
	deleteEventByIdService,
	deleteEventByIdController,
	deleteEventsByWeekDayService,
	deleteEventsByWeekDayController,
};
