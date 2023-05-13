/**
 * External dependencies
 */
import { FC } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import classnames from 'classnames/bind';
import Image from 'next/image';

/**
 * External dependencies
 */
import { Theme } from '@/components';
import { ImageData } from '@/types';
import classes from './ProductsList.module.scss';

export type ProductsListProps = {
	products: Array<{
		color: string;
		href: string;
		image: ImageData;
		isActive?: boolean | null;
	}>;
};

const cx = classnames.bind(classes);

const ProductsList: FC<ProductsListProps> = ({ products }) => (
	<div className={classes.wrapper}>
		<Scrollbars>
			<ul className={classes.products}>
				{products.map(({ image: { src, alt }, href, color }, index) => (
					<li key={index}>
						<Theme primary={color} className={classes.product}>
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
						</Theme>
					</li>
				))}
			</ul>
		</Scrollbars>
	</div>
);

export default ProductsList;
