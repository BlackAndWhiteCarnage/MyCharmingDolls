'use client';

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
import { ImageData } from '@/types';
import { Link } from '@/elements';
import classes from './ProductsList.module.scss';

export type ProductsListProps = {
	products: Array<{
		image: ImageData;
		isActive?: boolean | null;
		href: string;
	}>;
};

const cx = classnames.bind(classes);

const ProductsList: FC<ProductsListProps> = ({ products }) => (
	<div className={classes.wrapper}>
		<Scrollbars>
			<ul className={classes.products}>
				{products.map(
					({ image: { src, alt }, isActive, href }, index) => (
						<li
							key={`${href}-${index}`}
							className={cx('product', {
								isActive,
							})}
						>
							<Link href={href}>
								<div className={classes.image}>
									<Image
										src={src}
										alt={alt}
										fill
										placeholder="blur"
										blurDataURL={src}
									/>
								</div>
							</Link>
						</li>
					)
				)}
			</ul>
		</Scrollbars>
	</div>
);

export default ProductsList;
