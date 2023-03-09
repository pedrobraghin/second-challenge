import { Request, Response, NextFunction } from 'express';
import { DeleteEventByIdService } from './DeleteEventByIdService';

export class DeleteEventByIdController {
	private deleteEventByIdService: DeleteEventByIdService;

	constructor(deleteEventByIdService: DeleteEventByIdService) {
		this.deleteEventByIdService = deleteEventByIdService;
	}

	async handle(req: Request, res: Response, _next: NextFunction) {
		const eventId = req.params.id;
		await this.deleteEventByIdService.execute(eventId);

		return res.status(201).json({
			status: 'success',
			message: `Event of id ${eventId} deleted`,
		});
	}
}
