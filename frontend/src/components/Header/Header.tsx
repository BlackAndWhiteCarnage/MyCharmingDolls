/**
 * External dependencies
 */
import { FC } from 'react';
import classnames from 'classnames/bind';

/**
 * Internal dependencies
 */
import classes from './Header.module.scss';

type HeaderProps = {
	className?: string;
	/**
	 * Everything between "*" will have theme color
	 */
	title: string;
	level?: 1 | 2;
};

const cx = classnames.bind(classes);

const Header: FC<HeaderProps> = ({ className, level = 1, title }) => {
	const H = level === 1 ? 'h1' : 'h2';

	return (
		<H className={cx('title', className)}>
			{title.split('*').map((titleChunk, index) =>
				index % 2 === 0 ? (
					titleChunk
				) : (
					<span
						key={`${titleChunk}-${index}`}
						className={classes.hasSecondaryColor}
					>
						{titleChunk}
					</span>
				)
			)}
		</H>
	);
};

export default Header;
