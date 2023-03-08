import { usersRepository } from '../UsersRepositoryFactory';

import { GetUserByIdService } from './GetUserByIdService';
import { GetUSerByIdController } from './GetUserByIdController';

const getUserByIdService = new GetUserByIdService(usersRepository);
const getUserByIdController = new GetUSerByIdController(getUserByIdService);

export { getUserByIdService, getUserByIdController };
