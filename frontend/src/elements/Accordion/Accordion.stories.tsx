/**
 * External dependencies
 */
import { StoryObj } from '@storybook/react';

/**
 * Internal dependencies
 */
import Accordion from '.';

export default {
	title: 'Components/Accordion',
	component: Accordion,
};

export const Default: StoryObj<typeof Accordion> = {
	args: {
		items: new Array(6).fill({
			title: 'Open-source repositories',
			description:
				'“Micropackage” is a collection of open-source repositories with reusable code for inclusion in WordPress plugins and themes',
		}),
	},
};
