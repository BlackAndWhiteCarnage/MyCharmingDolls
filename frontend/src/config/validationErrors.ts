const errors = {
	email: {
		required: 'Please provide an email.',
		pattern: 'Email address is invalid.',
	},
	required: 'This field is required.',
} as const;

export default errors;
