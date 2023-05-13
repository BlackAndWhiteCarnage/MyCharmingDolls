/**
 * External dependencies
 */
import { FC, useContext } from 'react';

/**
 * Internal dependencies
 */
import { DollsContext } from '@/components/DollsContextProvider/DollsContextProvider';
import { Product, Loader } from '@/components';
import classes from './ProductsLayout.module.scss';

const ProductsLayout: FC = () => {
	const { filteredDolls, loading, error } = useContext(DollsContext);

	if (loading) {
		return <Loader />;
	}

	if (error) {
		return <div>Error!</div>;
	}

	return (
		<div className={classes.wrapper}>
			{filteredDolls?.map((data, index) => (
				<Product data={data} key={index} />
			))}
		</div>
	);
};

export default ProductsLayout;
