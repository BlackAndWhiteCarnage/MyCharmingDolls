/**
 * External dependencies
 */
import { StoryObj, Meta } from '@storybook/react';

/**
 * Internal dependencies
 */
import DollImage from '@/images/example-doll.png';
import MyImage from '@/images/me.jpg';
import PolaroidImage from '.';

export default {
	title: 'Components/PolaroidImage',
	component: PolaroidImage,
	argTypes: {
		image: {
			table: {
				disable: true,
			},
		},
	},
} satisfies Meta<typeof PolaroidImage>;

export const Narrow: StoryObj<typeof PolaroidImage> = {
	render: (args) => (
		<div style={{ maxWidth: '29.375rem' }}>
			<PolaroidImage {...args} />
		</div>
	),
	args: {
		image: {
			src: DollImage.src,
			alt: '',
		},
	},
};

export const Wide: StoryObj<typeof PolaroidImage> = {
	render: (args) => (
		<div style={{ maxWidth: '49.625rem' }}>
			<PolaroidImage {...args} />
		</div>
	),
	args: {
		image: {
			src: MyImage.src,
			alt: '',
		},
		variant: 'wide',
	},
};
