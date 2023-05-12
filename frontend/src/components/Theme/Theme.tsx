/**
 * External dependencies
 */
import { FC, HTMLAttributes, PropsWithChildren } from 'react';

export type ThemeProps = PropsWithChildren<{
	background?: string;
	className?: string;
	primary?: string;
	secondary?: string;
}> &
	HTMLAttributes<HTMLDivElement>;

const Theme: FC<ThemeProps> = ({
	background = 'inherit',
	children,
	primary = 'inherit',
	secondary = 'inherit',
	...props
}) => (
	<div
		{...props}
		style={{
			'--theme-color-background': background,
			'--theme-color-primary': primary,
			'--theme-color-secondary': secondary,
		}}
	>
		{children}
	</div>
);

export default Theme;
