import { useDolls } from '@/hooks';

const useFindDollIndex = () => {
	const { dolls } = useDolls();

	const findDollIndex = (slug: string | string[] | undefined) =>
		typeof slug === 'string' && dolls
			? dolls.findIndex((doll) => doll.attributes!.slug === slug)
			: 0;

	return findDollIndex;
};

export default useFindDollIndex;
