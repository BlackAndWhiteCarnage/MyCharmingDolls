/**
 * External dependencies
 */
import { StoryObj, Meta } from '@storybook/react';

/**
 * Internal dependencies
 */
import Info from '.';

export default {
	title: 'Elements/Info',
	component: Info,
} satisfies Meta<typeof Info>;

export const Default: StoryObj<typeof Info> = {
	args: {
		label: 'Nora is already adopted or reserved!',
	},
};
