/* eslint-disable no-unused-vars */
import { User } from '../../types/User';
import { IUsersRepository } from '../IUsersRepository';
import { UserModel } from '../../models/UserModel';

export class MongoUsersRepository implements IUsersRepository {
	async getUser(userId: string): Promise<User | null> {
		const user = await UserModel.findById(userId);
		return user;
	}

	async signUp(user: User): Promise<User | null> {
		const createdUser = await UserModel.create(user);
		return createdUser;
	}

	async deleteUser(userId: string): Promise<User | null> {
		const deletedUser = await UserModel.findByIdAndDelete(userId);
		return deletedUser;
	}

	async updateUser(user: User): Promise<User | null> {
		const updatedUser = await UserModel.findOneAndUpdate(user);
		return updatedUser;
	}
}
