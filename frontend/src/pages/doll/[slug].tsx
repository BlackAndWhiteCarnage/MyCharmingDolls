/**
 * External dependencies
 */
import { NextPage, NextPageContext } from 'next';
import Head from 'next/head';

/**
 * Internal dependencies
 */
import { ProductDetailsLayout, WithNavigationLayout } from '@/layouts';

type DollProps = {
	slug: string | string[] | undefined;
};

const Doll: NextPage<DollProps> = ({ slug }) => (
	<>
		<Head>
			<title>
				DollDetails - Exquisite Custom Blythe Doll | MyCharmingDolls
			</title>
			<meta
				name="description"
				content="Explore the intricate beauty of my custom Blythe doll at MyCharmingDolls. Meticulously handcrafted with meticulous attention to detail, each doll is a masterpiece of artistry and craftsmanship. From delicately painted faces to intricately designed outfits, these dolls exude charm and uniqueness. Discover the enchantment and bring home a doll that captures the essence of beauty and meticulous craftsmanship."
			/>
		</Head>
		<WithNavigationLayout>
			{typeof slug === 'string' && <ProductDetailsLayout slug={slug} />}
		</WithNavigationLayout>
	</>
);

Doll.getInitialProps = async ({
	query,
}: NextPageContext): Promise<DollProps> => ({
	slug: query.slug,
});

export default Doll;
