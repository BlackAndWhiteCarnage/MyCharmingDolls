/**
 * External dependencies
 */
import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => (
	<Html>
		<Head>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<link rel="shortcut icon" href="/favicon.svg" />
			<link
				href="https://fonts.googleapis.com/css2?family=Dosis:wght@400;600;700&family=Pacifico&display=swap"
				rel="stylesheet"
			/>
		</Head>
		<body>
			<Main />
			<NextScript />
		</body>
	</Html>
);

export default Document;
