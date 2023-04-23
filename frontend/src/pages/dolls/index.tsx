/**
 * Internal dependencies
 */
import { SneakPeekLayout, WithNavigationLayout } from '@/layouts';

const Dolls = () => (
	<WithNavigationLayout isFullScreen showProductsList>
		<SneakPeekLayout />
	</WithNavigationLayout>
);

export default Dolls;
