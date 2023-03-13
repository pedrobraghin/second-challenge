import { CreateEventService } from './CreateEventService';
import { InMemoryEventsRepository } from './../../../repositories/implementations/InMemoryEventsRepository';
import { Event } from '../../../types/Event';
import { getWeekDayFromDate } from '../../../utils/getWeekDayFromDate';

describe('Create Event Service', () => {
	let eventsRepository: InMemoryEventsRepository;
	let createEventService: CreateEventService;

	beforeEach(() => {
		eventsRepository = new InMemoryEventsRepository();
		createEventService = new CreateEventService(eventsRepository);
	});

	it('should be able to create a new Event', async () => {
		const eventDate = new Date();
		const event: Event = {
			_id: '123',
			createdAt: new Date(),
			dateTime: eventDate,
			description: 'Test description',
			userId: '123',
			weekDay: getWeekDayFromDate(eventDate),
		};

		expect(await createEventService.execute(event)).toEqual(event);
	});
});
