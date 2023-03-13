import { Request, Response, NextFunction } from 'express';
import { AppError } from '../errors/AppError';

export function errorHandler(
	err: Error,
	_req: Request,
	res: Response,
	_next: NextFunction
) {
	if (err instanceof AppError) {
		return res.status(err.statusCode).json({
			status: 'fail',
			message: err.message,
		});
	} else if (err.name === 'MongoServerError') {
		return res.status(400).json({
			status: 'fail',
			message: 'E-mail already exists',
		});
	} else if (err.name == 'ValidationError' || err.name == 'CastError') {
		return res.status(400).json({
			status: 'fail',
			message: err.message,
		});
	}

	return res.status(500).json({
		status: 'error',
		message: 'Something went wrong. Please try again later.',
	});
}

export function notFoundRouteHandler(
	req: Request,
	res: Response,
	next: NextFunction
) {
	return res.status(404).json({
		status: 'fail',
		message: 'Route not found.',
	});
}
