import { usersRepository } from '../UsersRepositoryFactory';

import { DeleteUserByIdService } from './DeleteUserByIdService';
import { DeleteUserByIdController } from './DeleteUserByIdController';

const deleteUserByIdService = new DeleteUserByIdService(usersRepository);
const deleteUserByIdController = new DeleteUserByIdController(
	deleteUserByIdService
);

export { deleteUserByIdService, deleteUserByIdController };
