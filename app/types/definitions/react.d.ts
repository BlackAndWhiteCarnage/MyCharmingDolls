import 'react'; // eslint-disable-line react/no-typos

interface CustomCSSProperties {}

declare module 'react' {
	export interface CSSProperties extends Partial<CustomCSSProperties> {
		'--theme-color-background': string;
		'--theme-color-primary': string;
		'--theme-color-secondary': string;
	}
}
