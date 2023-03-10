import { usersRepository } from '../UsersRepositoryFactory';

import { DeleteUserByIdService } from './DeleteUserByIdService';
import { DeleteUserByIdController } from './DeleteUserByIdController';
import { eventsRepository } from '../../event/EventsRepositoryFactory';

const deleteUserByIdService = new DeleteUserByIdService(
	usersRepository,
	eventsRepository
);
const deleteUserByIdController = new DeleteUserByIdController(
	deleteUserByIdService
);

export { deleteUserByIdService, deleteUserByIdController };
