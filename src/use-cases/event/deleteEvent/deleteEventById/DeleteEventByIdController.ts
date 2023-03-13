import { Request, Response, NextFunction } from 'express';
import { DeleteEventByIdService } from './DeleteEventByIdService';
import { CatchExpressError } from '../../../../decorators/CatchExpressError';

export class DeleteEventByIdController {
	private deleteEventByIdService: DeleteEventByIdService;

	constructor(deleteEventByIdService: DeleteEventByIdService) {
		this.deleteEventByIdService = deleteEventByIdService;
	}

	@CatchExpressError
	async handle(req: Request, res: Response, _next: NextFunction) {
		const eventId = req.params.id;
		const userId = req.body.user._id;
		await this.deleteEventByIdService.execute(userId, eventId);

		return res.status(204).json({
			status: 'success',
			message: `Event of id ${eventId} deleted`,
		});
	}
}
