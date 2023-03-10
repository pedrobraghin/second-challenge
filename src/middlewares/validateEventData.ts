import { Request, Response, NextFunction } from 'express';
import { createEventSchema } from '../validators/eventValidator';
import { Event } from '../types/Event';
import { ValidationError } from 'joi';
import { AppError } from '../errors/AppError';

export async function validateEventData(
	req: Request,
	res: Response,
	next: NextFunction
) {
	try {
		const { description, dateTime }: Event = req.body;
		await createEventSchema.validateAsync({ description, dateTime });
		return next();
	} catch (err) {
		if (err instanceof ValidationError) {
			return next(new AppError(400, err.details[0].message));
		}
		return next(err);
	}
}
