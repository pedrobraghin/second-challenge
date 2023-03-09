import { GetAllEventsController } from './getAllEvents/GetAllEventsController';
import { GetAllEventsService } from './getAllEvents/GetAllEventsService';

import { eventsRepository } from '../EventsRepositoryFactory';

const getAllEventsService = new GetAllEventsService(eventsRepository);
const getAllEventsController = new GetAllEventsController(getAllEventsService);

export { getAllEventsController, getAllEventsService };
