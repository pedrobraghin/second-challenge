import { IEventsRepository } from '../../../../repositories/IEventsRepository';

export class DeleteEventsByWeekDayService {
	private eventsRepository: IEventsRepository;

	constructor(eventsRepository: IEventsRepository) {
		this.eventsRepository = eventsRepository;
	}

	async execute(userId: string, weekDay: string) {
		const deletedEvent = await this.eventsRepository.deleteEventsByWeekDay(
			userId,
			weekDay
		);

		return deletedEvent;
	}
}
