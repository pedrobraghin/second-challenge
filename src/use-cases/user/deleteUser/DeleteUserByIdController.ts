import { Request, Response, NextFunction } from 'express';
import { DeleteUserByIdService } from './DeleteUserByIdService';
import { CatchExpressError } from '../../../decorators/CatchExpressError';

export class DeleteUserByIdController {
	private deleteUserByIdService: DeleteUserByIdService;

	constructor(deleteUserByIdService: DeleteUserByIdService) {
		this.deleteUserByIdService = deleteUserByIdService;
	}

	@CatchExpressError
	async handle(req: Request, res: Response, _next: NextFunction) {
		const { id } = req.params;
		await this.deleteUserByIdService.execute(id);

		return res.status(204).json({
			status: 'success',
			data: null,
		});
	}
}
