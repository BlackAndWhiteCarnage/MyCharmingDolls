const markProductAsSold = async (
	slug: string,
	databaseUrl: string,
	strapiToken: string
) => {
	const findProduct = await fetch(
		`${databaseUrl}/api/dolls?filters[slug][$eq]=${slug}`
	);

	const data = await findProduct.json();

	const isSold = data.data[0].attributes.isSold;

	const productData = { ...data.data[0] };
	productData.attributes.isSold = !isSold;

	await fetch(`${databaseUrl}/api/dolls/${productData.id}`, {
		method: 'PUT',
		headers: {
			Authorization: `Bearer ${strapiToken}`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			data: productData.attributes,
		}),
	});
};

export default markProductAsSold;
