import { Event } from '../../../types/Event';
import { getWeekDayFromDate } from '../../../utils/getWeekDayFromDate';
import { InMemoryEventsRepository } from '../../../repositories/implementations/InMemoryEventsRepository';
import { GetEventByIdService } from './getEventById/GetEventByIdService';
import { GetEventsByWeekDayService } from './getEventsByWeekDay/GetEventsByWeekDayService';
import { CreateEventService } from '../createEvent/CreateEventService';

describe('Get Event Services', () => {
	let getEventByIdService: GetEventByIdService;
	let eventsRepository: InMemoryEventsRepository;
	let createEventService: CreateEventService;
	let getEventByWeekDayService: GetEventsByWeekDayService;

	beforeEach(() => {
		eventsRepository = new InMemoryEventsRepository();
		getEventByIdService = new GetEventByIdService(eventsRepository);
		createEventService = new CreateEventService(eventsRepository);
		getEventByWeekDayService = new GetEventsByWeekDayService(eventsRepository);
	});

	it('should be able to get a event by id', async () => {
		const eventDate = new Date();
		const eventData = {
			dateTime: eventDate,
			description: 'Test description',
			userId: '123',
			weekDay: getWeekDayFromDate(eventDate),
		} as Event;

		const event = await createEventService.execute(eventData);
		const eventFound = await getEventByIdService.execute(
			event.userId,
			event._id
		);

		expect(eventFound._id).toEqual(eventFound._id);
	});

	it('should be able to get all events on the specified week day', async () => {
		const eventDate = new Date();
		const weekDay = getWeekDayFromDate(eventDate);
		const userId = '123';

		const eventData1 = {
			dateTime: eventDate,
			description: 'Test description',
			userId,
			weekDay,
		} as Event;

		const eventData2 = {
			dateTime: eventDate,
			description: 'Test description',
			userId,
			weekDay,
		} as Event;

		const event1 = await createEventService.execute(eventData1);
		const event2 = await createEventService.execute(eventData2);
		const events = await getEventByWeekDayService.execute(userId, weekDay);

		expect(events).toEqual([event1, event2]);
	});
});
