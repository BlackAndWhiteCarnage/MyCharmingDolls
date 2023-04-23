/**
 * External dependencies
 */
import { FC, PropsWithChildren } from 'react';
import classnames from 'classnames/bind';
import { useRouter } from 'next/router';

/**
 * Internal dependencies
 */
import { DefaultProps as SwithcProps } from '@/elements/Switch/Switch.stories';
import { Navigation } from '@/fragments';
import { paths } from '@/config';
import { useDolls } from '@/hooks';
import classes from './WithNavigationLayout.module.scss';

type WithNavigationLayoutProps = PropsWithChildren<{
	isFullScreen?: boolean;
}>;

const cx = classnames.bind(classes);

const WithNavigationLayout: FC<WithNavigationLayoutProps> = ({
	children,
	isFullScreen = false,
}) => {
	const { dolls, loading, error } = useDolls();
	const { doll: currentUrl } = useRouter().query;

	return (
		<div
			className={cx('wrapper', {
				isFullScreen,
			})}
		>
			<div className={classes.navigation}>
				{!loading && dolls && dolls.length > 0 && !error ? (
					<Navigation
						showProductsList
						links={paths}
						products={dolls?.map(({ attributes }) => ({
							image: {
								src:
									attributes?.images.data[0].attributes
										?.url || '',
								alt: '',
							},
							isActive: currentUrl === attributes?.slug,
							href: `/dolls/${attributes?.slug}`,
						}))}
						switchProps={SwithcProps}
					/>
				) : null}
			</div>
			{children}
		</div>
	);
};

export default WithNavigationLayout;
