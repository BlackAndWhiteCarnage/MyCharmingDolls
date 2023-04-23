/**
 * External dependencies
 */
import { FC, PropsWithChildren } from 'react';

export type ThemeProps = PropsWithChildren<{
	background?: string;
	primary?: string;
	secondary?: string;
}>;

/**
 * Theme component
 */
const Theme: FC<ThemeProps> = ({
	background = 'inherit',
	children,
	primary = 'inherit',
	secondary = 'inherit',
}) => (
	<div
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
