/**
 * External dependencies
 */
import { FC } from 'react';
import classnames from 'classnames/bind';

/**
 * External dependencies
 */
import { formatPrice } from '@/utils';
import classes from './PriceBox.module.scss';

type PriceBoxProps = {
	productPrice: number;
	shippingPrice?: number;
};

const cx = classnames.bind(classes);

const PriceBox: FC<PriceBoxProps> = ({ productPrice, shippingPrice }) => {
	const priceWithLabel = (label: string, price?: string) => (
		<div className={classes.inner}>
			<p className={classes.label}>{label}</p>
			<p className={classes.price}>{price}</p>
		</div>
	);

	return (
		<div className={cx('wrapper', 'is-style-p')}>
			{priceWithLabel('Price', formatPrice(productPrice))}
			{priceWithLabel(
				'Shipping',
				shippingPrice ? formatPrice(shippingPrice) : 'FREE'
			)}
		</div>
	);
};

export default PriceBox;
