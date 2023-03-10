import { AppError } from '../../../errors/AppError';
import { IUsersRepository } from '../../../repositories/IUsersRepository';

export class UpdateUserByIdService {
	private usersRepository: IUsersRepository;

	constructor(usersRepository: IUsersRepository) {
		this.usersRepository = usersRepository;
	}

	async execute(id: string, updateParams: any) {
		const user = await this.usersRepository.updateUser(id, updateParams);

		if (!user) throw new AppError(404, 'User not found');

		return user;
	}
}
