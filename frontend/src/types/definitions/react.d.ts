import 'react'; // eslint-disable-line react/no-typos

interface CustomCSSProperties {
	'--scale': number;
	'--theme-color-background': string;
	'--theme-color-primary': string;
	'--theme-color-secondary': string;
}

declare module 'react' {
	export interface CSSProperties extends Partial<CustomCSSProperties> {}
}
