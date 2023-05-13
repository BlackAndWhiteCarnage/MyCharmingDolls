/**
 * External dependencies
 */
import { FC } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import Image from 'next/image';

/**
 * External dependencies
 */
import { ImageData } from '@/types';
import classes from './ProductsList.module.scss';

export type ProductsListProps = {
	products: Array<{
		image: ImageData;
		href: string;
	}>;
};

const ProductsList: FC<ProductsListProps> = ({ products }) => (
	<div className={classes.wrapper}>
		<Scrollbars>
			<ul className={classes.products}>
				{products.map(({ image: { src, alt }, href }, index) => (
					<li key={`${href}-${index}`} className={classes.product}>
						<a href={href}>
							<div className={classes.image}>
								<Image
									src={src}
									alt={alt}
									layout="fill"
									placeholder="blur"
									blurDataURL={src}
								/>
							</div>
						</a>
					</li>
				))}
			</ul>
		</Scrollbars>
	</div>
);

export default ProductsList;
