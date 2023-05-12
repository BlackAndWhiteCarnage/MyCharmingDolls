/**
 * External dependencies
 */
import { StoryObj, Meta } from '@storybook/react';

/**
 * Internal dependencies
 */
import { DefaultProps as ProductsListProps } from '@/components/ProductsList/ProductsList.stories';
import { DefaultProps as SwitchProps } from '@/components/Switch/Switch.stories';
import Navigation from './Navigation';

export default {
	title: 'Components/Navigation',
	component: Navigation,
} satisfies Meta<typeof Navigation>;

export const Default: StoryObj<typeof Navigation> = {
	args: {
		links: [
			{
				label: 'About',
				href: '',
			},
		],
		products: ProductsListProps,
		switchProps: SwitchProps,
	},
};
