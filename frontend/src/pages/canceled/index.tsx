/**
 * External dependencies
 */
import Head from 'next/head';

/**
 * Internal dependencies
 */
import { SuccessCanceledLayout, WithNavigationLayout } from '@/layouts';

const Canceled = () => (
	<>
		<Head>
			<title>Order Canceled | MyCharmingDolls</title>
		</Head>
		<WithNavigationLayout>
			<SuccessCanceledLayout />
		</WithNavigationLayout>
	</>
);

export default Canceled;
