import Joi from 'joi';

const userSchema = Joi.object({
	firstName: Joi.string().alphanum().min(3).max(30).required(),
	lastName: Joi.string().alphanum().min(3).max(30).required(),
	email: Joi.string().email().required(),
	password: Joi.string().min(8).required(),
	confirmPassword: Joi.ref('password'),
	city: Joi.string().alphanum().required(),
	country: Joi.string().alphanum().required(),
	birthDate: Joi.date()
		.min(new Date(new Date().getFullYear() - 130))
		.max(new Date(Date.now() - 6))
		.required(),
});

const userUpdate = Joi.object({
	firstName: Joi.string().alphanum().min(3).max(30).optional(),
	lastName: Joi.string().alphanum().min(3).max(30).optional(),
	email: Joi.string().email().optional(),
	city: Joi.string().alphanum().optional(),
	country: Joi.string().alphanum().optional(),
	birthDate: Joi.date()
		.min(new Date(new Date().getFullYear() - 130))
		.max(new Date(Date.now() - 6))
		.optional(),
});

export { userSchema, userUpdate };
