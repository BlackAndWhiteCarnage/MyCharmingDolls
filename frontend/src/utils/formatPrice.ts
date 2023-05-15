export const formatPrice = (
	price: number,
	currency: string = 'EUR',
	locale: string = 'en-US'
) =>
	new Intl.NumberFormat(locale, {
		currency,
		useGrouping: true,
		style: 'currency',
	}).format(price);
