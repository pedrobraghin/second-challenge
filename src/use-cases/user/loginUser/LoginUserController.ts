import { LoginUserService } from './LoginUserService';
import { Request, Response, NextFunction } from 'express';
import { CatchExpressError } from '../../../decorators/CatchExpressError';

export class LoginUserController {
	private loginUserService: LoginUserService;

	constructor(loginUserService: LoginUserService) {
		this.loginUserService = loginUserService;
	}

	@CatchExpressError
	async handle(req: Request, res: Response, _next: NextFunction) {
		const { email, password } = req.body;
		const token = await this.loginUserService.execute(email, password);

		res.header('Authorization', 'Bearer ' + token);

		return res.status(200).json({
			status: 'success',
		});
	}
}
