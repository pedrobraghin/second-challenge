import { Request, Response, NextFunction } from 'express';
import { CatchExpressError } from '../../../../decorators/CatchExpressError';
import { GetEventByIdService } from './GetEventByIdService';

export class GetEventByIdController {
	private getEventByIdService: GetEventByIdService;

	constructor(getEventByIdService: GetEventByIdService) {
		this.getEventByIdService = getEventByIdService;
	}

	@CatchExpressError
	async handle(req: Request, res: Response, _next: NextFunction) {
		const userId: string = req.body.user._id;
		const eventId: string = req.params.id;

		const event = await this.getEventByIdService.execute(userId, eventId);

		return res.status(200).json({
			status: 'success',
			data: event,
		});
	}
}
