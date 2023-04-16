/**
 * External dependencies
 */
import { StoryObj, Meta, StoryFn } from '@storybook/react';

/**
 * Internal dependencies
 */
import SneakPeak from './SneakPeak';

export default {
	title: 'Elements/SneakPeak',
	component: SneakPeak,
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
} satisfies Meta<typeof SneakPeak>;

export const Default: StoryObj<typeof SneakPeak> = {
	args: {
		textBlocks: [
			'your worst nightmare, said the dark and creepy doll, as she sat in the dusty corner of the antique shop.',
			'Nora had been sitting there for years, waiting for someone to take her home. She had a long and tragic history - she was crafted by a reclusive toy maker who poured all of his love and madness into creating the perfect doll. But the toy maker died suddenly, leaving Nora alone in the dusty old house.',
		],
	},
};
