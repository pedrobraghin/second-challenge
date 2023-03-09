import { IEventsRepository } from '../../../../repositories/IEventsRepository';

export class GetAllEventsService {
	private eventsRepository: IEventsRepository;

	constructor(eventsRepository: IEventsRepository) {
		this.eventsRepository = eventsRepository;
	}

	async execute(userId: string) {
		const events = await this.eventsRepository.getAllEventsOnUser(userId);
		return events;
	}
}
