/**
 * External dependencies
 */
import { FC } from 'react';

/**
 * Internal dependencies
 */
import { ProductsListProps } from '@/components/ProductsList/ProductsList';
import { ReactComponent as DropdownIcon } from '@/images/icons/dropdown.svg';
import { Switch, ProductsList, Popover } from '@/components';
import { SwitchProps } from '@/components/Switch/Switch';
import classes from './ProductsFilters.module.scss';

export type ProductsFiltersProps = {
	products: ProductsListProps['products'];
	switchProps: Omit<SwitchProps<Record<string, string>>, 'label'>;
};

const ProductsFilters: FC<ProductsFiltersProps> = ({
	products,
	switchProps,
}) => (
	<Popover
		button={
			<button data-target="popup-element" className={classes.button}>
				Dolls
				<DropdownIcon className={classes.icon} />
			</button>
		}
	>
		<div className={classes.filters}>
			<Switch label="Show:" {...switchProps} />
			<ProductsList products={products} />
		</div>
	</Popover>
);

export default ProductsFilters;
