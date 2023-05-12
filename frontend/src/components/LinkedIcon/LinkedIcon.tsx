/**
 * External dependencies
 */
import { FC } from 'react';

/**
 * External dependencies
 */
import { Link } from '@/components';
import { SVGIcon } from '@/types';
import classes from './LinkedIcon.module.scss';

type LinkedIconProps = {
	href: string;
	icon: SVGIcon;
};

const LinkedIcon: FC<LinkedIconProps> = ({ href, icon: Icon }) => (
	<Link href={href} target="_blank" className={classes.wrapper}>
		<Icon className={classes.icon} />
	</Link>
);

export default LinkedIcon;
