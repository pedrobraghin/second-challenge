import { IEventsRepository } from '../../../../repositories/IEventsRepository';
import { AppError } from '../../../../errors/AppError';

export class GetEventByIdService {
	private eventsRepository: IEventsRepository;

	constructor(eventsRepository: IEventsRepository) {
		this.eventsRepository = eventsRepository;
	}

	async execute(userId: string, eventId: string) {
		const event = await this.eventsRepository.getEventById(userId, eventId);

		if (!event) {
			throw new AppError(404, 'Event not found');
		}

		return event;
	}
}
