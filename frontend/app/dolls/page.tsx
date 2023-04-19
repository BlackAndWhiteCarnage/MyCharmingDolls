'use client';

import { SneakPeekLayout, WithNavigationLayout } from '@/layouts';
import { useDollsQuery } from '@/generated/graphql';

const Dolls = () => {
	const { data, loading, error } = useDollsQuery();

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error!</div>;
	}

	console.log(data);

	return (
		<WithNavigationLayout isFullScreen>
			<SneakPeekLayout />
		</WithNavigationLayout>
	);
};

export default Dolls;
