import { DeleteEventsByWeekDayService } from './deleteEventsByWeekDay/DeleteEventsByWeekDayService';
import { DeleteEventByIdService } from './deleteEventById/DeleteEventByIdService';
import { CreateEventService } from './../createEvent/CreateEventService';
import { InMemoryEventsRepository } from './../../../repositories/implementations/InMemoryEventsRepository';
import { getWeekDayFromDate } from '../../../utils/getWeekDayFromDate';
import { Event } from '../../../types/Event';

describe('Delete Events Services', () => {
	let eventsRepository: InMemoryEventsRepository;
	let createEventService: CreateEventService;
	let deleteEventByIdService: DeleteEventByIdService;
	let deleteEventsByWeekDayService: DeleteEventsByWeekDayService;

	beforeEach(() => {
		eventsRepository = new InMemoryEventsRepository();
		createEventService = new CreateEventService(eventsRepository);
		deleteEventByIdService = new DeleteEventByIdService(eventsRepository);
		deleteEventsByWeekDayService = new DeleteEventsByWeekDayService(
			eventsRepository
		);
	});

	it('should be able to delete a event by id', async () => {
		const eventDate = new Date();
		const event: Event = {
			_id: '123',
			createdAt: new Date(),
			dateTime: eventDate,
			description: 'Test description',
			userId: '123',
			weekDay: getWeekDayFromDate(eventDate),
		};

		const createdEvent = await createEventService.execute(event);

		expect(
			await deleteEventByIdService.execute(
				createdEvent.userId,
				createdEvent._id
			)
		).toEqual(createdEvent);
	});

	it('should be able to delete events by week day of that user', async () => {
		const eventDate = new Date();
		const eventWeekDay = getWeekDayFromDate(eventDate);
		const userId = '123';

		const eventOne: Event = {
			_id: '123',
			createdAt: new Date(),
			dateTime: eventDate,
			description: 'Test description',
			userId: userId,
			weekDay: eventWeekDay,
		};

		const eventTwo: Event = {
			_id: '123',
			createdAt: new Date(),
			dateTime: eventDate,
			description: 'Test description',
			userId: userId,
			weekDay: eventWeekDay,
		};

		await createEventService.execute(eventOne);
		await createEventService.execute(eventTwo);

		expect(async () => {
			await deleteEventsByWeekDayService.execute(userId, eventWeekDay);
		}).resolves;
	});
});
