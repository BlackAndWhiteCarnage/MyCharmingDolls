const errors = {
	email: {
		required: 'Please provide an email.',
		pattern: 'Email address is invalid.',
	},
	message: {
		required: 'Please provide a message.',
		pattern: 'Message must contain at least 30 characters.',
	},
	required: 'This field is required.',
} as const;

export default errors;
