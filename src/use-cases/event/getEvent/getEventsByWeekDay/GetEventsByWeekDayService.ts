import { IEventsRepository } from '../../../../repositories/IEventsRepository';
import { AppError } from '../../../../errors/AppError';

export class GetEventsByWeekDayService {
	private eventsRepository: IEventsRepository;

	constructor(eventsRepository: IEventsRepository) {
		this.eventsRepository = eventsRepository;
	}

	async execute(userId: string, weekDay: string) {
		const isWeekDay = await this.eventsRepository.isWeekDay(weekDay);
		if (!isWeekDay) {
			throw new AppError(400, 'The week day is not valid');
		}
		const events = await this.eventsRepository.getEventsByWeekDay(
			userId,
			weekDay
		);

		return events;
	}
}
