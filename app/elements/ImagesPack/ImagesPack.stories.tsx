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
					marginLeft: 'auto',
					display: 'flex',
					alignItems: 'center',
				}}
			>
				<div
					style={{
						minWidth: '700px',
						height: '90vh',
						border: '1px solid black',
					}}
				>
					content
				</div>
				<Story />
			</div>
		),
	],
} satisfies Meta<typeof ImagesPack>;

export const Default: StoryObj<typeof ImagesPack> = {
	args: {
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
