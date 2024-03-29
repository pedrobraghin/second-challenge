import { Schema, model } from 'mongoose';
import { Event } from '../types/Event';

const eventSchema = new Schema<Event>({
	description: {
		type: String,
		required: [true, 'A description must be provided'],
	},

	dateTime: {
		type: Date,
		required: [true, 'A date must be provided'],
	},

	userId: {
		type: String,
		ref: 'User',
	},

	createdAt: {
		type: Date,
		default: Date.now(),
	},

	weekDay: {
		type: String,
	},
});

eventSchema.pre('save', function (next) {
	this.weekDay = this.dateTime
		.toLocaleString('en-us', {
			weekday: 'long',
		})
		.toLowerCase();

	next();
});

const EventModel = model('Event', eventSchema);

export { EventModel };
