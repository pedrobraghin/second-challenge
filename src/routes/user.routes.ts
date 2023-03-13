import { Router } from 'express';
import { validateUserData } from '../middlewares/valiteUserData';

import {
	createUserController,
	loginUserController,
	getUserByIdController,
	updateUserByIdController,
	deleteUserByIdController,
} from '../use-cases/user';

import { auth } from '../middlewares/auth';

const usersRouter = Router();
//const swaggerDocument = YAML.load('../swagger/swagger.yaml');

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Endpoints for managing users
 *
 * /api/v1/users/signUp:
 *   post:
 *     summary: User signUp
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - firstName
 *               - lastName
 *               - email
 *               - city
 *               - country
 *               - birthDate
 *               - password
 *               - confirmPassword
 *             properties:
 *               firstName:
 *                 type: string
 *                 description: First name of the user
 *               lastName:
 *                 type: string
 *                 description: Last name of the user
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Email address of the user
 *               city:
 *                 type: string
 *                 description: City of the user
 *               country:
 *                 type: string
 *                 description: Country of the user
 *               birthDate:
 *                 type: string
 *                 format: date
 *                 description: Birth date of the user
 *               password:
 *                 type: string
 *                 description: Password of the user
 *               confirmPassword:
 *                 type: string
 *                 description: Confirmation of the user's password
 *     responses:
 *       '201':
 *         description: User creation successful
 *       '400':
 *         description: Bad Request
 *       '500':
 *         description: Internal Server Error
 *
 * /api/v1/users/signIn:
 *   post:
 *     summary: User Sign In
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Email address of the user
 *               password:
 *                 type: string
 *                 description: Password of the user
 *     responses:
 *       '200':
 *         description: User sign in successful
 *       '401':
 *         description: Unauthorized
 *
 * /api/v1/users/me:
 *   get:
 *     summary: Get user information
 *     tags: [Users]
 *     responses:
 *       '200':
 *         description: User information retrieved successfully
 *       '401':
 *         description: User not authenticated
 *   patch:
 *     summary: Update user information
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *                 description: First name of the user
 *               lastName:
 *                 type: string
 *                 description: Last name of the user
 *               email:
 *                 type: string
 *                 description: Email address of the user
 *               city:
 *                 type: string
 *                 description: City where the user lives
 *               country:
 *                 type: string
 *                 description: Country where the user lives
 *               birthDate:
 *                 type: string
 *                 format: date
 *                 description: Date of birth of the user (YYYY-MM-DD)
 *               password:
 *                 type: string
 *                 description: User password
 *               confirmPassword:
 *                 type: string
 *                 description: Confirm password
 *     responses:
 *       '200':
 *         description: User information updated successfully
 *       '400':
 *         description: Invalid data
 *       '401':
 *         description: User not authenticated
 *   delete:
 *     summary: Delete user account
 *     tags: [Users]
 *     responses:
 *       '204':
 *         description: User account deleted successfully
 *       '401':
 *         description: User not authenticated
 */

usersRouter.post('/signUp', validateUserData, createUserController.handle);
usersRouter.post('/signIn', loginUserController.handle);

usersRouter.get('/me', auth, getUserByIdController.handle);
usersRouter.patch('/me', auth, updateUserByIdController.handle);
usersRouter.delete('/me', auth, deleteUserByIdController.handle);

export { usersRouter };
