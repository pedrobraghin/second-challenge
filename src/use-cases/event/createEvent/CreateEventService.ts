import { IEventsRepository } from '../../../repositories/IEventsRepository';
import { Event } from '../../../types/Event';

export class CreateEventService {
	private eventsRepository: IEventsRepository;

	constructor(eventsRepository: IEventsRepository) {
		this.eventsRepository = eventsRepository;
	}

	async execute(eventData: Event) {
		const createdEvent = await this.eventsRepository.createEvent(eventData);
		if (!createdEvent) {
			throw new Error('Event already exists');
		}

		return createdEvent;
	}
}
