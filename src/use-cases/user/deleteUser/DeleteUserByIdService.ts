import { AppError } from '../../../errors/AppError';
import { IUsersRepository } from '../../../repositories/IUsersRepository';

export class DeleteUserByIdService {
	private usersRepository: IUsersRepository;

	constructor(usersRepository: IUsersRepository) {
		this.usersRepository = usersRepository;
	}

	async execute(id: string) {
		const user = await this.usersRepository.updateUser(id, { active: false });

		if (!user) throw new AppError(404, 'User not found');

		return user;
	}
}
