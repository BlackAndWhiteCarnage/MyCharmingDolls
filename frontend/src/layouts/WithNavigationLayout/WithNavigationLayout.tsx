/**
 * External dependencies
 */
import { FC, PropsWithChildren } from 'react';

/**
 * Internal dependencies
 */
import { Navigation, Footer } from '@/components';
import classes from './WithNavigationLayout.module.scss';

const WithNavigationLayout: FC<PropsWithChildren> = ({ children }) => (
	<>
		<div className={classes.background} />
		<div className={classes.navigation} style={{ maxWidth: 1600 }}>
			<div className={classes.inner}>
				<Navigation />
			</div>
		</div>
		<div className={classes.wrapper} style={{ maxWidth: 1600 }}>
			{children}
			<Footer />
		</div>
	</>
);

export default WithNavigationLayout;
