/**
 * External dependencies
 */
import type { AppProps } from 'next/app';
import { FC } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

/**
 * Internal dependencies
 */
import { DollsContextProvider } from '@/components';
import '@/scss/index.scss';

type ComponentWithLayout = AppProps & {
	Component: AppProps['Component'] & {
		PageLayout?: any;
	};
};

const client = new ApolloClient({
	uri: `${process.env.NEXT_PUBLIC_DATABASE_URL!}/graphql`,
	cache: new InMemoryCache(),
});

const App: FC<ComponentWithLayout> = ({ Component, pageProps }) => (
	<ApolloProvider client={client}>
		<DollsContextProvider>
			<Component {...pageProps} />
		</DollsContextProvider>
	</ApolloProvider>
);

export default App;
