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
			'--theme-color-text-primary': primary,
			'--theme-color-text-secondary': secondary,
		}}
	>
		{children}
	</div>
);

export default Theme;
