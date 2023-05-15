/**
 * External dependencies
 */
import { FC } from 'react';
import classnames from 'classnames/bind';

/**
 * Internal dependencies
 */
import { Link, LinkedIcon } from '@/components';
import { socialMedia } from '@/config';
import classes from './Footer.module.scss';

const cx = classnames.bind(classes);

const Footer: FC = () => (
	<div className={classes.wrapper}>
		<div className={classes.links}>
			<div className={classes.socialMedia}>
				{socialMedia.map(({ icon, href }, index) => (
					<LinkedIcon
						key={index}
						className={classes.linkedIcon}
						href={href}
						icon={icon}
					/>
				))}
			</div>
			<div className={classes.policyLinks}>
				<Link
					href="https://drive.google.com/file/d/10A7EGpxqkh2rtScLW1Wx99lstTTBLJOw/view?usp=sharing"
					target="_blank"
					className={cx('link', 'is-style-p')}
				>
					Privacy Policy
				</Link>
				<Link
					href="https://drive.google.com/file/d/10PmTsJzqsnltxw7GkZILjGKxmYODvQl4/view?usp=sharing"
					target="_blank"
					className={cx('link', 'is-style-p')}
				>
					Terms and Conditions
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
