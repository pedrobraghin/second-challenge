import { Request, Response, NextFunction } from 'express';
import { User } from '../../../types/User';

import { CreateUserService } from './CreateUserService';

export class CreateUserController {
	private createUserService: CreateUserService;

	constructor(createUserService: CreateUserService) {
		this.createUserService = createUserService;
	}

	async handle(req: Request, res: Response, _next: NextFunction) {
		const userData: User = req.body;
		const token = await this.createUserService.execute(userData);

		return res.status(201).json({
			status: 'success',
			token,
		});
	}
}
