import { Request, Response, NextFunction } from 'express';
import { GetUserByIdService } from './GetUserByIdService';
import { User } from '../../../types/User';

export class GetUSerByIdController {
	private getUserByIdService: GetUserByIdService;

	constructor(getUserByIdService: GetUserByIdService) {
		this.getUserByIdService = getUserByIdService;
	}

	async handle(req: Request, res: Response, _next: NextFunction) {
		const { id } = req.params;
		const user: User = await this.getUserByIdService.execute(id);

		return res.status(200).json({
			status: 'success',
			data: user,
		});
	}
}
