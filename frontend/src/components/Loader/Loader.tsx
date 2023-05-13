/**
 * External dependencies
 */
import { FC } from 'react';

/**
 * External dependencies
 */
import classes from './Loader.module.scss';

const Loader: FC = () => (
	<div className={classes.wrapper}>
		<div className={classes.loader} />
	</div>
);

export default Loader;
