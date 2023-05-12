/**
 * External dependencies
 */
import { useEffect } from 'react';
import { useRouter } from 'next/router';

/**
 * Internal dependencies
 */
import classes from './ProductDetailsLayout.module.scss';
import {
	Slider,
	Header,
	Button,
	Info,
	Description,
	Accordion,
	PolaroidImage,
} from '@/components';
import PriceBox from '@/components/PriceBox/PriceBox';
import { useGetDollBySlugQuery } from '@/generated/graphql';
import { changeTheme } from '@/utils';

const ProductDetailsLayout = ({ slug }: { slug: string }) => {
	const { data, loading, error } = useGetDollBySlugQuery({
		variables: {
			slug,
		},
	});

	const { back, push } = useRouter();

	const dollAttributes = data?.dolls?.data[0].attributes;

	useEffect(() => changeTheme(dollAttributes?.color), [dollAttributes]);

	if (!data || loading || !dollAttributes) return <div>Loading...</div>;

	if (error) return <div>Error!</div>;

	const {
		name,
		description,
		isSold,
		price,
		workDone,
		includedItems,
		images,
	} = dollAttributes;

	return (
		<div className={classes.wrapper}>
			<div className={classes.slider}>
				<Slider>
					{images.data.map(({ attributes }, index) => (
						<PolaroidImage
							key={index}
							image={{ src: attributes?.url || '', alt: '' }}
						/>
					))}
				</Slider>
			</div>
			<div className={classes.inner}>
				<div className={classes.content}>
					<Header title={`Hi im *${name}*`} />
					<div className={classes.text}>
						<Description text={description} />
					</div>
					<div className={classes.accordions}>
						<Accordion
							items={[
								{
									label: 'The work done includes',
									children: <Description text={workDone} />,
									open: true,
								},
								{
									label: 'The doll is sold with',
									children: (
										<Description text={includedItems} />
									),
								},
								{
									label: 'Other informations',
									children: 'assa',
								},
							]}
						/>
					</div>
				</div>
				<div className={classes.sticky}>
					<PriceBox productPrice={price} />
					{!isSold ? (
						<Button>Adopt now!</Button>
					) : (
						<Info
							label={`${name} is already adopted or reserved!`}
						/>
					)}
					<Button
						variant="secondary"
						onClick={() => {
							if (!sessionStorage.getItem('alreadyVisited')) {
								sessionStorage.setItem(
									'alreadyVisited',
									'visited'
								);
								push(`/dolls/all/${slug}`);
							} else {
								back();
							}
						}}
					>
						Browse other dolls
					</Button>
				</div>
			</div>
		</div>
	);
};

export default ProductDetailsLayout;
