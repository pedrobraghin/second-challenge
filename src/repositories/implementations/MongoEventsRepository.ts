/* eslint-disable no-unused-vars */
import { IEventsRepository } from '../IEventsRepository';
import { EventModel } from '../../models/EventModel';
import { Event } from '../../types/Event';

export class MongoEventsRepository implements IEventsRepository {
	async createEvent(event: Event): Promise<Event | null> {
		const createdEvent = await EventModel.create(event);
		return createdEvent;
	}

	async getAllEventsOnUser(userId: string): Promise<Event[]> {
		const events = await EventModel.find({ userId: userId });
		return events;
	}

	async getEventById(userId: string, eventId: string): Promise<Event | null> {
		const event = await EventModel.findOne({ _id: eventId, userId: userId });
		return event;
	}

	async getEventByWeekDay(userId: string, weekDay: string): Promise<Event[]> {
		const events = await EventModel.find({ userId: userId, weekDay: weekDay });

		return events;
	}

	async deleteEventById(eventId: string): Promise<Event | null> {
		const deletedEvent = await EventModel.findByIdAndDelete(eventId);
		return deletedEvent;
	}

	async deleteEventByWeekDay(
		userId: string,
		weekDay: string
	): Promise<Event | null> {
		await EventModel.deleteMany({
			userId: userId,
			_weekDay: weekDay,
		});
		return null;
	}
}
