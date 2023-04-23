/**
 * External dependencies
 */
import { StoryObj, Meta } from '@storybook/react';

/**
 * Internal dependencies
 */
import Logo from '.';

export default {
	title: 'Elements/Logo',
	component: Logo,
} satisfies Meta<typeof Logo>;

export const Default: StoryObj<typeof Logo> = {};
