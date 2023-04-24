/**
 * External dependencies
 */
import { FC, PropsWithChildren, useContext } from 'react';
import { useRouter } from 'next/router';
import classnames from 'classnames/bind';

/**
 * Internal dependencies
 */
import { DefaultProps as SwithcProps } from '@/elements/Switch/Switch.stories';
import { DollsContext } from '@/elements/DollsContextProvider/DollsContextProvider';
import { Navigation } from '@/fragments';
import { paths } from '@/config';
import classes from './WithNavigationLayout.module.scss';

type WithNavigationLayoutProps = PropsWithChildren<{
	showProductsList?: boolean;
	isFullScreen?: boolean;
}>;

const cx = classnames.bind(classes);

const WithNavigationLayout: FC<WithNavigationLayoutProps> = ({
	children,
	showProductsList = false,
	isFullScreen = false,
}) => {
	const { dolls, loading, error } = useContext(DollsContext);

	const { doll } = useRouter().query;

	return (
		<div
			className={cx('wrapper', {
				isFullScreen,
			})}
		>
			<div className={classes.navigation}>
				<Navigation
					showProductsList={
						!loading && dolls && dolls.length > 0 && !error
					}
					links={paths}
					products={dolls?.map(({ attributes }) => ({
						image: {
							src:
								attributes?.placeholder.data?.attributes?.url ||
								'',
							alt: '',
						},
						isActive: doll === attributes?.slug,
						href: `/dolls/${attributes?.slug}`,
					}))}
					switchProps={SwithcProps}
				/>
			</div>
			{children}
		</div>
	);
};

export default WithNavigationLayout;
