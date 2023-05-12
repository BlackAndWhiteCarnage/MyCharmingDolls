/**
 * Internal dependencies
 */
import { validationErrors } from '@/config';

export const getRequiredRule = (
	message: string = validationErrors.required,
	pattern = false
) => ({
	required: {
		value: !pattern ? true : pattern,
		message: message,
	},
});

export const getEmailValidationRules = () => ({
	...getRequiredRule(validationErrors.email.required),
	pattern: {
		value: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/,
		message: validationErrors.email.pattern,
	},
});

export const getRequiredValidation = () => ({
	...getRequiredRule(validationErrors.required),
});
