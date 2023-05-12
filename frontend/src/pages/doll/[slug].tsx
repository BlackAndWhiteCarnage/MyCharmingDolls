/**
 * External dependencies
 */
import { NextPage, NextPageContext } from 'next';

/**
 * Internal dependencies
 */
import { ProductDetailsLayout, WithNavigationLayout } from '@/layouts';

type DollProps = {
	slug: string | string[] | undefined;
};

const Doll: NextPage<DollProps> = ({ slug }) => (
	<WithNavigationLayout>
		{typeof slug === 'string' && <ProductDetailsLayout slug={slug} />}
	</WithNavigationLayout>
);

Doll.getInitialProps = async ({
	query,
}: NextPageContext): Promise<DollProps> => ({
	slug: query.slug,
});

export default Doll;
