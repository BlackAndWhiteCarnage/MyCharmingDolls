/**
 * External dependencies
 */
import { StoryObj, Meta, StoryFn } from '@storybook/react';

/**
 * Internal dependencies
 */
import { Form } from '@/components';
import Textarea from './Textarea';

export default {
	title: 'Components/Textarea',
	component: Textarea,
	decorators: [
		(Story: StoryFn) => (
			<Form>
				<Story />
			</Form>
		),
	],
} satisfies Meta<typeof Textarea>;

export const Default: StoryObj<typeof Textarea> = {
	args: {
		placeholder: 'Lorem ipsum',
	},
};
