import { AppError } from './../../../errors/AppError';
import { CreateUserService } from '../createUser/CreateUserService';
import { DeleteUserByIdService } from './DeleteUserByIdService';
import { InMemoryUsersRepository } from '../../../repositories/implementations/InMemoryUsersRepository';
import { InMemoryEventsRepository } from '../../../repositories/implementations/InMemoryEventsRepository';
import { User } from '../../../types/User';
import 'dotenv/config';

describe('Delete User By Id Service', () => {
	let createUserService: CreateUserService;
	let deleteUserByIdService: DeleteUserByIdService;
	let usersRepository: InMemoryUsersRepository;
	let eventsRepository: InMemoryEventsRepository;

	beforeEach(() => {
		usersRepository = new InMemoryUsersRepository();
		eventsRepository = new InMemoryEventsRepository();
		createUserService = new CreateUserService(usersRepository);
		deleteUserByIdService = new DeleteUserByIdService(
			usersRepository,
			eventsRepository
		);
	});
	it('should be able to delete a user', async () => {
		const userData = {
			firstName: 'John',
			lastName: 'Doe',
			email: 'john@example.com',
			password: 'test1234',
			country: 'USA',
			city: 'Seattle',
			birthDate: new Date('1997-12-01'),
		} as User;
		await createUserService.execute(userData);
		const deletedUser = await deleteUserByIdService.execute(userData._id);

		expect(deletedUser.email).toEqual(userData.email);
	});

	it('should not be able to delete a user that not exists', async () => {
		const fn = async () => {
			await deleteUserByIdService.execute('123');
		};
		await expect(fn).rejects.toThrowError(new AppError(404, 'User not found'));
	});
});
