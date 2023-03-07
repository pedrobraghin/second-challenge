import { Request, Response, NextFunction } from 'express';
import { Event } from '../../../types/Event';
import { CreateEventService } from './CreateEventService';

export class CreateEventController {
	private createEventService: CreateEventService;

	constructor(createEventService: CreateEventService) {
		this.createEventService = createEventService;
	}

	async handle(req: Request, res: Response, _next: NextFunction) {
		const eventData: Event = req.body;
		const event = await this.createEventService.execute(eventData);

		return res.status(201).json({
			status: 'success',
			data: event,
		});
	}
}
