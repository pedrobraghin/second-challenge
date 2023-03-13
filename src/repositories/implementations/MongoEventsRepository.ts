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

	async getEventsByWeekDay(userId: string, weekDay: string): Promise<Event[]> {
		const events = await EventModel.find({ userId: userId, weekDay: weekDay });

		return events;
	}

	async deleteEventById(
		userId: string,
		eventId: string
	): Promise<Event | null> {
		const deletedEvent = await EventModel.findOneAndDelete({
			_id: eventId,
			userId: userId,
		});
		return deletedEvent;
	}

	async deleteEventsByWeekDay(userId: string, weekDay: string): Promise<void> {
		await EventModel.deleteMany({
			userId: userId,
			weekDay: weekDay,
		});
		return;
	}

	async isWeekDay(weekDay: string): Promise<boolean> {
		const week: string[] = [
			'monday',
			'tuesday',
			'wednesday',
			'thursday',
			'friday',
			'saturday',
			'sunday',
		];
		if (week.includes(weekDay)) return true;
		return false;
	}
	async deleteAllUserEvents(userId: string): Promise<void> {
		await EventModel.deleteMany({ userId: userId });
	}
}
