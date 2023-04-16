/**
 * External dependencies
 */
import { StoryObj, StoryFn, Meta } from '@storybook/react';

/**
 * Internal dependencies
 */
import { Form } from '@/elements';
import Input from '.';

export default {
	title: 'Components/Input',
	component: Input,
	decorators: [
		(Story: StoryFn) => (
			<Form>
				<Story />
			</Form>
		),
	],
} satisfies Meta<typeof Input>;

const placeholder = 'Lorem ipsum';

export const Default: StoryObj<typeof Input> = {
	args: {
		placeholder,
	},
};

export const Disabled: StoryObj<typeof Input> = {
	args: {
		disabled: true,
		value: placeholder,
	},
};
