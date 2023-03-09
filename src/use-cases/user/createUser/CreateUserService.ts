import { IUsersRepository } from '../../../repositories/IUsersRepository';
import { createToken, hashPass } from '../../../security/security';
import { User } from '../../../types/User';

export class CreateUserService {
	private usersRepository: IUsersRepository;

	constructor(usersRepository: IUsersRepository) {
		this.usersRepository = usersRepository;
	}

	async execute(userData: User) {
		userData.password = await hashPass(userData.password);

		const createdUser = await this.usersRepository.signUp(userData);

		if (!createdUser) {
			throw new Error('User already exists');
		}

		const token = createToken(createdUser._id);

		return token;
	}
}
