/**
 * External dependencies
 */
import { StoryObj, Meta } from '@storybook/react';

/**
 * Internal dependencies
 */
import WithNavigationLayout from './WithNavigationLayout';

export default {
	title: 'Layouts/WithNavigationLayout',
	component: WithNavigationLayout,
} satisfies Meta<typeof WithNavigationLayout>;

export const Default: StoryObj<typeof WithNavigationLayout> = {
	args: {
		children: (
			<div style={{ height: '200vh', background: 'red' }}>
				content here
			</div>
		),
	},
};
