import { CreateUserController } from './CreateUserController';
import { CreateUserService } from './CreateUserService';
import { usersRepository } from '../UsersRepositoryFactory';

const createUserService = new CreateUserService(usersRepository);
const createUserController = new CreateUserController(createUserService);

export { createUserController, createUserService };
