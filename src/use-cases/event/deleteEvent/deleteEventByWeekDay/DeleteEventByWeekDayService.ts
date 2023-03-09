import { IEventsRepository } from '../../../../repositories/IEventsRepository';
import { AppError } from '../../../../errors/AppError';

export class DeleteEventByWeekDayService {
	private eventsRepository: IEventsRepository;

	constructor(eventsRepository: IEventsRepository) {
		this.eventsRepository = eventsRepository;
	}

	async execute(userId: string, weekDay: string) {
		const deletedEvent = await this.eventsRepository.deleteEventByWeekDay(
			userId,
			weekDay
		);
		if (!deletedEvent) {
			throw new AppError(404, 'Event id does not exists');
		}
		return deletedEvent;
	}
}
