/**
 * External dependencies
 */
import { StoryObj, Meta } from '@storybook/react';

/**
 * Internal dependencies
 */
import { DefaultProps as PolaroidImageProps } from '@/components/PolaroidImage/PolaroidImage.stories';
import { PolaroidImage } from '@/components';
import Slider from '.';

export default {
	title: 'Components/Slider',
	component: Slider,
	excludeStories: ['DefaultProps'],
} satisfies Meta<typeof Slider>;

export const DefaultProps = {
	children: new Array(9).fill(<PolaroidImage {...PolaroidImageProps} />),
};

export const Default: StoryObj<typeof Slider> = {
	args: DefaultProps,
};
