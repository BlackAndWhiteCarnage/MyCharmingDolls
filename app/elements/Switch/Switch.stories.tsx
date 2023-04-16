/**
 * External dependencies
 */
import { ArgsStoryFn } from '@storybook/types';
import { ReactRenderer, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/client-api';

/**
 * Internal dependencies
 */
import { ComponentProps } from 'react';
import Switch from '.';

const disable = {
	table: {
		disable: true,
	},
};

export default {
	title: 'Elements/Switch',
	component: Switch,
	argTypes: {
		onChange: disable,
		options: disable,
		activeOption: {
			type: 'string',
			control: { type: 'radio' },
			options: ['1', '2', '3'],
		},
	},
	excludeStories: ['DefaultProps'],
};

const SwitchStory: ArgsStoryFn<ReactRenderer, ComponentProps<typeof Switch>> = (
	args
) => {
	const [, updateArgs] = useArgs();

	return (
		<Switch
			{...args}
			onChange={(activeOption) => updateArgs({ ...args, activeOption })}
		/>
	);
};

export const DefaultProps = {
	options: {
		'1': 'All',
		'2': 'Adopted',
		'3': 'Not Adopted',
	},
	activeOption: '1',
};

export const Default: StoryObj<typeof Switch> = {
	render: SwitchStory,
	args: {
		label: 'Show:',
		...DefaultProps,
	},
};
