/* eslint-disable no-unused-vars */
import { Event } from '../types/Event';

interface IEventsRepository {
	createEvent(event: Event): Promise<Event | null>;
	getAllEventsOnUser(userId: string): Promise<Event[]>;
	getEventById(userId: string, eventId: string): Promise<Event | null>;
	getEventByWeekDay(userId: string, weekDay: string): Promise<Event[]>;
	deleteEventById(userId: string, eventId: string): Promise<Event | null>;
	deleteEventByWeekDay(userId: string, weekDay: string): Promise<Event | null>;
	deleteAllUserEvents(userId: string): Promise<void>;
}

export { IEventsRepository };
