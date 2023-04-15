/**
 * External dependencies
 */
import { FC } from 'react';

/**
 * External dependencies
 */
import { Link } from '@/elements';
import { ReactComponent as LogoImage } from '@/images/logo.svg';
import classes from './Logo.module.scss';

const Logo: FC = () => (
	<Link className={classes.wrapper} href="/">
		<LogoImage className={classes.logo} />
	</Link>
);

export default Logo;
