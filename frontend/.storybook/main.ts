/**
 * External dependencies
 */
import type { StorybookConfig } from '@storybook/core-webpack';

const config: StorybookConfig = {
	stories: [
		'../src/**/*.stories.mdx',
		'../src/**/*.stories.@(js|jsx|ts|tsx)',
	],
	addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
		'storybook-addon-swc',
    ],
	framework: '@storybook/nextjs',
	core: {
		builder: '@storybook/builder-webpack5',
	},
	docs: {
		autodocs: true,
	},
};

export default config;
