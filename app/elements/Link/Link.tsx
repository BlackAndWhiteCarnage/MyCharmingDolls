/**
 * External dependencies
 */
import { FC, ComponentProps } from 'react';
import NextLink from 'next/link';

type LinkProps = ComponentProps<typeof NextLink>;

const Link: FC<LinkProps> = ({
	as,
	children,
	href,
	legacyBehavior,
	locale,
	onClick,
	onMouseEnter,
	onTouchStart,
	passHref,
	prefetch,
	replace,
	scroll,
	shallow,
	...linkProps
}) => (
	<NextLink
		{...{
			as,
			href,
			legacyBehavior,
			locale,
			onClick,
			onMouseEnter,
			onTouchStart,
			passHref,
			prefetch,
			replace,
			scroll,
			shallow,
		}}
	>
		<a {...linkProps}>{children}</a>
	</NextLink>
);

export default Link;
