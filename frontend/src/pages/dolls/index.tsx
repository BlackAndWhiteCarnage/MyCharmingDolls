/**
 * Internal dependencies
 */
import { DollsContextProvider } from '@/elements';
import { SneakPeekLayout, WithNavigationLayout } from '@/layouts';

const Dolls = () => (
	<DollsContextProvider>
		<WithNavigationLayout isFullScreen showProductsList>
			<SneakPeekLayout />
		</WithNavigationLayout>
	</DollsContextProvider>
);

export default Dolls;
