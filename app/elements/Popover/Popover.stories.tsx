/**
 * External dependencies
 */
import { StoryObj, Meta } from '@storybook/react';

/**
 * Internal dependencies
 */
import Popover from '.';

const disabled = {
	table: {
		disable: true,
	},
};

export default {
	title: 'Components/Popover',
	component: Popover,
	argTypes: {
		button: disabled,
		children: disabled,
		placement: {
			control: { type: 'radio' },
			options: ['top', 'right', 'bottom', 'left'],
		},
	},
} satisfies Meta<typeof Popover>;

export const Default: StoryObj<typeof Popover> = {
	args: {
		button: <button data-target="popup-element">Click me!</button>,
		children: (
			<p style={{ margin: 0, padding: '2rem' }}>Popover children here!</p>
		),
	},
};
