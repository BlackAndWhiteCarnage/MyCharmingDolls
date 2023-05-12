/**
 * External dependencies
 */
import { FC, useContext, useRef } from 'react';
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
import { DollsContext } from '@/components/DollsContextProvider/DollsContextProvider';
import classes from './ProductsLayout.module.scss';

const cx = classnames.bind(classes);

const ProductsLayout: FC = () => {
	const { filteredDolls, loading, error } = useContext(DollsContext);

	if (loading) return <div>Loading...</div>;

	if (error) return <div>Error!</div>;

	return (
		<div className={classes.swiper}>
			{filteredDolls?.map((data, index) => (
				<Product data={data} key={index} />
			))}
		</div>
	);
};

const Product = ({ data }: any) => {
	const ref = useRef<HTMLDivElement>(null);
	const [element, view] = useInView({ threshold: 0.35 });

	const {
		name,
		description,
		images,
		slug: dollSlug,
		isSold,
		color,
	} = data.attributes;

	const { data: imagesData } = images;

	return (
		<Theme secondary={color}>
			<div className={classes.container} id={dollSlug} ref={element}>
				<div
					className={cx('wrapper', {
						isInView: view,
					})}
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
							images={imagesData
								.filter(({ attributes }) => attributes?.url)
								.slice(0, 3)
								.map(({ attributes }) => ({
									src: attributes?.url || '',
									alt: '',
								}))}
							animate={view}
						/>
					</div>
				</div>
			</div>
		</Theme>
	);
};

export default ProductsLayout;
