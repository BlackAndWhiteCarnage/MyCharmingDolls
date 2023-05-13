/**
 * External dependencies
 */
import { FC } from 'react';
import classnames from 'classnames/bind';

/**
 * External dependencies
 */
import { Link } from '@/components';
import { SVGIcon } from '@/types';
import classes from './LinkedIcon.module.scss';

type LinkedIconProps = {
	className?: string;
	href: string;
	icon: SVGIcon;
};

const cx = classnames.bind(classes);

const LinkedIcon: FC<LinkedIconProps> = ({ className, href, icon: Icon }) => (
	<Link href={href} target="_blank" className={cx('wrapper', className)}>
		<Icon className={classes.icon} />
	</Link>
);

export default LinkedIcon;
