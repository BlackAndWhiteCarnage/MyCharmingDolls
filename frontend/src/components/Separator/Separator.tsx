/**
 * External dependencies
 */
import { FC } from 'react';
import classnames from 'classnames/bind';

/**
 * Internal dependencies
 */
import classes from './Separator.module.scss';

type SeparatorProps = {
	bottom?: number;
	className?: string;
	margin?: number;
	mobileBottom?: number;
	mobileTop?: number;
	top?: number;
};

const cx = classnames.bind(classes);

const Separator: FC<SeparatorProps> = ({
	bottom,
	className,
	margin = 20,
	mobileBottom,
	mobileTop,
	top,
}) => {
	top = top === undefined ? margin : top;
	bottom = bottom === undefined ? margin : bottom;
	mobileTop = mobileTop === undefined ? top : mobileTop;
	mobileBottom = mobileBottom === undefined ? top : mobileBottom;

	return (
		<div
			style={{
				'--margin-top': `${top}px`,
				'--margin-bottom': `${bottom}px`,
				'--margin-mobile-top': `${mobileTop}px`,
				'--margin-mobile-bottom': `${mobileBottom}px`,
			}}
			className={cx('separator', className)}
		/>
	);
};

export default Separator;
