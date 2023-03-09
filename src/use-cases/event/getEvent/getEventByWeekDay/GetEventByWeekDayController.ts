import { Request, Response, NextFunction } from 'express';
import { GetEventByWeekDayService } from './GetEventByWeekDayService';

export class GetEventByWeekDayController {
	private getEventByWeekDayService: GetEventByWeekDayService;

	constructor(getEventByWeekDayService: GetEventByWeekDayService) {
		this.getEventByWeekDayService = getEventByWeekDayService;
	}

	async handle(req: Request, res: Response, _next: NextFunction) {
		const weekDay = req.query.weekDay as string;

		const events = await this.getEventByWeekDayService.execute(weekDay);

		return res.status(200).json({
			status: 'success',
			data: events,
		});
	}
}
