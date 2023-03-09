import { Request, Response, NextFunction } from 'express';
import { Event } from '../../../types/Event';
import { CreateEventService } from './CreateEventService';
import { CatchExpressError } from '../../../decorators/CatchExpressError';

export class CreateEventController {
	private createEventService: CreateEventService;

	constructor(createEventService: CreateEventService) {
		this.createEventService = createEventService;
	}

	@CatchExpressError
	async handle(req: Request, res: Response, _next: NextFunction) {
		const eventData: Event = req.body;
		eventData.userId = req.body.user._id;
		const event = await this.createEventService.execute(eventData);

		return res.status(201).json({
			status: 'success',
			data: event,
		});
	}
}
