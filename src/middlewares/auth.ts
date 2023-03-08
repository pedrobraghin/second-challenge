import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../security/security';
import { AppError } from './../errors/AppError';
import { getUserByIdService } from '../use-cases/user/getUser/GetUserFactory';

export async function auth(req: Request, res: Response, next: NextFunction) {
	const token = req.headers.authorization?.split(' ')[1];

	if (!token) throw new AppError(401, 'Invalid or expired token');

	const payload = verifyToken(token);

	if (!payload) throw new AppError(401, 'Invalid or expired token');

	req.body.user = await getUserByIdService.execute(payload.id);

	next();
}
