import { AppError } from './../../../errors/AppError';
import { InMemoryUsersRepository } from '../../../repositories/implementations/InMemoryUsersRepository';
import { User } from '../../../types/User';
import { CreateUserService } from '../createUser/CreateUserService';
import { UpdateUserByIdService } from './UpdateUserByIdService';

import 'dotenv/config';

describe('Update User Service', () => {
	let createUserService: CreateUserService;
	let usersRepository: InMemoryUsersRepository;
	let updateUserByIdService: UpdateUserByIdService;

	beforeEach(() => {
		usersRepository = new InMemoryUsersRepository();
		createUserService = new CreateUserService(usersRepository);
		updateUserByIdService = new UpdateUserByIdService(usersRepository);
	});

	it('should be able to update a user', async () => {
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
		const user = (await usersRepository.findByEmail(userData.email)) as User;

		const updatedUser = await updateUserByIdService.execute(user?._id, {
			firstName: 'Jonas',
		});

		expect(updatedUser.firstName).toEqual('Jonas');
	});

	it('should not be able to update a user that not exists', async () => {
		expect(async () => {
			await updateUserByIdService.execute('123', {
				firstName: 'Jonas',
			});
		}).rejects.toThrowError(new AppError(400, 'User not found'));
	});
});
