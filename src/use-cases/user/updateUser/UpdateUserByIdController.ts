import { Request, Response, NextFunction } from 'express';
import { UpdateUserByIdService } from './UpdateUserByIdService';
import { User } from '../../../types/User';
import { CatchExpressError } from '../../../decorators/CatchExpressError';

export class UpdateUserByIdController {
	private updateUserByIdService: UpdateUserByIdService;

	constructor(updateUserByIdService: UpdateUserByIdService) {
		this.updateUserByIdService = updateUserByIdService;
	}

	@CatchExpressError
	async handle(req: Request, res: Response, _next: NextFunction) {
		const { id } = req.params;

		const updateBody = req.body;

		const user: User = await this.updateUserByIdService.execute(id, updateBody);

		return res.status(200).json({
			status: 'success',
			data: user,
		});
	}
}
