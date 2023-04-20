/**
 * External dependencies
 */
import { StoryObj, Meta, StoryFn } from '@storybook/react';

/**
 * Internal dependencies
 */
import { WithNavigationLayout } from '@/layouts';
import SneakPeekLayout from './SneakPeekLayout';

export default {
	title: 'Layouts/SneakPeekLayout',
	component: SneakPeekLayout,
	parameters: {
		layout: 'fullwidth',
	},
	decorators: [
		(Story: StoryFn) => (
			<WithNavigationLayout isFullScreen={true}>
				<Story />
			</WithNavigationLayout>
		),
	],
} satisfies Meta<typeof SneakPeekLayout>;

export const Default: StoryObj<typeof SneakPeekLayout> = {};
