export const formatPrice = (
	price: number,
	currency: string = 'PLN',
	locale: string = 'pl-PL'
) =>
	new Intl.NumberFormat(locale, {
		currency,
		useGrouping: true,
		style: 'currency',
	}).format(price);
