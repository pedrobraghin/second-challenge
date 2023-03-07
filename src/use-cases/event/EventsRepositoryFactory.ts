import { IEventsRepository } from '../../repositories/IEventsRepository';
import { MongoEventsRepository } from '../../repositories/implementations/MongoEventsRepository';

const eventsRepository: IEventsRepository = new MongoEventsRepository();

export { eventsRepository };
