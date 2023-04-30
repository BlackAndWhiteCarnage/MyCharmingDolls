/**
 * External dependencies
 */
import { useContext } from 'react';

/**
 * Internal dependencies
 */
import { DollsContext } from '@/elements/DollsContextProvider/DollsContextProvider';

const useFindDollIndex = () => {
	const { filteredDolls } = useContext(DollsContext);

	const findDollIndex = (slug: string | string[] | undefined) =>
		typeof slug === 'string' && filteredDolls
			? filteredDolls.findIndex((doll) => doll.attributes!.slug === slug)
			: 0;

	return findDollIndex;
};

export default useFindDollIndex;
