/* eslint-disable no-unused-vars */
import { IEventsRepository } from '../IEventsRepository';
import { EventModel } from '../../models/EventModel';
import { Event } from '../../types/Event';

export class MongoEventsRepository implements IEventsRepository {
	async createEvent(event: Event): Promise<Event | null> {
		const createdEvent = await EventModel.create(event);
		return createdEvent;
	}
	async getAllEvents(): Promise<Event[] | null> {
		const events = await EventModel.find();
		return events;
	}
	getEventById(eventId: string): Promise<Event | null> {
		throw new Error('Method not implemented.');
	}
	getEventByWeekDay(weekDay: string): Promise<Event | null> {
		throw new Error('Method not implemented.');
	}
	deleteEventById(eventId: string): Promise<Event | null> {
		throw new Error('Method not implemented.');
	}
	deleteEventByWeekDay(weekDay: string): Promise<Event | null> {
		throw new Error('Method not implemented.');
	}
}
