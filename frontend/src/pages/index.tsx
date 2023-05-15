/**
 * External dependencies
 */
import Head from 'next/head';

/**
 * Internal dependencies
 */
import { AboutMeLayout, WithNavigationLayout } from '@/layouts';

const Doll = () => (
	<>
		<Head>
			<title>
				About - Passion for Crafting Custom Blythe Dolls |
				MyCharmingDolls
			</title>
			<meta
				name="description"
				content="Learn more about Weronika, the talented artisan behind MyCharmingDolls. Discover her passion for crafting custom Blythe dolls and bringing them to life with meticulous craftsmanship. Explore her creative journey and the dedication she pours into each unique doll. Get to know the artist behind the enchantment."
			/>
		</Head>
		<WithNavigationLayout>
			<AboutMeLayout />
		</WithNavigationLayout>
	</>
);

export default Doll;
