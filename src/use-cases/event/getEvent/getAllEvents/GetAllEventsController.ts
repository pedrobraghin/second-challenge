import { Request, Response, NextFunction } from 'express';
import { CatchExpressError } from '../../../../decorators/CatchExpressError';
import { GetAllEventsService } from './GetAllEventsService';

export class GetAllEventsController {
	private getAllEventsService: GetAllEventsService;

	constructor(getAllEventsService: GetAllEventsService) {
		this.getAllEventsService = getAllEventsService;
	}

	@CatchExpressError
	async handle(req: Request, res: Response, _next: NextFunction) {
		const userId = req.body.user._id;
		const events = await this.getAllEventsService.execute(userId);

		return res.status(200).json({
			status: 'success',
			results: events.length,
			data: events,
		});
	}
}
