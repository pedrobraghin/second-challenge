import { AppError } from '../../../errors/AppError';
import { IUsersRepository } from '../../../repositories/IUsersRepository';
import { hashPass } from '../../../security/security';
import { User } from '../../../types/User';

export class UpdateUserByIdService {
	private usersRepository: IUsersRepository;

	constructor(usersRepository: IUsersRepository) {
		this.usersRepository = usersRepository;
	}

	async execute(id: string, updateParams: Partial<User>) {
		if (updateParams.password) {
			updateParams.password = await hashPass(updateParams.password);
		}
		const user = await this.usersRepository.updateUser(id, updateParams);

		if (!user) throw new AppError(404, 'User not found');

		return user;
	}
}
