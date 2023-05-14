const markProductAsSold = async (slug: string) => {
	const findProduct = await fetch(
		`https://charming-dolls.herokuapp.com/api/dolls?filters[slug][$eq]=${slug}`
	);

	const data = await findProduct.json();

	const isSold = data.data[0].attributes.isSold;

	const productData = { ...data.data[0] };
	productData.attributes.isSold = !isSold;

	await fetch(
		`https://charming-dolls.herokuapp.com/api/dolls/${productData.id}`,
		{
			method: 'PUT',
			headers: {
				Authorization: `Bearer 037f77ab00f840a1675552ee54aa4fb8547fce1f46863de8102727caa2289080ae7c5f1a7ec3ab4278b5c5502a23f805b941a5554cf89237f49e7de93cc8d3e92bfa31de5843da4116892ec70b51f210c1b2c7450590db0da7a723913c229ea324f7033ad3a47d6ba2e6052db5414be69a2210a45088cc98f4b5742e90cdbfaf`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				data: productData.attributes,
			}),
		}
	);

	return productData;
};

export default markProductAsSold;
