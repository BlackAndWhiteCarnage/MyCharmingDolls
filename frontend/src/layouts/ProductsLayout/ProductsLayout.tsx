/**
 * External dependencies
 */
import { FC, useContext } from 'react';

/**
 * Internal dependencies
 */
import { DollsContext } from '@/components/DollsContextProvider/DollsContextProvider';
import { Product, Loader } from '@/components';

const ProductsLayout: FC = () => {
	const { filteredDolls, loading, error } = useContext(DollsContext);

	if (loading) {
		return <Loader />;
	}

	if (error) {
		return <div>Error!</div>;
	}

	return (
		<>
			{filteredDolls?.map((data, index) => (
				<Product data={data} key={index} />
			))}
		</>
	);
};

export default ProductsLayout;
