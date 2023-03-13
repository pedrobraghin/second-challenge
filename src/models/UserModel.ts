import { Schema, model } from 'mongoose';
import { User } from '../types/User';

const userSchema = new Schema<User>(
	{
		firstName: {
			type: String,
			required: [true, 'A first name must be provided'],
			minlength: 3,
			trim: true,
		},

		lastName: {
			type: String,
			required: [true, 'A last name must be provided'],
			minlength: 3,
			trim: true,
		},

		birthDate: {
			type: Date,
			required: [true, 'A birth date must be provided'],
			min: new Date(new Date().setFullYear(new Date().getFullYear() - 120)),
			max: new Date(new Date().setFullYear(new Date().getFullYear() - 5)),
		},

		city: {
			type: String,
			required: [true, 'A city must be provided'],
			trim: true,
		},

		country: {
			type: String,
			required: [true, 'A country must be provided'],
		},

		email: {
			type: String,
			required: [true, 'A email must be provided'],
			unique: true,
			lowercase: true,
		},

		password: {
			type: String,
			minlength: 8,
			required: [true, 'A password must be provided'],
		},
	},
	{ timestamps: true }
);

userSchema.pre(/^find/, function (next) {
	this.find({ active: { $ne: false } });
	next();
});

const UserModel = model('User', userSchema);

export { UserModel };
