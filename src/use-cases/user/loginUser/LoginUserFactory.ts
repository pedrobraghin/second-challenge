import { usersRepository } from '../UsersRepositoryFactory';
import { LoginUserController } from './LoginUserController';
import { LoginUserService } from './LoginUserService';

const loginUserService = new LoginUserService(usersRepository);
const loginUserController = new LoginUserController(loginUserService);

export { loginUserController, loginUserService };
