/**
 * External dependencies
 */
import { StoryObj, Meta } from '@storybook/react';

/**
 * Internal dependencies
 */
import Textarea from './Textarea';

export default {
	title: 'Elements/Textarea',
	component: Textarea,
} satisfies Meta<typeof Textarea>;

export const Default: StoryObj<typeof Textarea> = {
	args: {
		placeholder: 'Lorem ipsum',
	},
};
