/**
 * External dependencies
 */
import { FC } from 'react';
import classnames from 'classnames/bind';

/**
 * External dependencies
 */
import { ReactComponent as EtsyIcon } from '@/images/icons/etsy.svg';
import { ReactComponent as InstagramIcon } from '@/images/icons/instagram.svg';
import { ReactComponent as MessengerIcon } from '@/images/icons/messenger.svg';
import { Link, LinkedIcon } from '@/components';
import classes from './Footer.module.scss';

const cx = classnames.bind(classes);

const Footer: FC = () => (
	<div className={classes.wrapper}>
		<div className={classes.links}>
			<div className={classes.socialMedia}>
				<LinkedIcon
					className={classes.linkedIcon}
					href=""
					icon={InstagramIcon}
				/>
				<LinkedIcon
					className={classes.linkedIcon}
					href=""
					icon={EtsyIcon}
				/>
				<LinkedIcon
					className={classes.linkedIcon}
					href=""
					icon={MessengerIcon}
				/>
			</div>
			<div className={classes.policyLinks}>
				<Link href="/" className={cx('link', 'is-style-p')}>
					Privacy Policy
				</Link>
				<Link href="/" className={cx('link', 'is-style-p')}>
					Refund Policy
				</Link>
			</div>
		</div>
		<div className={classes.firmInfo}>
			<p className={cx('text', 'is-style-p')}>Weronika Repsch EUPHORIA</p>
			<p className={cx('text', 'is-style-p')}>
				Józefa Sowińskiego 28, 05-402 Otwock
			</p>
		</div>
	</div>
);

export default Footer;
