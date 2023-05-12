/**
 * External dependencies
 */
import { StoryObj, Meta } from '@storybook/react';

/**
 * Internal dependencies
 */
import { ReactComponent as InstagramIcon } from '@/images/icons/instagram.svg';
import LinkedIcon from '.';

export default {
	title: 'Components/LinkedIcon',
	component: LinkedIcon,
	argTypes: {
		icon: {
			table: {
				disable: true,
			},
		},
	},
} satisfies Meta<typeof LinkedIcon>;

export const Default: StoryObj<typeof LinkedIcon> = {
	args: {
		icon: InstagramIcon,
		href: '',
	},
};
