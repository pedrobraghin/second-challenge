import Joi from 'joi';

const createUserSchema = Joi.object({
	firstName: Joi.string().min(3).max(50).required(),
	lastName: Joi.string().min(3).max(50).required(),
	email: Joi.string().email().required(),
	password: Joi.string().min(8).required(),
	confirmPassword: Joi.ref('password'),
	city: Joi.string().required(),
	country: Joi.string().required(),
	birthDate: Joi.date()
		.min(new Date(new Date().getFullYear() - 130))
		.max(new Date(Date.now() - 6))
		.required(),
});

const updateUserSchema = Joi.object({
	firstName: Joi.string().min(3).max(50).optional(),
	lastName: Joi.string().min(3).max(50).optional(),
	email: Joi.string().email().optional(),
	city: Joi.string().optional(),
	country: Joi.string().optional(),
	birthDate: Joi.date()
		.min(new Date(new Date().getFullYear() - 130))
		.max(new Date(Date.now() - 6))
		.optional(),
});

export { createUserSchema, updateUserSchema };
