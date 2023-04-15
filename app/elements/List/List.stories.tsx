/**
 * External dependencies
 */
import { StoryObj, Meta } from '@storybook/react';

/**
 * Internal dependencies
 */
import List from '.';

export default {
	title: 'Components/List',
	component: List,
	excludeStories: ['DefaultProps'],
	argTypes: {
		listItems: {
			table: {
				disable: true,
			},
		},
	},
} satisfies Meta<typeof List>;

export const DefaultProps = {
	listItems: [
		'carving lips, nose & cheeks',
		'new makeup done with (dry pastels, watercolor pencils, fixing varnish)',
		'painted eyelids',
		'new eyes',
		'new lashes',
		'sleep eyes',
		'new pull-strings decorated with beads',
		'washed and styled hair',
		'my signature & her name on the back of head',
	],
};

export const Default: StoryObj<typeof List> = {
	args: DefaultProps,
};
