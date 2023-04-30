/**
 * External dependencies
 */
import { FC, PropsWithChildren } from 'react';
import classnames from 'classnames/bind';

/**
 * Internal dependencies
 */

import { Navigation } from '@/fragments';
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
		<div className={classes.navigation}>
			<Navigation />
		</div>
		{children}
	</div>
);

export default WithNavigationLayout;
