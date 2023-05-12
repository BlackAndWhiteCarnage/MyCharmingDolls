/**
 * External dependencies
 */
import { FC, PropsWithChildren } from 'react';

export type ThemeProps = PropsWithChildren<{
	background?: string;
	className?: string;
	primary?: string;
	secondary?: string;
}>;

const Theme: FC<ThemeProps> = ({
	background = 'inherit',
	children,
	className,
	primary = 'inherit',
	secondary = 'inherit',
}) => (
	<div
		className={className}
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
