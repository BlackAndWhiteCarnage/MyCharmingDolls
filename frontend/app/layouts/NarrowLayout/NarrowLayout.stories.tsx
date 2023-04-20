/**
 * External dependencies
 */
import { StoryObj, Meta, StoryFn } from '@storybook/react';

/**
 * Internal dependencies
 */
import { WithNavigationLayout } from '@/layouts';
import NarrowLayout from './NarrowLayout';

export default {
	title: 'Layouts/NarrowLayout',
	component: NarrowLayout,
	parameters: {
		layout: 'fullwidth',
	},
	decorators: [
		(Story: StoryFn) => (
			<WithNavigationLayout>
				<Story />
			</WithNavigationLayout>
		),
	],
} satisfies Meta<typeof NarrowLayout>;

export const Default: StoryObj<typeof NarrowLayout> = {};
