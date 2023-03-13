import express from 'express';
import { router } from './routes/app.routes';
import { errorHandler, notFoundRouteHandler } from './routes/globals.routes';
import swaggerUi from 'swagger-ui-express';
import { openapiSpecification } from './swagger/index';
const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification));
app.use('/api/v1', router);
app.all('*', notFoundRouteHandler);
app.use(errorHandler);

export { app };
