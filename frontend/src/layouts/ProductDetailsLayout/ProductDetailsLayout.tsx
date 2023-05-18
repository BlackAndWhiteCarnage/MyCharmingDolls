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
	Loader,
	PolaroidImage,
	Separator,
	Slider,
} from '@/components';
import {
	useGetDollBySlugQuery,
	useOtherInformationQuery,
} from '@/generated/graphql';
import { changeTheme, createCheckoutSession } from '@/utils';
import { Doll } from '@/generated/graphql';
import classes from './ProductDetailsLayout.module.scss';
import PriceBox from '@/components/PriceBox/PriceBox';

type ProductDetailsLayoutProps = {
	slug: string;
};

const ProductDetailsLayout: FC<ProductDetailsLayoutProps> = ({ slug }) => {
	const { data: otherInformationsData } = useOtherInformationQuery();
	const { data, loading, error } = useGetDollBySlugQuery({
		variables: {
			slug,
		},
	});

	const { back, push } = useRouter();

	const dollAttributes = data?.dolls?.data[0].attributes;

	useEffect(() => changeTheme(dollAttributes?.color), [dollAttributes]);

	if (!data || loading || !dollAttributes) {
		return <Loader />;
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
		<>
			<Slider className={classes.slider} loop>
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
					<Separator
						top={60}
						bottom={60}
						mobileBottom={20}
						mobileTop={20}
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
								children: (
									<>
										{otherInformationsData && (
											<Description
												text={
													otherInformationsData
														?.otherInformations
														.data[0].attributes
														.description
												}
											/>
										)}
									</>
								),
							},
						]}
					/>
				</div>
				<Separator bottom={20} top={20} mobileBottom={40} />
				<div className={classes.sticky}>
					<PriceBox productPrice={price} />
					{!isSold ? (
						<Button
							onClick={() =>
								createCheckoutSession(
									data.dolls.data[0].attributes as Doll
								)
							}
						>
							Adopt now!
						</Button>
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
				<Separator
					top={20}
					bottom={40}
					mobileBottom={20}
					mobileTop={20}
				/>
				<Header
					title="Any questions?"
					level={2}
					className={classes.contactTitle}
				/>
				<ContactForm />
			</div>
		</>
	);
};

export default ProductDetailsLayout;
