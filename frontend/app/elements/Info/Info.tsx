/**
 * External dependencies
 */
import { FC } from 'react';
import classnames from 'classnames/bind';

/**
 * External dependencies
 */
import { ReactComponent as InfoIcon } from '@/images/icons/info.svg';
import { SVGIcon } from '@/types';
import classes from './Info.module.scss';

type InfoProps = {
	icon?: SVGIcon;
	label: string;
};

const cx = classnames.bind(classes);

const Info: FC<InfoProps> = ({ icon: Icon = InfoIcon, label }) => (
	<p className={cx('info', 'is-style-p')}>
		<Icon className={classes.icon} />
		{label}
	</p>
);

export default Info;
