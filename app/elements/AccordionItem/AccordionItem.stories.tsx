/**
 * External dependencies
 */
import { ArgsStoryFn } from '@storybook/types';
import { ReactRenderer, StoryObj, Meta, StoryFn } from '@storybook/react';
import { useArgs } from '@storybook/client-api';
import { ComponentProps } from 'react';

/**
 * Internal dependencies
 */
import { DefaultProps as ListProps } from '@/elements/List/List.stories';
import { List } from '@/elements';
import AccordionItem from '.';

const disable = {
	table: {
		disable: true,
	},
};

export default {
	title: 'Elements/AccordionItem',
	component: AccordionItem,
	decorators: [
		(Story: StoryFn) => (
			<div
				style={{
					maxWidth: '49.625rem',
				}}
			>
				<Story />
			</div>
		),
	],
	argTypes: {
		children: disable,
		onToggle: disable,
	},
} satisfies Meta<typeof AccordionItem>;

const AccordionItemStory: ArgsStoryFn<
	ReactRenderer,
	ComponentProps<typeof AccordionItem>
> = (args) => {
	const [, updateArgs] = useArgs();

	return (
		<AccordionItem
			{...args}
			onToggle={(open) => updateArgs({ ...args, open })}
		/>
	);
};

export const Default: StoryObj<typeof AccordionItem> = {
	render: AccordionItemStory,
	args: {
		label: 'The work done includes',
		children: <List {...ListProps} />,
	},
};
