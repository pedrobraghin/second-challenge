import { CreateEventController } from './CreateEventController';
import { CreateEventService } from './CreateEventService';
import { eventsRepository } from '../EventsRepositoryFactory';

const createEventService = new CreateEventService(eventsRepository);
const createEventController = new CreateEventController(createEventService);

export { createEventController, createEventService };
