import { Request, Response, NextFunction } from 'express';
import { CatchExpressError } from '../../../../decorators/CatchExpressError';
import { GetEventByWeekDayService } from './GetEventByWeekDayService';

export class GetEventByWeekDayController {
	private getEventByWeekDayService: GetEventByWeekDayService;

	constructor(getEventByWeekDayService: GetEventByWeekDayService) {
		this.getEventByWeekDayService = getEventByWeekDayService;
	}

	@CatchExpressError
	async handle(req: Request, res: Response, _next: NextFunction) {
		const userId: string = req.body.user._id;
		const weekDay = req.query.weekDay as string;

		const events = await this.getEventByWeekDayService.execute(
			userId,
			weekDay.toLowerCase()
		);

		return res.status(200).json({
			status: 'success',
			data: events,
		});
	}
}
