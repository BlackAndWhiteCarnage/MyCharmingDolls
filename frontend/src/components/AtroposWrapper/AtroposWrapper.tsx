/**
 * External dependencies
 */
import { AtroposOptions } from 'atropos';
import { FC, PropsWithChildren } from 'react';
import Atropos from 'atropos/react';
import classnames from 'classnames/bind';

/**
 * External dependencies
 */
import classes from './AtroposWrapper.module.scss';

type AtroposWrapperProps = PropsWithChildren<{
	className?: string;
}> &
	AtroposOptions;

const cx = classnames.bind(classes);

const AtroposWrapper: FC<AtroposWrapperProps> = ({
	className,
	children,
	...props
}) => (
	<Atropos
		className={cx('wrapper', className)}
		shadow={false}
		rotateTouch="scroll-y"
		{...props}
	>
		{children}
	</Atropos>
);

export default AtroposWrapper;
