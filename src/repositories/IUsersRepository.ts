/* eslint-disable no-unused-vars */
import { User } from '../types/User';

interface IUsersRepository {
	getUser(userId: string): Promise<User | null>;
	deleteUser(userId: string): Promise<User | null>;
	updateUser(userId: string, updateParams: unknown): Promise<User | null>;
	signUp(user: User): Promise<User | null>;
	findByEmail(email: string): Promise<User | null>;
}

export { IUsersRepository };
