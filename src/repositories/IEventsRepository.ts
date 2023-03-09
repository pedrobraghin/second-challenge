/* eslint-disable no-unused-vars */
import { Event } from '../types/Event';

interface IEventsRepository {
	createEvent(event: Event): Promise<Event | null>;
	getAllEvents(): Promise<Event[]>;
	getEventById(eventId: string): Promise<Event | null>;
	getEventByWeekDay(weekDay: string): Promise<Event | null>;
	deleteEventById(eventId: string): Promise<Event | null>;
	deleteEventByWeekDay(weekDay: string): Promise<Event | null>;
}

export { IEventsRepository };
