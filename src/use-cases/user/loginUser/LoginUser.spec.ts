import { AppError } from './../../../errors/AppError';
import { InMemoryUsersRepository } from '../../../repositories/implementations/InMemoryUsersRepository';
import { User } from '../../../types/User';
import { CreateUserService } from '../createUser/CreateUserService';
import { LoginUserService } from './LoginUserService';
import 'dotenv/config';

describe('Login User Service', () => {
	let createUserService: CreateUserService;
	let usersRepository: InMemoryUsersRepository;

	let loginUserService: LoginUserService;

	beforeEach(() => {
		usersRepository = new InMemoryUsersRepository();
		createUserService = new CreateUserService(usersRepository);
		loginUserService = new LoginUserService(usersRepository);
	});

	it('should be able to login a user', async () => {
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

		const token = await loginUserService.execute(
			'john@example.com',
			'test1234'
		);
		expect(token).not.toBeNull();
	});

	it('should not be able to login a user with wrong email or password', async () => {
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

		expect(async () => {
			await loginUserService.execute('john@example.com', 'wrongPassword');
		}).rejects.toThrowError(new AppError(401, 'Invalid email or password'));

		expect(async () => {
			await loginUserService.execute('test@email.com', 'test1234');
		}).rejects.toThrowError(new AppError(401, 'Invalid email or password'));
	});
});
