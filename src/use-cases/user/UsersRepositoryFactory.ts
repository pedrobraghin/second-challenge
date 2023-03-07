import { IUsersRepository } from '../../repositories/IUsersRepository';
import { MongoUsersRepository } from '../../repositories/implementations/MongoUsersRepository';

const usersRepository: IUsersRepository = new MongoUsersRepository();

export { usersRepository };
