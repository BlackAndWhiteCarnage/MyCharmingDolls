/**
 * External dependencies
 */
import { FC, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import classnames from 'classnames/bind';

/**
 * Internal dependencies
 */
import {
	Button,
	Header,
	ImagesPack,
	Description,
	Info,
	Theme,
} from '@/components';
import { createCheckoutSession, changeTheme } from '@/utils';
import { DollEntity } from '@/generated/graphql';
import classes from './Product.module.scss';

type ProductProps = {
	data: DollEntity;
};

const cx = classnames.bind(classes);

const Product: FC<ProductProps> = ({ data }) => {
	const [element, view] = useInView({ threshold: 0.1 });

	const ref = useRef<HTMLDivElement>(null);

	const {
		name,
		description,
		images,
		slug: dollSlug,
		isSold,
		color,
	} = data.attributes;

	useEffect(() => {
		view && changeTheme(color);
	}, [view, color]);

	return (
		<Theme secondary={color} id={dollSlug}>
			<div
				className={cx('inner', {
					isInView: view,
				})}
				ref={element}
			>
				<div className={classes.content}>
					<Header title={`Hi I'm *${name}*`} />
					<Description text={description} limit />
					<div className={classes.buttons}>
						<Button
							hasArrow
							className={classes.button}
							href={`/doll/${dollSlug}`}
						>
							Read more & meet {name}
						</Button>
						{!isSold ? (
							<Button
								variant="secondary"
								className={classes.button}
								onClick={() =>
									createCheckoutSession(data.attributes)
								}
							>
								Adopt her now!
							</Button>
						) : (
							<Info
								label={`${name} is already adopted or reserved!`}
							/>
						)}
					</div>
				</div>
				<div className={classes.images} ref={ref}>
					<ImagesPack
						parentRef={ref}
						images={images.data
							.filter(({ attributes }) => attributes.url)
							.slice(0, 3)
							.map(({ attributes }) => ({
								src: attributes.url,
								alt: '',
							}))}
						animate={view}
					/>
				</div>
			</div>
		</Theme>
	);
};

export default Product;
