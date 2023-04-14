/**
 * External dependencies
 */
import { PropsWithChildren } from 'react';
import '@/scss/index.scss';

export const metadata = {
	title: 'Title',
	description: 'Description',
};

const RootLayout = ({ children }: PropsWithChildren) => (
	<html lang="en">
		<body>{children}</body>
	</html>
);

export default RootLayout;
