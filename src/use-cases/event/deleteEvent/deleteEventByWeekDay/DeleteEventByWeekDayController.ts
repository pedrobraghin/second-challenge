import { Request, Response, NextFunction } from 'express';
import { DeleteEventByWeekDayService } from './DeleteEventByWeekDayService';
import { CatchExpressError } from '../../../../decorators/CatchExpressError';
import { AppError } from '../../../../errors/AppError';

export class DeleteEventByWeekDayController {
	private deleteEventByWeekDayService: DeleteEventByWeekDayService;

	constructor(deleteEventByIdService: DeleteEventByWeekDayService) {
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
			message: `Events on id ${weekDay} deleted`,
		});
	}
}
