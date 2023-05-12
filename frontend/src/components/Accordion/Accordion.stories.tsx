/**
 * External dependencies
 */
import { StoryObj, Meta } from '@storybook/react';

/**
 * Internal dependencies
 */
import Accordion from '.';

export default {
	title: 'Components/Accordion',
	component: Accordion,
} satisfies Meta<typeof Accordion>;

export const Default: StoryObj<typeof Accordion> = {
	args: {
		items: new Array(6).fill({
			label: 'Some title',
			children: 'some description',
		}),
	},
};
