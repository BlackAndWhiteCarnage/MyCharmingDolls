/**
 * External dependencies
 */
import { StoryObj, Meta, StoryFn } from '@storybook/react';

/**
 * Internal dependencies
 */
import Description from './Description';

export default {
	title: 'Components/Description',
	component: Description,
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
} satisfies Meta<typeof Description>;

export const Default: StoryObj<typeof Description> = {
	args: {
		limit: true,
		text: `
		This is the first line.  
		And this is the second line.
		`,
	},
};
