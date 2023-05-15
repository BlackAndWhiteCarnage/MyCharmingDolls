/**
 * External dependencies
 */
import Head from 'next/head';

/**
 * Internal dependencies
 */
import { ProductsLayout, WithNavigationLayout } from '@/layouts';

const Dolls = () => (
	<>
		<Head>
			<title>
				Dolls - Custom Blythe Dolls for Collectors and Enthusiasts |
				MyCharmingDolls
			</title>
			<meta
				name="description"
				content="Explore my exquisite collection of custom Blythe dolls at MyCharmingDolls. Each doll is meticulously handcrafted with exceptional attention to detail, capturing the essence of charm and uniqueness. Discover the magic of these one-of-a-kind dolls that bring joy and wonder into your life. Shop now and add a touch of enchantment to your collection. Free shipping in Europe. Worldwide shipping available on my Etsy store."
			/>
		</Head>
		<WithNavigationLayout>
			<ProductsLayout />
		</WithNavigationLayout>
	</>
);

export default Dolls;
