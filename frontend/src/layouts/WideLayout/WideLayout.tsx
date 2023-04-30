/**
 * External dependencies
 */
import { useEffect } from 'react';
import { useRouter } from 'next/router';

/**
 * Internal dependencies
 */
import classes from './WideLayout.module.scss';
import {
	Slider,
	Header,
	List,
	Button,
	Info,
	SneakPeek,
	Accordion,
	PolaroidImage,
} from '@/elements';
import PriceBox from '@/elements/PriceBox/PriceBox';
import { useGetDollBySlugQuery } from '@/generated/graphql';
import { changeTheme } from '@/utils';

const WideLayout = ({ slug }: { slug: string }) => {
	const { data, loading, error } = useGetDollBySlugQuery({
		variables: {
			slug,
		},
	});

	const { back, push } = useRouter();

	const dollAttributes = data?.dolls?.data[0].attributes;

	useEffect(() => {
		if (dollAttributes) {
			const { primaryColor, secondaryColor, backgroundColor } =
				dollAttributes;

			changeTheme(primaryColor, secondaryColor, backgroundColor);
		}
	}, [dollAttributes]);

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
						<SneakPeek text={description} />
					</div>
					<div className={classes.accordions}>
						<Accordion
							items={[
								{
									label: 'The work done includes',
									children: <List text={workDone} />,
									open: true,
								},
								{
									label: 'The doll is sold with',
									children: <List text={includedItems} />,
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

export default WideLayout;
