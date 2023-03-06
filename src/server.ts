import 'dotenv/config';
import mongoose from 'mongoose';

import { app } from './app';

const DB = process.env.DATABASE!.replace(
	'<PASSWORD>',
	process.env.DATABASE_PASSWORD!
);

mongoose.connect(DB).then((con) => {
	console.log('Connected to database!');
});

const port = process.env.PORT || 4000;

app.listen(port, async () => {
	console.log(
		`Listening to port ${port}, environment: ${process.env.NODE_ENV}`
	);
});
