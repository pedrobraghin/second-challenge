import { AppError } from '../../../errors/AppError';
import { IUsersRepository } from '../../../repositories/IUsersRepository';
import { IEventsRepository } from '../../../repositories/IEventsRepository';

export class DeleteUserByIdService {
	private usersRepository: IUsersRepository;
	private eventsRepository: IEventsRepository;

	constructor(
		usersRepository: IUsersRepository,
		eventsRepository: IEventsRepository
	) {
		this.usersRepository = usersRepository;
		this.eventsRepository = eventsRepository;
	}

	async execute(id: string) {
		const user = await this.usersRepository.updateUser(id, { active: false });
		if (!user) throw new AppError(404, 'User not found');
		await this.eventsRepository.deleteAllUserEvents(id);

		return user;
	}
}
