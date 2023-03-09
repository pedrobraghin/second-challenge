import Joi from 'joi';

const eventSchema = Joi.object({
	description: Joi.string().required(),
	dateTime: Joi.date()
		.iso()
		.required()
		.min(new Date(new Date().getMinutes() - 1)),
});

export { eventSchema };
