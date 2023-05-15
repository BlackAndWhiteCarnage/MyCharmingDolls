/**
 * External dependencies
 */
import { FC, useEffect } from 'react';

/**
 * Internal dependencies
 */
import {
	AtroposWrapper,
	Button,
	ContactForm,
	Description,
	Header,
	LinkedIcon,
	Loader,
	PolaroidImage,
	Separator,
} from '@/components';
import { changeTheme } from '@/utils';
import { ReactComponent as EtsyIcon } from '@/images/icons/etsy.svg';
import { ReactComponent as InstagramIcon } from '@/images/icons/instagram.svg';
import { ReactComponent as MessengerIcon } from '@/images/icons/messenger.svg';
import { useAboutMeQuery } from '@/generated/graphql';
import classes from './AboutMeLayout.module.scss';
import MyImage from '@/images/me.jpg';
import { socialMedia } from '@/config';

const AboutMeLayout: FC = () => {
	useEffect(() => {
		changeTheme();
	}, []);

	const { data, loading, error } = useAboutMeQuery();

	if (loading) {
		return <Loader />;
	}

	if (error) {
		return <div>Error!</div>;
	}

	return (
		<div className={classes.wrapper}>
			<article className={classes.about}>
				<AtroposWrapper
					className={classes.atropos}
					rotateYMax={3}
					rotateXMax={3}
				>
					<div className={classes.hero}>
						<PolaroidImage
							image={{
								src: MyImage.src,
								alt: '',
							}}
							variant="wide"
						/>
					</div>
				</AtroposWrapper>
				<Separator
					top={0}
					bottom={60}
					mobileBottom={30}
					mobileTop={0}
				/>
				<Header title="Hi I'm *Weronika*" />
				{data && (
					<Description
						className={classes.description}
						text={data.aboutMes.data[0].attributes.description}
					/>
				)}
				<Button
					hasArrow
					hasFullWidth
					className={classes.ctaButton}
					href="/dolls/all"
				>
					See My Workarts
				</Button>
			</article>
			<Separator mobileBottom={20} mobileTop={20} />
			<div className={classes.contact}>
				<div className={classes.socialMedia}>
					<Header title="Find me *here*" level={2} />
					<div className={classes.links}>
						{socialMedia.map(({ icon, href }, index) => (
							<LinkedIcon key={index} href={href} icon={icon} />
						))}
					</div>
				</div>
				<div className={classes.contactForm}>
					<Header
						title="Or *Contact me* now!"
						level={2}
						className={classes.contactFormTitle}
					/>
					<ContactForm />
				</div>
			</div>
		</div>
	);
};

export default AboutMeLayout;
