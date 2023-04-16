/**
 * External dependencies
 */
import { StoryObj, Meta, StoryFn } from '@storybook/react';

/**
 * Internal dependencies
 */
import { WithNavigationLayout } from '@/layouts';
import WideLayout from './WideLayout';

export default {
	title: 'Layouts/WideLayout',
	component: WideLayout,
	parameters: {
		layout: 'fullscreen',
	},
	decorators: [
		(Story: StoryFn) => (
			<WithNavigationLayout>
				<Story />
			</WithNavigationLayout>
		),
	],
} satisfies Meta<typeof WideLayout>;

export const Default: StoryObj<typeof WideLayout> = {};
