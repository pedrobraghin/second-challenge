import express from 'express';
import { router } from './routes/app.routes';
import { errorHandler, notFoundRouteHandler } from './routes/globals.routes';

const app = express();

app.use('/api/v1', router);

app.all('*', notFoundRouteHandler);
app.use(errorHandler);

export { app };
