/**
 * External dependencies
 */
import { FC, PropsWithChildren } from 'react';
import classnames from 'classnames/bind';

/**
 * Internal dependencies
 */
import { DefaultProps as ProductsProps } from '@/elements/ProductsList/ProductsList.stories';
import { DefaultProps as SwithcProps } from '@/elements/Switch/Switch.stories';
import { Navigation } from '@/fragments';
import { paths } from '@/config';
import classes from './WithNavigationLayout.module.scss';

type WithNavigationLayoutProps = PropsWithChildren<{
	isFullScreen?: boolean;
}>;

const cx = classnames.bind(classes);

const WithNavigationLayout: FC<WithNavigationLayoutProps> = ({
	children,
	isFullScreen = false,
}) => (
	<div
		className={cx('wrapper', {
			isFullScreen,
		})}
	>
		{/* <div className={classes.navigation}>
			<Navigation
				showProductsList
				links={paths}
				products={ProductsProps}
				switchProps={SwithcProps}
			/>
		</div> */}
		{children}
	</div>
);

export default WithNavigationLayout;
