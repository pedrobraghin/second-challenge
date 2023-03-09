import { Request, Response, NextFunction } from 'express';
import { userSchema } from '../validators/userValidator';
import { User } from '../types/User';
import { ValidationError } from 'joi';
import { AppError } from '../errors/AppError';

export async function validateUserData(
	req: Request,
	res: Response,
	next: NextFunction
) {
	try {
		const userData: User = req.body;

		await userSchema.validateAsync(userData);
		return next();
	} catch (err) {
		if (err instanceof ValidationError) {
			return next(new AppError(400, err.details[0].message));
		}
		return next(err);
	}
}
