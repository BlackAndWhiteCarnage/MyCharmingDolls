/**
 * External dependencies
 */
import { StoryObj, Meta } from '@storybook/react';

/**
 * Internal dependencies
 */
import Button from '.';

export default {
	title: 'Components/Button',
	component: Button,
} satisfies Meta<typeof Button>;

export const Primary: StoryObj<typeof Button> = {
	args: {
		children: 'Adopt now!',
	},
};

export const PrimaryWithArrow: StoryObj<typeof Button> = {
	args: {
		children: 'Read more & meet Nora',
		hasArrow: true,
	},
};

export const Secondary: StoryObj<typeof Button> = {
	args: {
		children: 'Browse other dolls',
		variant: 'secondary',
	},
};

export const SecondaryWithArrow: StoryObj<typeof Button> = {
	args: {
		children: 'Read more & meet Nora',
		hasArrow: true,
		variant: 'secondary',
	},
};

export const Disabled: StoryObj<typeof Button> = {
	args: {
		children: 'Adopt now!',
		disabled: true,
	},
};

export const DisabledWithArrow: StoryObj<typeof Button> = {
	args: {
		children: 'Adopt now!',
		disabled: true,
		hasArrow: true,
	},
};

export const FullWidth: StoryObj<typeof Button> = {
	args: {
		children: 'Adopt now!',
		hasArrow: true,
		hasFullWidth: true,
	},
};
