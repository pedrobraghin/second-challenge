import { GetAllEventsController } from './getAllEvents/GetAllEventsController';
import { GetAllEventsService } from './getAllEvents/GetAllEventsService';
import { GetEventByIdController } from './getEventById/GetEventByIdController';
import { GetEventByIdService } from './getEventById/GetEventByIdService';
import { GetEventByWeekDayController } from './getEventByWeekDay/GetEventByWeekDayController';
import { GetEventByWeekDayService } from './getEventByWeekDay/GetEventByWeekDayService';

import { eventsRepository } from '../EventsRepositoryFactory';

const getAllEventsService = new GetAllEventsService(eventsRepository);
const getEventByIdService = new GetEventByIdService(eventsRepository);
const getEventByWeekDayService = new GetEventByWeekDayService(eventsRepository);

const getAllEventsController = new GetAllEventsController(getAllEventsService);
const getEventByIdController = new GetEventByIdController(getEventByIdService);
const getEventByWeekDayController = new GetEventByWeekDayController(
	getEventByWeekDayService
);

export {
	getAllEventsService,
	getEventByIdService,
	getEventByWeekDayService,
	getAllEventsController,
	getEventByIdController,
	getEventByWeekDayController,
};
