import Joi from 'joi';

const createEventSchema = Joi.object({
	description: Joi.string().required(),
	dateTime: Joi.date()
		.iso()
		.required()
		.min(new Date(new Date().getMinutes() - 1))
		.required(),
});

const updateEventSchema = Joi.object({
	description: Joi.string().optional(),
	dateTime: Joi.date()
		.iso()
		.required()
		.min(new Date(new Date().getMinutes() - 1))
		.optional(),
});

export { createEventSchema, updateEventSchema };
