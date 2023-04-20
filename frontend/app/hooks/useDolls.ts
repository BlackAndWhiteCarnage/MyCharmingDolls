/**
 * Internal dependencies
 */
import { useDollsQuery } from '@/generated/graphql';

const useDolls = () => {
	const { data, loading, error } = useDollsQuery();

	const dolls = data?.dolls?.data;

	return { dolls, loading, error };
};

export default useDolls;
