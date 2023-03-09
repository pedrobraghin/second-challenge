import { Request, Response, NextFunction } from 'express';
import { GetAllEventsService } from './GetAllEventsService';

export class GetAllEventsController {
	private getAllEventsService: GetAllEventsService;

	constructor(getAllEventsService: GetAllEventsService) {
		this.getAllEventsService = getAllEventsService;
	}

	async handle(req: Request, res: Response, _next: NextFunction) {
		const events = await this.getAllEventsService.execute();

		return res.status(200).json({
			status: 'success',
			data: events,
		});
	}
}
