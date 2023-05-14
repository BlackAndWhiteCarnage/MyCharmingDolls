/**
 * Internal dependencies
 */
import { SuccessCanceledLayout } from '@/layouts';
import { WithNavigationLayout } from '@/layouts';

const stripe = require('stripe')(`${process.env.NEXT_PUBLIC_STRIPE_SECRET}`);

export async function getServerSideProps(params: any) {
	const order = await stripe.checkout.sessions.retrieve(
		params.query.session_id,
		{
			expand: ['line_items'],
		}
	);

	return { props: { order } };
}

const Success = ({ order }: any) => (
	<WithNavigationLayout>
		<SuccessCanceledLayout order={order} />
	</WithNavigationLayout>
);

export default Success;
