/**
 * External dependencies
 */
import { FC } from 'react';

/**
 * Internal dependencies
 */
import { Logo, Link } from '@/elements';
import { ProductsFilters } from '@/fragments';
import { ProductsFiltersProps } from '@/fragments/ProductsFilters/ProductsFilters';
import classes from './Navigation.module.scss';

type LinkProps = {
	href: string;
	label: string;
};

type NavigationProps = {
	links: Array<LinkProps>;
	showProductsList?: boolean;
} & ProductsFiltersProps;

const Navigation: FC<NavigationProps> = ({
	links,
	showProductsList,
	...props
}) => {
	const link = ({ href, label }: LinkProps) => (
		<Link href={href} className={classes.link}>
			{label}
		</Link>
	);

	return (
		<nav className={classes.wrapper}>
			<Logo />
			<ul className={classes.linksList}>
				{links.map((linkProps, index) => (
					<li key={`${linkProps.label}-${index}`}>
						{link(linkProps)}
					</li>
				))}
				{showProductsList ? (
					<ProductsFilters {...props} />
				) : (
					<li>{link({ href: '/dolls', label: 'Dolls' })}</li>
				)}
			</ul>
		</nav>
	);
};

export default Navigation;
