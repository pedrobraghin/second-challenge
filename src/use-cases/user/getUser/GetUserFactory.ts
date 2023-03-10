import { usersRepository } from '../UsersRepositoryFactory';

import { GetUserByIdService } from './GetUserByIdService';
import { GetUserByIdController } from './GetUserByIdController';

const getUserByIdService = new GetUserByIdService(usersRepository);
const getUserByIdController = new GetUserByIdController(getUserByIdService);

export { getUserByIdService, getUserByIdController };
