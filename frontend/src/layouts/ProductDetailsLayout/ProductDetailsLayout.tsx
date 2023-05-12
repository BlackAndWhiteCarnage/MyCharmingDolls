/**
 * External dependencies
 */
import { FC, useEffect } from 'react';
import { useRouter } from 'next/router';

/**
 * Internal dependencies
 */
import {
	Accordion,
	Button,
	ContactForm,
	Description,
	Header,
	Info,
	PolaroidImage,
	Slider,
} from '@/components';
import { changeTheme } from '@/utils';
import { useGetDollBySlugQuery } from '@/generated/graphql';
import PriceBox from '@/components/PriceBox/PriceBox';
import classes from './ProductDetailsLayout.module.scss';

type ProductDetailsLayoutProps = {
	slug: string;
};

const ProductDetailsLayout: FC<ProductDetailsLayoutProps> = ({ slug }) => {
	const { data, loading, error } = useGetDollBySlugQuery({
		variables: {
			slug,
		},
	});

	const { back, push } = useRouter();

	const dollAttributes = data?.dolls?.data[0].attributes;

	useEffect(() => changeTheme(dollAttributes?.color), [dollAttributes]);

	if (!data || loading || !dollAttributes) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error!</div>;
	}

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
			<Slider className={classes.slider}>
				{images.data.map(({ attributes }, index) => (
					<PolaroidImage
						key={index}
						image={{
							src: attributes.url,
							alt: `Doll named ${name}`,
						}}
					/>
				))}
			</Slider>
			<div className={classes.inner}>
				<div className={classes.content}>
					<Header title={`Hi im *${name}*`} />
					<Description
						text={description}
						className={classes.description}
					/>
					<Accordion
						className={classes.accordions}
						items={[
							{
								label: 'The work done includes',
								children: <Description text={workDone} />,
								open: true,
							},
							{
								label: 'The doll is sold with',
								children: <Description text={includedItems} />,
							},
							{
								label: 'Other informations',
								children: 'assa',
							},
						]}
					/>
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

								push(`/dolls/all`);
							} else {
								back();
							}
						}}
					>
						Browse other dolls
					</Button>
				</div>
			</div>
			<div className={classes.contactForm}>
				<Header title="Any questions?" level={2} />
				<ContactForm />
			</div>
		</div>
	);
};

export default ProductDetailsLayout;
