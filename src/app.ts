import express from 'express';
import { Request, Response } from 'express';

const app = express();

app.get('/', (_req: Request, res: Response) => {
	return res.status(200).json({
		status: 'success',
	});
});

export { app };
