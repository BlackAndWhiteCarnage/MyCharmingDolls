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

	const fotmatedTitle = title.split('*').map((titleChunk, index) =>
		index % 2 === 0 ? (
			titleChunk
		) : (
			<span
				key={`${titleChunk}-${index}`}
				className={classes.hasThemeColor}
			>
				{titleChunk}
			</span>
		)
	);

	return <H>{fotmatedTitle}</H>;
};

export default Header;
