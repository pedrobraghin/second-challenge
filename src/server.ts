import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '../config.env') });

import { app } from './app';

const port = process.env.PORT || 4000;

app.listen(port, async () => {
	console.log(
		`Listening to port ${port}, environment: ${process.env.NODE_ENV}`
	);
});
