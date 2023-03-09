import { IEventsRepository } from '../../../../repositories/IEventsRepository';

export class GetAllEventsService {
	private eventsRepository: IEventsRepository;

	constructor(eventsRepository: IEventsRepository) {
		this.eventsRepository = eventsRepository;
	}

	async execute() {
		const events = await this.eventsRepository.getAllEvents();
		return events;
	}
}
