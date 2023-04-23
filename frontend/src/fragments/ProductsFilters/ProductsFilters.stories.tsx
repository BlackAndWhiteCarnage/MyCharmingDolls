/**
 * External dependencies
 */
import { StoryObj } from '@storybook/react';

/**
 * Internal dependencies
 */
import { DefaultProps as ProductsListProps } from '@/elements/ProductsList/ProductsList.stories';
import { DefaultProps as SwitchProps } from '@/elements/Switch/Switch.stories';
import ProductsFilters from '.';

export default {
	title: 'Fragments/ProductsFilters',
	component: ProductsFilters,
};

export const Default: StoryObj<typeof ProductsFilters> = {
	args: {
		products: ProductsListProps,
		switchProps: SwitchProps,
	},
};
