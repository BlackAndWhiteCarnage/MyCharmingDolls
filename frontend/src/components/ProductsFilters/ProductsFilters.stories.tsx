/**
 * External dependencies
 */
import { StoryObj, Meta } from '@storybook/react';

/**
 * Internal dependencies
 */
import { DefaultProps as ProductsListProps } from '@/components/ProductsList/ProductsList.stories';
import { DefaultProps as SwitchProps } from '@/components/Switch/Switch.stories';
import ProductsFilters from '.';

export default {
	title: 'Components/ProductsFilters',
	component: ProductsFilters,
} satisfies Meta<typeof ProductsFilters>;

export const Default: StoryObj<typeof ProductsFilters> = {
	args: {
		products: ProductsListProps,
		switchProps: SwitchProps,
	},
};
