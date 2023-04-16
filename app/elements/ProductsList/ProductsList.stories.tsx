/**
 * External dependencies
 */
import { StoryObj, Meta, StoryFn } from '@storybook/react';

/**
 * Internal dependencies
 */
import DollMiniature1 from '@/images/doll-miniature-1.png';
import DollMiniature2 from '@/images/doll-miniature-2.png';
import DollMiniature3 from '@/images/doll-miniature-3.png';
import ProductsList from '.';

export default {
	title: 'Elements/ProductsList',
	component: ProductsList,
	argTypes: {
		products: {
			table: {
				disable: true,
			},
		},
	},
	decorators: [
		(Story: StoryFn) => (
			<div
				style={{
					maxWidth: '16.563rem',
				}}
			>
				<Story />
			</div>
		),
	],
} satisfies Meta<typeof ProductsList>;

const productsData = [
	{ image: { src: DollMiniature1.src, alt: '' }, href: '' },
	{ image: { src: DollMiniature2.src, alt: '' }, href: '' },
	{ image: { src: DollMiniature3.src, alt: '' }, href: '' },
];

const args = {
	products: Array.from({ length: 18 }, (_, index) =>
		index === 0
			? { ...productsData[0], isActive: true }
			: productsData[index % productsData.length]
	),
};

export const Default: StoryObj<typeof ProductsList> = {
	args,
};
