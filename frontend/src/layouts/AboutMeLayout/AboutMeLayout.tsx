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
	Header,
	PolaroidImage,
	LinkedIcon,
	ContactForm,
	Description,
	Loader,
} from '@/components';
import { changeTheme } from '@/utils';
import { ReactComponent as EtsyIcon } from '@/images/icons/etsy.svg';
import { ReactComponent as InstagramIcon } from '@/images/icons/instagram.svg';
import { ReactComponent as MessengerIcon } from '@/images/icons/messenger.svg';
import { useAboutMeQuery } from '@/generated/graphql';
import classes from './AboutMeLayout.module.scss';
import MyImage from '@/images/me.jpg';

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
			<AtroposWrapper className={classes.atropos}>
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
			<article className={classes.aboutMe}>
				<Header title="Hi I'm *Weronika*" />
				<Button
					hasArrow
					hasFullWidth
					className={classes.ctaButton}
					href="/dolls/all"
				>
					See My Workarts
				</Button>
				{data && (
					<Description
						className={classes.description}
						text={data.aboutMes.data[0].attributes.description}
					/>
				)}
			</article>
			<div className={classes.socialMedia}>
				<Header title="Find me *here*" level={2} />
				<div className={classes.links}>
					<LinkedIcon href="" icon={InstagramIcon} />
					<LinkedIcon href="" icon={EtsyIcon} />
					<LinkedIcon href="" icon={MessengerIcon} />
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
	);
};

export default AboutMeLayout;
