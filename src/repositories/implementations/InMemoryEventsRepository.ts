import { Event } from '../../types/Event';
import { IEventsRepository } from '../IEventsRepository';
import { v4 } from 'uuid';

export class InMemoryEventsRepository implements IEventsRepository {
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

	private events: Event[] = [];

	async createEvent(event: Event): Promise<Event | null> {
		event._id = v4();
		this.events.push(event);
		return event;
	}

	async getAllEventsOnUser(userId: string): Promise<Event[]> {
		const userEvents = this.events.filter((e) => e.userId === userId);
		return userEvents;
	}

	async getEventById(userId: string, eventId: string): Promise<Event | null> {
		const event = this.events.find((e) => {
			return e.userId === userId && e._id === eventId;
		});

		return event ? event : null;
	}
	async getEventsByWeekDay(userId: string, weekDay: string): Promise<Event[]> {
		const eventsFiltered = this.events.filter((e) => {
			return e.userId === userId && e.weekDay === weekDay;
		});

		return eventsFiltered;
	}

	async deleteEventById(
		userId: string,
		eventId: string
	): Promise<Event | null> {
		const eventIndex = this.events.findIndex((e) => {
			return e.userId === userId && e._id === eventId;
		});

		if (eventIndex == -1) return null;
		const eventDeleted = this.events.splice(eventIndex, 1);
		return eventDeleted[0];
	}

	async deleteEventsByWeekDay(userId: string, weekDay: string): Promise<void> {
		const deletedEvents: Event[] = [];

		// keep just the events that not matches with the specified user and week day
		this.events = this.events.filter((e) => {
			const toRemove = e.userId === userId && e.weekDay === weekDay;
			if (toRemove) {
				deletedEvents.push(e);
			}
			return !toRemove;
		});
		return;
	}

	async deleteAllUserEvents(userId: string): Promise<void> {
		this.events = this.events.filter((e) => {
			return e.userId === userId;
		});
	}
}
