/* eslint-disable no-unused-vars */
import { IEventsRepository } from '../IEventsRepository';
import { EventModel } from '../../models/EventModel';
import { Event } from '../../types/Event';

export class MongoEventsRepository implements IEventsRepository {
	async createEvent(event: Event): Promise<Event | null> {
		const createdEvent = await EventModel.create(event);
		return createdEvent;
	}

	async getAllEvents(): Promise<Event[]> {
		const events = await EventModel.find();
		return events;
	}

	async getEventById(eventId: string): Promise<Event | null> {
		const event = await EventModel.findById(eventId);
		return event;
	}

	async getEventByWeekDay(weekDay: string): Promise<Event[]> {
		const events = await EventModel.find();

		const filtered: Event[] = events.filter((event) => {
			const eventWeekDay = new Date(event.dateTime)
				.toLocaleString('en-us', {
					weekday: 'long',
				})
				.toLowerCase();

			return weekDay === eventWeekDay;
		});

		return filtered;
	}

	async deleteEventById(eventId: string): Promise<Event | null> {
		const deletedEvent = await EventModel.findByIdAndDelete(eventId);
		return deletedEvent;
	}

	async deleteEventByWeekDay(weekDay: string): Promise<Event | null> {
		throw new Error('Method not implemented.');
	}
}
