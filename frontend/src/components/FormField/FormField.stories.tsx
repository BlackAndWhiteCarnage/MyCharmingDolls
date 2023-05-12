/**
 * External dependencies
 */
import { StoryObj, StoryFn } from '@storybook/react';

/**
 * Internal dependencies
 */
import { Form, Button } from '@/components';
import { getEmailValidationRules } from '@/utils/validation';
import FormField from '.';

export default {
	title: 'Components/FormField',
	component: FormField,
	decorators: [
		(Story: StoryFn) => (
			<Form>
				<Story />
				<Button style={{ marginTop: '0.625rem' }}>Submit</Button>
			</Form>
		),
	],
};

export const Default: StoryObj<typeof FormField> = {
	args: {
		label: 'Enter your email',
		name: 'name',
		validation: getEmailValidationRules(),
	},
};
