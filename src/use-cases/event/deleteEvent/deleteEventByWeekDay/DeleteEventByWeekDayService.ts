import { IEventsRepository } from '../../../../repositories/IEventsRepository';

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

		return deletedEvent;
	}
}
