import { Request, Response, NextFunction } from 'express';
import { GetEventByIdService } from './GetEventByIdService';

export class GetEventByIdController {
	private getEventByIdService: GetEventByIdService;

	constructor(getEventByIdService: GetEventByIdService) {
		this.getEventByIdService = getEventByIdService;
	}

	async handle(req: Request, res: Response, _next: NextFunction) {
		const eventId = req.params.id;

		const event = await this.getEventByIdService.execute(eventId);

		return res.status(200).json({
			status: 'success',
			data: event,
		});
	}
}
