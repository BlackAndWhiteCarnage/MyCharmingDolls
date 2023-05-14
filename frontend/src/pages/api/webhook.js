/**
 * External dependencies
 */
import Stripe from 'stripe';
import { buffer } from 'micro';

/**
 * Internal dependencies
 */
import { markProductAsSold } from '@/utils';

export const config = {
	api: {
		bodyParser: false,
	},
};

export default async function webhookHandler(req, res) {
	const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET, {
		apiVersion: '2022-11-15',
	});

	if (req.method === 'POST') {
		const buf = await buffer(req, {
			limit: '1mb',
			encoding: 'utf-8',
		});
		const sig = req.headers['stripe-signature'];
		const webhookSecret = process.env.NEXT_PUBLIC_STRAPI_WEBHOOK_KEY;

		let event;

		try {
			if (!sig || !webhookSecret) return;

			event = stripe.webhooks.constructEvent(
				buf.toString(),
				sig,
				webhookSecret
			);
		} catch (error) {
			return res.status(400).send(`Webhook error: ${error.message}`);
		}

		if (event.data.object.status === 'succeeded') {
			markProductAsSold(event.data.object.metadata.MarkAsSold);
		}
	}

	res.status(200).send();
}
