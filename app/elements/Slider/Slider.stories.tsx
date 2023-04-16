/**
 * External dependencies
 */
import { StoryObj } from '@storybook/react';

/**
 * Internal dependencies
 */
import { DefaultProps as PolaroidImageProps } from '@/elements/PolaroidImage/PolaroidImage.stories';
import { PolaroidImage } from '@/elements';
import Slider from '.';

export default {
	title: 'Elements/Slider',
	component: Slider,
};

export const Default: StoryObj<typeof Slider> = {
	args: {
		children: new Array(9).fill(<PolaroidImage {...PolaroidImageProps} />),
	},
};
