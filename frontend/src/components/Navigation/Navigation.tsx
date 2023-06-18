/**
 * External dependencies
 */
import { FC, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

/**
 * Internal dependencies
 */
import { DollsContext } from '@/components/DollsContextProvider/DollsContextProvider';
import { LinkData } from '@/types';
import { Logo, Link, ProductsFilters } from '@/components';
import { paths } from '@/config';
import { useUpdateUrl } from '@/hooks';
import classes from './Navigation.module.scss';

const options = {
	'not-adopted': 'Not Adopted',
	adopted: 'Adopted',
	all: 'All',
};

const Navigation: FC = () => {
	const updateUrl = useUpdateUrl();

	const { dolls, filteredDolls, setFilteredDolls } = useContext(DollsContext);

	const { filter } = useRouter().query;

	const link = ({ href, label }: LinkData) => (
		<Link href={href} className={classes.link}>
			{label}
		</Link>
	);

	useEffect(() => {
		setFilteredDolls(
			dolls?.filter(({ attributes }) => {
				const { isSold } = attributes || {};

				return (
					(filter === 'adopted' && isSold) ||
					(filter === 'not-adopted' && !isSold) ||
					filter === 'all'
				);
			})
		);
	}, [dolls, filter, setFilteredDolls]);

	return (
		<div className={classes.wrapper}>
			<Logo />
			<ul className={classes.linksList}>
				{paths.map((linkProps, index) => (
					<li key={index}>{link(linkProps)}</li>
				))}
				{filteredDolls?.length ? (
					<li>
						<ProductsFilters
							products={filteredDolls?.map(({ attributes }) => ({
								image: {
									src:
										attributes?.placeholder.data?.attributes
											?.url || '',
									alt: '',
								},
								href: `#${attributes?.slug}`,
							}))}
							switchProps={{
								onChange: (value) =>
									updateUrl('push', `/dolls/${value}`),
								activeOption:
									typeof filter === 'string' ? filter : 'all',
								options,
							}}
						/>
					</li>
				) : (
					<li>
						{link({ href: '/dolls/not-adopted', label: 'Dolls' })}
					</li>
				)}
			</ul>
		</div>
	);
};

export default Navigation;
