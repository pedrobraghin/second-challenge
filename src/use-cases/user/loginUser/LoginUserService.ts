import { AppError } from './../../../errors/AppError';
import { IUsersRepository } from '../../../repositories/IUsersRepository';
import { comparePass, createToken } from '../../../security/security';

export class LoginUserService {
	private usersRepository: IUsersRepository;
	constructor(usersRepository: IUsersRepository) {
		this.usersRepository = usersRepository;
	}

	async execute(email: string, password: string) {
		const user = await this.usersRepository.findByEmail(email);

		if (!user) throw new AppError(401, 'Invalid email or password');

		const validPass = await comparePass(password, user.password);

		if (!validPass) throw new AppError(401, 'Invalid email or password');

		const token = createToken(user._id);

		return token;
	}
}
