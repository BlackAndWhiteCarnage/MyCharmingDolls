/**
 * External dependencies
 */
import { loadStripe, Stripe } from '@stripe/stripe-js';

let stripe: Stripe | null = null;

const getStripe = async (): Promise<Stripe> => {
	if (!stripe) {
		stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE!);
	}

	return stripe as Stripe;
};

export default getStripe;
