import { CreateUserService } from '../createUser/CreateUserService';
import { GetUserByIdService } from './GetUserByIdService';
import { InMemoryUsersRepository } from '../../../repositories/implementations/InMemoryUsersRepository';
import { verifyToken } from '../../../security/security';
import { User } from '../../../types/User';

import 'dotenv/config';

describe('Get User Service', () => {
	let createUserService: CreateUserService;
	let usersRepository: InMemoryUsersRepository;
	let getUserByIdService: GetUserByIdService;

	beforeEach(() => {
		usersRepository = new InMemoryUsersRepository();
		createUserService = new CreateUserService(usersRepository);
		getUserByIdService = new GetUserByIdService(usersRepository);
	});

	it('should be able to get user by id', async () => {
		const userData = {
			firstName: 'John',
			lastName: 'Doe',
			email: 'john@example.com',
			password: 'test1234',
			country: 'USA',
			city: 'Seattle',
			birthDate: new Date('1997-12-01'),
		} as User;

		const token = await createUserService.execute(userData);
		const tokenPayLoad = verifyToken(token);
		const userId = tokenPayLoad?.id as string;

		const user = await getUserByIdService.execute(userId);
		expect(userData.email).toEqual(user.email);
	});
});
