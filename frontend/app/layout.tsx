/**
 * External dependencies
 */
import { ReactNode } from 'react';

/**
 * Internal dependencies
 */
import { Providers } from '@/elements';
import '@/scss/index.scss';

export const metadata = {
	title: 'Title',
	description: 'Description',
};

const RootLayout = ({ children }: { children: ReactNode }) => (
	<html lang="en">
		<body>
			<Providers>{children}</Providers>
		</body>
	</html>
);

export default RootLayout;
