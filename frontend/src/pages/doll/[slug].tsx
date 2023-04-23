/**
 * External dependencies
 */
import { NextPageContext } from 'next';

/**
 * Internal dependencies
 */
import { WideLayout, WithNavigationLayout } from '@/layouts';

const Doll = ({ slug }: { slug: string }) => (
	<WithNavigationLayout>
		<WideLayout slug={slug} />
	</WithNavigationLayout>
);

Doll.getInitialProps = async ({ query }: NextPageContext) => {
	return {
		slug: query.slug,
	};
};

export default Doll;
