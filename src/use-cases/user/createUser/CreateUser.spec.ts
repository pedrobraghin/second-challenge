import { CreateUserService } from './CreateUserService';
import { InMemoryUsersRepository } from '../../../repositories/implementations/InMemoryUsersRepository';
import { User } from '../../../types/User';
import 'dotenv/config';

describe('Create User Service', () => {
	let createUserService: CreateUserService;
	let usersRepository: InMemoryUsersRepository;

	beforeEach(() => {
		usersRepository = new InMemoryUsersRepository();
		createUserService = new CreateUserService(usersRepository);
	});

	it('should be able to create a new user', async () => {
		const userData = {
			firstName: 'John',
			lastName: 'Doe',
			email: 'john@example.com',
			password: 'test1234',
			country: 'USA',
			city: 'Seattle',
			birthDate: new Date('1997-12-01'),
		} as User;
		const user = await createUserService.execute(userData);

		expect(user).not.toBeNull();
	});

	it('should not be able to create a new user with email that already exists', async () => {
		const userData1 = {
			firstName: 'John',
			lastName: 'Doe',
			email: 'john@example.com',
			password: 'test1234',
			country: 'USA',
			city: 'Seattle',
			birthDate: new Date('1997-12-01'),
		} as User;

		await createUserService.execute(userData1);

		const userData2 = {
			firstName: 'John',
			lastName: 'Smith',
			email: 'john@example.com',
			password: 'test1234',
			country: 'USA',
			city: 'Seattle',
			birthDate: new Date('1995-12-01'),
		} as User;

		const fn = async () => {
			await createUserService.execute(userData2);
		};

		await expect(fn).rejects.toThrow(new Error('User already exists'));
	});
});
