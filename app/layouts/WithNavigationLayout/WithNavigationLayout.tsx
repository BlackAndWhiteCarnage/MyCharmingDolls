/**
 * External dependencies
 */
import { FC, PropsWithChildren } from 'react';

/**
 * Internal dependencies
 */
import { DefaultProps as ProductsProps } from '@/elements/ProductsList/ProductsList.stories';
import { DefaultProps as SwithcProps } from '@/elements/Switch/Switch.stories';
import { Navigation } from '@/fragments';
import { paths } from '@/config';
import classes from './WithNavigationLayout.module.scss';

const WithNavigationLayout: FC<PropsWithChildren> = ({ children }) => (
	<>
		<div className={classes.navigation}>
			<Navigation
				links={paths}
				products={ProductsProps}
				switchProps={SwithcProps}
			/>
		</div>
		<div className={classes.content}>{children}</div>
	</>
);

export default WithNavigationLayout;
