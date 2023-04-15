/**
 * External dependencies
 */
import { StoryObj, Meta } from '@storybook/react';

/**
 * Internal dependencies
 */
import Header from '.';

export default {
	title: 'Components/Header',
	component: Header,
} satisfies Meta<typeof Header>;

export const Default: StoryObj<typeof Header> = {
	args: {
		title: 'Hi I’m *Weronika*',
	},
};
