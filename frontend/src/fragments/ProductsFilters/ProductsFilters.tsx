/**
 * External dependencies
 */
import { FC } from 'react';

/**
 * Internal dependencies
 */
import { ProductsListProps } from '@/elements/ProductsList/ProductsList';
import { ReactComponent as DropdownIcon } from '@/images/icons/dropdown.svg';
import { Switch, ProductsList, Popover } from '@/elements';
import { SwitchProps } from '@/elements/Switch/Switch';
import classes from './ProductsFilters.module.scss';

export type ProductsFiltersProps = {
	products: ProductsListProps;
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
			<Switch label="Filter:" {...switchProps} />
			<ProductsList {...products} />
		</div>
	</Popover>
);

export default ProductsFilters;