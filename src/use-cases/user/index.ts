import { createUserController } from './createUser/CreateUserFactory';
import { getUserByIdController } from './getUser/GetUserFactory';
import { updateUserByIdController } from './updateUser/UpdateUserFactory';
import { loginUserController } from './loginUser/LoginUserFactory';
import { deleteUserByIdController } from './deleteUser/DeleteUserFactory';

export {
	createUserController,
	getUserByIdController,
	updateUserByIdController,
	loginUserController,
	deleteUserByIdController,
};
