import Joi from 'joi';

const eventSchema = Joi.object({
	description: Joi.string().required(),
	dateTime: Joi.date()
		.iso()
		.required()
		.min(new Date(new Date().getMinutes() - 1))
		.required(),
});

const updateSchema = Joi.object({
	description: Joi.string().optional(),
	dateTime: Joi.date()
		.iso()
		.required()
		.min(new Date(new Date().getMinutes() - 1))
		.optional(),
});

export { eventSchema, updateSchema };
