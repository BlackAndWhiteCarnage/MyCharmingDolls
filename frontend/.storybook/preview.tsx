/**
 * External dependencies
 */
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { Parameters, DecoratorFunction } from '@storybook/types';
import React, { FC } from 'react';

/**
 * Internal dependencies
 */
import '../src/scss/storybook.scss';
import viewports from './viewports';

export const parameters: Parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	viewport: {
		viewports: {
			...viewports,
			...INITIAL_VIEWPORTS,
		},
	},
};

export const decorators: Array<DecoratorFunction> = [
	(story, { parameters: { layout } }) => {
		const Story = story as FC;

		return layout === 'fullscreen' ? (
			<Story />
		) : (
			<div className="container">
				<Story />
			</div>
		);
	},
];
