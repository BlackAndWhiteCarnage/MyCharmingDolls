/**
 * External dependencies
 */
import { StoryObj, Meta, StoryFn } from '@storybook/react';

/**
 * Internal dependencies
 */
import PriceBox from '.';

export default {
	title: 'Components/PriceBox',
	component: PriceBox,
	decorators: [
		(Story: StoryFn) => (
			<div
				style={{
					maxWidth: '16.563rem',
				}}
			>
				<Story />
			</div>
		),
	],
} satisfies Meta<typeof PriceBox>;

export const Default: StoryObj<typeof PriceBox> = {
	args: {
		productPrice: 300,
	},
};
