import { Request, Response, NextFunction } from 'express';
import { DeleteEventsByWeekDayService } from './DeleteEventsByWeekDayService';
import { CatchExpressError } from '../../../../decorators/CatchExpressError';
import { AppError } from '../../../../errors/AppError';

export class DeleteEventsByWeekDayController {
	private deleteEventByWeekDayService: DeleteEventsByWeekDayService;

	constructor(deleteEventByIdService: DeleteEventsByWeekDayService) {
		this.deleteEventByWeekDayService = deleteEventByIdService;
	}

	@CatchExpressError
	async handle(req: Request, res: Response, _next: NextFunction) {
		const weekDay = req.query.weekDay as string;
		if (!weekDay) {
			throw new AppError(400, 'A week day is required');
		}
		const userId: string = req.body.user._id;

		await this.deleteEventByWeekDayService.execute(userId, weekDay);

		return res.status(201).json({
			status: 'success',
			message: `Events on ${weekDay} deleted`,
		});
	}
}
