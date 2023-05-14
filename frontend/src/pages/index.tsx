/**
 * Internal dependencies
 */
import { AboutMeLayout, WithNavigationLayout } from '@/layouts';
import { markProductAsSold } from '@/utils';

const Doll = () => (
	<WithNavigationLayout>
		<button onClick={() => markProductAsSold('nora')}>sdasddsa</button>
		<AboutMeLayout />
	</WithNavigationLayout>
);

export default Doll;
