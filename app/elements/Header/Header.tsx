/**
 * External dependencies
 */
import { FC } from 'react';

/**
 * Internal dependencies
 */
import classes from './Header.module.scss';

type HeaderProps = {
	/**
	 * Everything between "*" will have theme color
	 */
	title: string;
	level?: 1 | 2;
};

/**
 * Header component
 */
const Header: FC<HeaderProps> = ({ level = 1, title }) => {
	const H = level === 1 ? 'h1' : 'h2';

	return (
		<H className={classes.title}>
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
