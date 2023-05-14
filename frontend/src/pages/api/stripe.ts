/**
 * External dependencies
 */
import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

/**
 * Internal dependencies
 */
import { euCountries } from '@/config';

const stripe = new Stripe(`${process.env.NEXT_PUBLIC_STRIPE_SECRET || ''}`, {
	apiVersion: '2022-11-15',
});

console.log('sth');

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === 'POST') {
		try {
			const session = await stripe.checkout.sessions.create({
				submit_type: 'pay',
				mode: 'payment',
				payment_method_types: ['card'],
				phone_number_collection: {
					enabled: true,
				},
				billing_address_collection: 'required',
				shipping_address_collection: {
					allowed_countries: euCountries,
				},
				payment_intent_data: {
					metadata: {
						MarkAsSold: req.body.slug,
						DatabaseUrl: 'https://charming-dolls.herokuapp.com',
						StrapiToken:
							'037f77ab00f840a1675552ee54aa4fb8547fce1f46863de8102727caa2289080ae7c5f1a7ec3ab4278b5c5502a23f805b941a5554cf89237f49e7de93cc8d3e92bfa31de5843da4116892ec70b51f210c1b2c7450590db0da7a723913c229ea324f7033ad3a47d6ba2e6052db5414be69a2210a45088cc98f4b5742e90cdbfaf',
					},
				},
				shipping_options: [
					{
						shipping_rate_data: {
							type: 'fixed_amount',
							fixed_amount: {
								amount: 0,
								currency: 'EUR',
							},
							display_name:
								'Parcel will be shipped by courier in',
							delivery_estimate: {
								minimum: {
									unit: 'business_day',
									value: 1,
								},
								maximum: {
									unit: 'business_day',
									value: 3,
								},
							},
						},
					},
				],
				line_items: [
					{
						price_data: {
							currency: 'EUR',
							product_data: {
								name: `Custom Blythe Doll - ${req.body.name}`,
								description: `${req.body.name} is glad that she's just found a new home!`,
								images: [
									req.body.images.data[1].attributes.url,
								],
							},
							unit_amount: req.body.price * 100,
						},
						quantity: 1,
					},
				],
				success_url: `${req.headers.origin}/success?&session_id={CHECKOUT_SESSION_ID}`,
				cancel_url: `${req.headers.origin}/canceled`,
			});
			res.status(200).json(session);
		} catch (err: any) {
			res.status(err.statusCode || 500).json(err.message);
		}
	}
}
