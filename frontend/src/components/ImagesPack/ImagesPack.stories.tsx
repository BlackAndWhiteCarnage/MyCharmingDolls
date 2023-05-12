/**
 * External dependencies
 */
import { StoryObj, Meta, StoryFn } from '@storybook/react';

/**
 * Internal dependencies
 */
import DollImage1 from '@/images/example-doll-1.png';
import DollImage2 from '@/images/example-doll-2.png';
import DollImage3 from '@/images/example-doll-3.png';
import ImagesPack from '.';

export default {
	title: 'Components/ImagesPack',
	component: ImagesPack,
	decorators: [
		(Story: StoryFn) => (
			<div
				style={{
					maxWidth: '49.625rem',
					height: '49.625rem',
				}}
			>
				<Story />
			</div>
		),
	],
	excludeStories: ['DefaultProps'],
} satisfies Meta<typeof ImagesPack>;

export const DefaultProps = {
	animate: true,
	images: [
		{
			src: DollImage1.src,
			alt: '',
		},
		{
			src: DollImage2.src,
			alt: '',
		},
		{
			src: DollImage3.src,
			alt: '',
		},
	],
};

export const Default: StoryObj<typeof ImagesPack> = {
	args: DefaultProps,
};
