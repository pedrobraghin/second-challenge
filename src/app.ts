import express from 'express';
import { router } from './routes/app.routes';
import { errorHandler, notFoundRouteHandler } from './routes/globals.routes';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger/swagger.json';

const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/v1', router);
app.all('*', notFoundRouteHandler);
app.use(errorHandler);

export { app };
