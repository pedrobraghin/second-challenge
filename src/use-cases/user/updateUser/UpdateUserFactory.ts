import { usersRepository } from '../UsersRepositoryFactory';

import { UpdateUserByIdService } from './UpdateUserByIdService';
import { UpdateUserByIdController } from './UpdateUserByIdController';

const updateUserByIdService = new UpdateUserByIdService(usersRepository);
const updateUserByIdController = new UpdateUserByIdController(
	updateUserByIdService
);

export { updateUserByIdService, updateUserByIdController };
