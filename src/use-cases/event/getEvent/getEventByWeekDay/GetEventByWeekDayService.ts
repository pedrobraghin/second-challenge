import { IEventsRepository } from '../../../../repositories/IEventsRepository';

export class GetEventByWeekDayService {
	private eventsRepository: IEventsRepository;

	constructor(eventsRepository: IEventsRepository) {
		this.eventsRepository = eventsRepository;
	}

	async execute(userId: string, weekDay: string) {
		const events = await this.eventsRepository.getEventByWeekDay(
			userId,
			weekDay
		);

		return events;
	}
}
