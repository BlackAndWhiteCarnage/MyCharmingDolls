/**
 * External dependencies
 */
import { NextPage, NextPageContext } from 'next';
import { SneakPeekLayout, WithNavigationLayout } from '@/layouts';
import { DollsContextProvider } from '@/elements';

export type DollsProps = {
	initialSlug: string | string[] | undefined;
};

const Dolls: NextPage<DollsProps> = ({ initialSlug }) => (
	<DollsContextProvider>
		<WithNavigationLayout isFullScreen showProductsList>
			<SneakPeekLayout initialSlug={initialSlug} />
		</WithNavigationLayout>
	</DollsContextProvider>
);

Dolls.getInitialProps = async ({ query }: NextPageContext) => {
	return {
		initialSlug: query.doll,
	};
};

export default Dolls;
