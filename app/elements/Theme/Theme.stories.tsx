/**
 * External dependencies
 */
import { StoryObj, Meta } from '@storybook/react';

/**
 * Internal dependencies
 */
import { ThemeProps } from './Theme';
import classes from './Story.module.scss';
import Theme from '.';

export default {
	title: 'Components/Theme',
	component: Theme,
} satisfies Meta<typeof Theme>;

const render = (args: ThemeProps) => (
	<Theme {...args}>
		<div className={classes.wrapper}>
			<h1 className={classes.header}>Example Header</h1>
			<p className={classes.text}>Example Text</p>
		</div>
	</Theme>
);

export const Default: StoryObj<typeof Theme> = {
	render,
};

export const WithColorsProvided: StoryObj<typeof Theme> = {
	render,
	args: {
		secondary: '#FF00FF',
		primary: '#FF0000',
	},
};
