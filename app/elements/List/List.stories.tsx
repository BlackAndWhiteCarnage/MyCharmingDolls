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
} satisfies Meta<typeof List>;

export const Default: StoryObj<typeof List> = {
	args: {
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
	},
};
