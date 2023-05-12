/**
 * External dependencies
 */
import { FC } from 'react';

/**
 * External dependencies
 */
import { Link } from '@/components';
import { ReactComponent as LogoImage } from '@/images/logo.svg';
import classes from './Logo.module.scss';

type LogoProps = {
	href?: string;
};

const Logo: FC<LogoProps> = ({ href = '/' }) => (
	<Link className={classes.wrapper} href={href}>
		<LogoImage />
	</Link>
);

export default Logo;
