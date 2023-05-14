import 'react'; // eslint-disable-line react/no-typos

interface CustomCSSProperties {
	'--scale': number;
	'--theme-color-background': string;
	'--theme-color-primary': string;
	'--theme-color-secondary': string;
	'--margin-top': string;
	'--margin-bottom': string;
	'--margin-mobile-top': string;
	'--margin-mobile-bottom': string;
}

declare module 'react' {
	export interface CSSProperties extends Partial<CustomCSSProperties> {}
}
