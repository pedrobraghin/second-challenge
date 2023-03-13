import { Request, Response, NextFunction } from 'express';
import { User } from '../../../types/User';

import { CreateUserService } from './CreateUserService';
import { CatchExpressError } from '../../../decorators/CatchExpressError';

export class CreateUserController {
	private createUserService: CreateUserService;

	constructor(createUserService: CreateUserService) {
		this.createUserService = createUserService;
	}

	@CatchExpressError
	async handle(req: Request, res: Response, _next: NextFunction) {
		const userData: User = req.body;
		userData.birthDate = new Date(userData.birthDate);
		const token = await this.createUserService.execute(userData);

		res.header('Authorization', 'Bearer ' + token);

		return res.status(201).json({
			status: 'success',
		});
	}
}
