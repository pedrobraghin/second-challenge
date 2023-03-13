import { hashPass } from '../../security/security';
import { User } from '../../types/User';
import { IUsersRepository } from '../IUsersRepository';
import { v4 } from 'uuid';

export class InMemoryUsersRepository implements IUsersRepository {
	private users: User[] = [];

	async getUser(userId: string): Promise<User | null> {
		const user = this.users.find((user) => user._id === userId);
		return user ? user : null;
	}

	async deleteUser(userId: string): Promise<User | null> {
		const userIndex = this.users.findIndex((user) => {
			return user._id === userId;
		});

		if (userIndex == -1) return null;
		const eventDeleted = this.users.splice(userIndex, 1);
		return eventDeleted[0];
	}

	async updateUser(
		userId: string,
		updateParams: Partial<User>
	): Promise<User | null> {
		const userIndex = this.users.findIndex((user) => {
			return user._id === userId;
		});

		if (userIndex == -1) return null;

		if (updateParams.birthDate != undefined) {
			this.users[userIndex].birthDate = updateParams.birthDate;
		}

		if (updateParams.city != undefined) {
			this.users[userIndex].city = updateParams.city;
		}

		if (updateParams.country != undefined) {
			this.users[userIndex].country = updateParams.country;
		}

		if (updateParams.email != undefined) {
			if (
				this.users.find((user) => user.email == updateParams.email) == undefined
			) {
				this.users[userIndex].email = updateParams.email;
			}
		}

		if (updateParams.firstName != undefined) {
			this.users[userIndex].firstName = updateParams.firstName;
		}

		if (updateParams.lastName != undefined) {
			this.users[userIndex].lastName = updateParams.lastName;
		}

		if (updateParams.password != undefined) {
			this.users[userIndex].password = await hashPass(updateParams.password);
		}

		return this.users[userIndex];
	}

	async signUp(user: User): Promise<User | null> {
		const useralreadyExists = this.users.find((u) => u.email === user.email);
		if (useralreadyExists) return null;
		this.users.push(user);
		user._id = v4();

		return user;
	}

	async findByEmail(email: string): Promise<User | null> {
		const user = this.users.find((user) => user.email === email);

		if (!user) return null;

		return user;
	}
}
