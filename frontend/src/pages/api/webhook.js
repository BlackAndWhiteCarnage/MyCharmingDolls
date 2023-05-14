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
		const buf = await buffer(req);
		const sig = req.headers['stripe-signature'];
		const webhookSecret = process.env.NEXT_PUBLIC_STRAPI_WEBHOOK_KEY;

		let event;

		try {
			if (!sig || !webhookSecret) return;

			event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
		} catch (error) {
			return res.status(400).send(`Webhook error: ${error.message}`);
		}

		if (event.data.object.status === 'succeeded') {
			const findProduct = await fetch(
				`${event.data.object.metadata.DatabaseUrl}/api/dolls?filters[slug][$eq]=${event.data.object.metadata.MarkAsSold}`
			);

			const data = await findProduct.json();

			const isSold = data.data[0].attributes.isSold;

			const productData = { ...data.data[0] };
			productData.attributes.isSold = !isSold;

			await fetch(
				`${event.data.object.metadata.DatabaseUrl}/api/dolls/${productData.id}`,
				{
					method: 'PUT',
					headers: {
						Authorization: `Bearer ${event.data.object.metadata.StrapiToken}`,
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						data: productData.attributes,
					}),
				}
			);
		}
	}

	res.status(200).send();
}
