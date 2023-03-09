import { DeleteEventByIdController } from './deleteEventById/DeleteEventByIdController';
//import { DeleteEventByWeekDayController } from './deleteEventByWeekDay/DeleteEventByWeekDayController';
import { DeleteEventByIdService } from './deleteEventById/DeleteEventByIdService';
//import { DeleteEventByWeekDayService } from './deleteEventByWeekDay/DeleteEventByWeekDayService';
import { eventsRepository } from '../EventsRepositoryFactory';

const deleteEventByIdService = new DeleteEventByIdService(eventsRepository);
const deleteEventByIdController = new DeleteEventByIdController(
	deleteEventByIdService
);

// const deleteEventByWeekDayService = new DeleteEventByWeekDayService(
// 	eventsRepository
// );
// const deleteEventByWeekDayController = new DeleteEventByWeekDayController(
// 	deleteEventByWeekDayService
// );

export {
	deleteEventByIdService,
	deleteEventByIdController,
	// deleteEventByWeekDayService,
	// deleteEventByWeekDayController,
};
