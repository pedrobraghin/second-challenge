import { IEventsRepository } from '../../../../repositories/IEventsRepository';

export class GetEventsByWeekDayService {
	private eventsRepository: IEventsRepository;

	constructor(eventsRepository: IEventsRepository) {
		this.eventsRepository = eventsRepository;
	}

	async execute(userId: string, weekDay: string) {
		const events = await this.eventsRepository.getEventsByWeekDay(
			userId,
			weekDay
		);

		return events;
	}
}
