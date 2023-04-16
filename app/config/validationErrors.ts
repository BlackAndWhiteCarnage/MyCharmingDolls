const errors = {
	email: {
		required: 'Please provide an email.',
		pattern: 'Please provide a valid email address.',
	},
	tel: {
		required: 'Please provide your phone number.',
		pattern: 'Phone number is invalid.',
		min: 'Phone number is too short.',
	},
	required: 'This field is required.',
} as const;

export default errors;
