/**
 * External dependencies
 */
import { StoryObj, Meta, StoryFn } from '@storybook/react';

/**
 * Internal dependencies
 */
import { ReactComponent as SomeIcon } from '@/images/icons/arrow.svg';
import WelcomeComponent from '.';

export default {
	title: 'Components/WelcomeComponent',
	component: WelcomeComponent,
	decorators: [
		(Story: StoryFn) => (
			<div style={{ maxWidth: '36rem' }}>
				<Story />
			</div>
		),
	],
	parameters: {
		backgrounds: {
			default: 'light',
		},
	},
} satisfies Meta<typeof WelcomeComponent>;

export const LightTheme: StoryObj<typeof WelcomeComponent> = {
	args: {
		title: "It's Light Welcome Component title",
		description: "It's Light Welcome Component description",
		image: 'https://plus.unsplash.com/premium_photo-1669638781649-5802d884acd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
		icon: SomeIcon,
	},
};

export const DarkTheme: StoryObj<typeof WelcomeComponent> = {
	args: {
		title: "It's Dark Welcome Component title",
		theme: 'dark',
		description: "It's Dark Welcome Component description",
		image: 'https://plus.unsplash.com/premium_photo-1669638781649-5802d884acd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
		icon: SomeIcon,
	},
};
