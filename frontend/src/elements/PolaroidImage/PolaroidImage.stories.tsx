/**
 * External dependencies
 */
import { StoryObj, Meta } from '@storybook/react';

/**
 * Internal dependencies
 */
import DollImage from '@/images/example-doll-1.png';
import MyImage from '@/images/me.jpg';
import PolaroidImage from '.';

export default {
	title: 'Elements/PolaroidImage',
	component: PolaroidImage,
	argTypes: {
		image: {
			table: {
				disable: true,
			},
		},
	},
	excludeStories: ['DefaultProps'],
};

export const DefaultProps = {
	image: {
		src: DollImage.src,
		alt: '',
	},
};

export const Narrow: StoryObj<typeof PolaroidImage> = {
	render: (args) => (
		<div style={{ maxWidth: '29.375rem' }}>
			<PolaroidImage {...args} />
		</div>
	),
	args: DefaultProps,
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
