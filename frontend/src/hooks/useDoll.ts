/**
 * Internal dependencies
 */
import { useGetDollBySlugQuery } from '@/generated/graphql';

const useDolls = (dollSlug: string) => {
	const { data, loading, error } = useGetDollBySlugQuery({
		variables: {
			slug: dollSlug,
		},
	});

	return { data, loading, error };
};

export default useDolls;
