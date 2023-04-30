/**
 * External dependencies
 */
import { NextPage, NextPageContext } from 'next';

/**
 * Internal dependencies
 */
import { SneakPeekLayout, WithNavigationLayout } from '@/layouts';

export type DollsProps = {
	initialSlug: string | string[] | undefined;
};

const Dolls: NextPage<DollsProps> = ({ initialSlug }) => (
	<WithNavigationLayout isFullScreen>
		<SneakPeekLayout initialSlug={initialSlug} />
	</WithNavigationLayout>
);

Dolls.getInitialProps = async ({ query }: NextPageContext) => {
	return {
		initialSlug: query.doll,
	};
};

export default Dolls;
