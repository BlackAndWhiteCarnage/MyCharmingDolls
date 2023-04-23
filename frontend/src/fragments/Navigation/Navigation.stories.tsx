/**
 * External dependencies
 */
import { StoryObj, Meta } from '@storybook/react';

/**
 * Internal dependencies
 */
import Navigation from './Navigation';
import { DefaultProps as ProductsListProps } from '@/elements/ProductsList/ProductsList.stories';
import { DefaultProps as SwitchProps } from '@/elements/Switch/Switch.stories';

export default {
	title: 'Fragments/Navigation',
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
