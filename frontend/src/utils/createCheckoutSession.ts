/**
 * Internal dependencies
 */
import { Doll } from '@/generated/graphql';
import { getStripe } from '@/utils';

const createCheckoutSession = async (product: Doll) => {
	const stripe = await getStripe();

	console.log(product);

	const response = await fetch('/api/stripe', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(product),
	});

	const stripeData = await response.json();

	await stripe.redirectToCheckout({ sessionId: stripeData.id });
};

export default createCheckoutSession;
