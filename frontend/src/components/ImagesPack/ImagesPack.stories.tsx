/**
 * External dependencies
 */
import { ArgsStoryFn } from '@storybook/types';
import { ReactRenderer, StoryObj, Meta } from '@storybook/react';
import { useRef } from 'react';
import { ComponentProps } from 'react';

/**
 * Internal dependencies
 */
import DollImage1 from '@/images/example-doll-1.png';
import DollImage2 from '@/images/example-doll-2.png';
import DollImage3 from '@/images/example-doll-3.png';
import ImagesPack from './ImagesPack';

export default {
	title: 'Components/ImagesPack',
	component: ImagesPack,
} satisfies Meta<typeof ImagesPack>;

const ImagesPackStory: ArgsStoryFn<
	ReactRenderer,
	ComponentProps<typeof ImagesPack>
> = (args) => {
	const parentRef = useRef<HTMLDivElement>(null);

	return (
		<div
			ref={parentRef}
			style={{
				maxWidth: '49.625rem',
				height: '49.625rem',
			}}
		>
			<ImagesPack {...args} parentRef={parentRef} />
		</div>
	);
};

export const Default: StoryObj<typeof ImagesPack> = {
	render: ImagesPackStory,
	args: {
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
	},
};
