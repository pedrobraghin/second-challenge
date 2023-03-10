/* eslint-disable no-unused-vars */
import { User } from '../../types/User';
import { IUsersRepository } from '../IUsersRepository';
import { UserModel } from '../../models/UserModel';
import { UpdateQuery } from 'mongoose';

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

	async updateUser(
		userId: string,
		updateBody: UpdateQuery<User>
	): Promise<User | null> {
		const updatedUser = await UserModel.findByIdAndUpdate(userId, updateBody, {
			new: true,
			runValidators: true,
		});
		return updatedUser;
	}

	async findByEmail(email: string): Promise<User | null> {
		const user = await UserModel.findOne({ email });
		return user;
	}
}
