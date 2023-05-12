/**
 * External dependencies
 */
import { NextPageContext } from 'next';

/**
 * Internal dependencies
 */
import { ProductDetailsLayout, WithNavigationLayout } from '@/layouts';

const Doll = ({ slug }: { slug: string }) => (
	<WithNavigationLayout>
		<ProductDetailsLayout slug={slug} />
	</WithNavigationLayout>
);

Doll.getInitialProps = async ({ query }: NextPageContext) => {
	return {
		slug: query.slug,
	};
};

export default Doll;
