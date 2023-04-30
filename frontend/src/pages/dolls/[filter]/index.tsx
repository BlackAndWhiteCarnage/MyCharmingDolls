/**
 * External dependencies
 */
import { NextPage } from 'next';

/**
 * Internal dependencies
 */
import { SneakPeekLayout, WithNavigationLayout } from '@/layouts';

const Dolls: NextPage = () => (
	<WithNavigationLayout isFullScreen>
		<SneakPeekLayout />
	</WithNavigationLayout>
);

export default Dolls;
