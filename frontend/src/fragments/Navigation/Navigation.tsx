/**
 * External dependencies
 */
import { FC, useContext } from 'react';
import { useRouter } from 'next/router';

/**
 * Internal dependencies
 */
import { DollsContext } from '@/elements/DollsContextProvider/DollsContextProvider';
import { LinkData } from '@/types';
import { Logo, Link } from '@/elements';
import { paths } from '@/config';
import { ProductsFilters } from '@/fragments';
import { useUpdateUrl } from '@/hooks';
import classes from './Navigation.module.scss';

const options = {
	all: 'All',
	adopted: 'Adopted',
	'not-adopted': 'Not Adopted',
};

const Navigation: FC = () => {
	const router = useRouter();
	const { query } = router;

	const updateUrl = useUpdateUrl();

	const { filteredDolls } = useContext(DollsContext);

	const { doll, filter } = useRouter().query;

	const link = ({ href, label }: LinkData) => (
		<Link href={href} className={classes.link}>
			{label}
		</Link>
	);

	return (
		<div className={classes.wrapper}>
			<Logo />
			<ul className={classes.linksList}>
				{paths.map((linkProps, index) => (
					<li key={`${linkProps.label}-${index}`}>
						{link(linkProps)}
					</li>
				))}
				{filter !== undefined && filteredDolls?.length ? (
					<ProductsFilters
						products={filteredDolls?.map(({ attributes }) => ({
							image: {
								src:
									attributes?.placeholder.data?.attributes
										?.url || '',
								alt: '',
							},
							isActive: doll === attributes?.slug,
							href: `/dolls/${query.filter}/${attributes?.slug}`,
						}))}
						switchProps={{
							onChange: (value) => {
								updateUrl('push', `/dolls/${value}`);
							},
							activeOption:
								typeof filter === 'string' ? filter : 'all',
							options,
						}}
					/>
				) : (
					<li>{link({ href: '/dolls', label: 'Dolls' })}</li>
				)}
			</ul>
		</div>
	);
};

export default Navigation;
