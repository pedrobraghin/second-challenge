import { GetAllEventsController } from './getAllEvents/GetAllEventsController';
import { GetAllEventsService } from './getAllEvents/GetAllEventsService';
import { GetEventByIdController } from './getEventById/GetEventByIdController';
import { GetEventByIdService } from './getEventById/GetEventByIdService';
import { GetEventsByWeekDayController } from './getEventsByWeekDay/GetEventsByWeekDayController';
import { GetEventsByWeekDayService } from './getEventsByWeekDay/GetEventsByWeekDayService';

import { eventsRepository } from '../EventsRepositoryFactory';

const getAllEventsService = new GetAllEventsService(eventsRepository);
const getEventByIdService = new GetEventByIdService(eventsRepository);
const getEventByWeekDayService = new GetEventsByWeekDayService(
	eventsRepository
);

const getAllEventsController = new GetAllEventsController(getAllEventsService);
const getEventByIdController = new GetEventByIdController(getEventByIdService);
const getEventByWeekDayController = new GetEventsByWeekDayController(
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
