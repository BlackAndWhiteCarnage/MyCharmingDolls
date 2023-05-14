const markProductAsSold = async (slug: string) => {
	const findProduct = await fetch(
		`${process.env.NEXT_PUBLIC_DATABASE_URL}/api/dolls?filters[slug][$eq]=${slug}`
	);

	const data = await findProduct.json();

	const isSold = data.data[0].attributes.isSold;

	const productData = { ...data.data[0] };
	productData.attributes.isSold = !isSold;

	await fetch(
		`${process.env.NEXT_PUBLIC_DATABASE_URL}/api/dolls/${productData.id}`,
		{
			method: 'PUT',
			headers: {
				Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				data: productData.attributes,
			}),
		}
	);
};

export default markProductAsSold;
