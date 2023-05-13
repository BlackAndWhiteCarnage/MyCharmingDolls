/**
 * External dependencies
 */
import { StoryObj, Meta } from '@storybook/react';

/**
 * Internal dependencies
 */
import Loader from '.';

export default {
	title: 'Components/Loader',
	component: Loader,
} satisfies Meta<typeof Loader>;

export const Default: StoryObj<typeof Loader> = {};
