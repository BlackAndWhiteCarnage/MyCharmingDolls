/**
 * External dependencies
 */
import { FC, PropsWithChildren } from 'react';

/**
 * Internal dependencies
 */

import { Navigation } from '@/components';
import classes from './WithNavigationLayout.module.scss';

type WithNavigationLayoutProps = PropsWithChildren<{
	isFullScreen?: boolean;
}>;

const WithNavigationLayout: FC<WithNavigationLayoutProps> = ({ children }) => (
	<div className={classes.wrapper}>
		<div className={classes.navigation}>
			<div className={classes.inner}>
				<Navigation />
			</div>
		</div>
		{children}
	</div>
);

export default WithNavigationLayout;
