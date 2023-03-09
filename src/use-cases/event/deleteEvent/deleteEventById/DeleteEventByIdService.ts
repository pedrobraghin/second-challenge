import { IEventsRepository } from '../../../../repositories/IEventsRepository';
import { AppError } from '../../../../errors/AppError';
export class DeleteEventByIdService {
	private eventsRepository: IEventsRepository;

	constructor(eventsRepository: IEventsRepository) {
		this.eventsRepository = eventsRepository;
	}

	async execute(eventId: string) {
		const deletedEvent = await this.eventsRepository.deleteEventById(eventId);
		if (!deletedEvent) {
			throw new AppError(404, 'Event id does not exists');
		}
		return deletedEvent;
	}
}
