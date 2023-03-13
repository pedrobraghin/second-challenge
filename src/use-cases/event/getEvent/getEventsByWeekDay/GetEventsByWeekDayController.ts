import { Request, Response, NextFunction } from 'express';
import { CatchExpressError } from '../../../../decorators/CatchExpressError';
import { GetEventsByWeekDayService } from './GetEventsByWeekDayService';

export class GetEventsByWeekDayController {
	private getEventsByWeekDayService: GetEventsByWeekDayService;

	constructor(getEventsByWeekDayService: GetEventsByWeekDayService) {
		this.getEventsByWeekDayService = getEventsByWeekDayService;
	}

	@CatchExpressError
	async handle(req: Request, res: Response, _next: NextFunction) {
		const userId: string = req.body.user._id;
		const weekDay = req.query.weekDay as string;

		const events = await this.getEventsByWeekDayService.execute(
			userId,
			weekDay.toLowerCase()
		);

		return res.status(200).json({
			status: 'success',
			data: events,
		});
	}
}
