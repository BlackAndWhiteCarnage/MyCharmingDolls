/**
 * External dependencies
 */
import { FC } from 'react';
import Atropos from 'atropos/react';

/**
 * Internal dependencies
 */
import MyImage from '@/images/me.jpg';
import classes from './NarrowLayout.module.scss';
import { Button, Header, PolaroidImage, LinkedIcon } from '@/elements';
import { ReactComponent as InstagramIcon } from '@/images/icons/instagram.svg';
import { ReactComponent as EtsyIcon } from '@/images/icons/etsy.svg';
import { ReactComponent as MessengerIcon } from '@/images/icons/messenger.svg';

const NarrowLayout: FC = () => (
	<div className={classes.wrapper}>
		<Atropos shadow={false} className={classes.atropos}>
			<div className={classes.hero}>
				<PolaroidImage
					image={{
						src: MyImage.src,
						alt: '',
					}}
					variant="wide"
				/>
			</div>
		</Atropos>
		<article className={classes.aboutMe}>
			<Header title="Hi I'm *Weronika*" />
			<Button
				hasArrow
				hasFullWidth
				className={classes.ctaButton}
				href="/dolls"
			>
				See My Workarts
			</Button>
			<div className={classes.text}>
				<p className={classes.textBlock}>
					your worst nightmare, said the dark and creepy doll, as she
					sat in the dusty corner of the antique shop.
				</p>
				<p className={classes.textBlock}>
					Nora had been sitting there for years, waiting for someone
					to take her home. She had a long and tragic history - she
					was crafted by a reclusive toy maker who poured all of his
					love and madness into creating the perfect doll. But the toy
					maker died suddenly, leaving Nora alone in the dusty old
					house.
				</p>
				<p className={classes.textBlock}>
					Nora had been passed from one owner to another, but nobody
					seemed to want her. They were all afraid of her eerie
					personality and gothic attire. Nora longed for a new owner
					who would appreciate her unique beauty and embrace her dark
					side.
				</p>
				<p className={classes.textBlock}>
					But as the years passed, Nora began to lose hope. She
					watched as other toys were sold and taken to new homes,
					while she remained in the corner - forgotten and alone.
				</p>
				<p className={classes.textBlock}>
					And yet, Nora refused to give up. She knew that somewhere
					out there, there was someone who would see past her eerie
					appearance and love her for who she was.
				</p>
				<p className={classes.textBlock}>
					And now she's searching for a new owner - someone who will
					give her a new home and a new purpose. Someone who will love
					her and cherish her, no matter how dark and creepy she may
					seem. And she knows that one day, that person will come
					along and take her home.
				</p>
			</div>
		</article>
		<div className={classes.socialMedia}>
			<Header title="Find me *here*" level={2} />
			<div className={classes.links}>
				<LinkedIcon href="" icon={InstagramIcon} />
				<LinkedIcon href="" icon={EtsyIcon} />
				<LinkedIcon href="" icon={MessengerIcon} />
			</div>
		</div>
	</div>
);

export default NarrowLayout;
