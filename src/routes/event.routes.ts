import { Router } from 'express';

import {
	createEventController,
	getAllEventsController,
	getEventByIdController,
	getEventByWeekDayController,
	deleteEventByIdController,
	deleteEventByWeekDayController,
} from '../use-cases/event';

import { validateEventData } from '../middlewares/validateEventData';
import { auth } from '../middlewares/auth';

const eventsRouter = Router({ mergeParams: true });

eventsRouter.use(auth);

/**
 * @swagger
 * tags:
 *   name: Events
 *   description: Endpoints for managing user events
 *
 * /api/v1/events:
 *   post:
 *     summary: Create a new event
 *     tags: [Events]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - description
 *               - dateTime
 *             properties:
 *               description:
 *                 type: string
 *                 description: Description of the event
 *               dateTime:
 *                 type: string
 *                 format: date
 *                 description: Date of the event
 *     responses:
 *       '201':
 *         description: Event created successfully
 *       '400':
 *         description: Bad Request
 *       '500':
 *         description: Internal Server Error
 *
 *   get:
 *     summary: Get all events of the user
 *     tags: [Events]
 *     parameters:
 *       - in: query
 *         name: weekDay
 *         schema:
 *           type: string
 *         description: The day of the week (e.g. Sunday)
 *     responses:
 *       '200':
 *         description: Events retrieved successfully
 *       '401':
 *         description: User not authenticated
 *       '500':
 *         description: Internal Server Error
 *   delete:
 *     summary: Delete events of the user for a given weekday
 *     tags: [Events]
 *     parameters:
 *       - in: query
 *         name: weekDay
 *         schema:
 *           type: string
 *         description: The day of the week (e.g. Sunday)
 *     responses:
 *       '200':
 *         description: Events retrieved successfully
 *       '401':
 *         description: User not authenticated
 *       '500':
 *         description: Internal Server Error
 *
 * /api/v1/events/{id}:
 *   get:
 *     summary: Get an event by ID
 *     tags: [Events]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the event to retrieve
 *     responses:
 *       '200':
 *         description: Event retrieved successfully
 *       '401':
 *         description: User not authenticated
 *       '404':
 *         description: Event not found
 *       '500':
 *         description: Internal Server Error
 *
 *   delete:
 *     summary: Delete an event by ID
 *     tags: [Events]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the event to delete
 *     responses:
 *       '204':
 *         description: Event deleted successfully
 *       '401':
 *         description: User not authenticated
 *       '404':
 *         description: Event not found
 *       '500':
 *         description: Internal Server Error
 *
 */

eventsRouter.post('/', validateEventData, createEventController.handle);

eventsRouter.get('/', (req, res, next) => {
	const { weekDay } = req.query;
	if (weekDay) getEventByWeekDayController.handle(req, res, next);
	else getAllEventsController.handle(req, res, next);
});

eventsRouter.get('/:id', getEventByIdController.handle);

eventsRouter.delete('/:id', deleteEventByIdController.handle);
eventsRouter.delete('/', deleteEventByWeekDayController.handle);

export { eventsRouter };
