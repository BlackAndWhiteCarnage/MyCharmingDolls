/**
 * External dependencies
 */
import { StoryObj, Meta, StoryFn } from '@storybook/react';

/**
 * Internal dependencies
 */
import SneakPeek from './SneakPeek';

export default {
	title: 'Elements/SneakPeek',
	component: SneakPeek,
	decorators: [
		(Story: StoryFn) => (
			<div
				style={{
					maxWidth: '49.625rem',
				}}
			>
				<Story />
			</div>
		),
	],
} satisfies Meta<typeof SneakPeek>;

export const Default: StoryObj<typeof SneakPeek> = {
	args: {},
};
