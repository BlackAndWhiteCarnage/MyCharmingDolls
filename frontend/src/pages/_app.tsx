/**
 * External dependencies
 */
import type { AppProps } from 'next/app';
import { FC } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

/**
 * Internal dependencies
 */
import '@/scss/index.scss';

type ComponentWithLayout = AppProps & {
	Component: AppProps['Component'] & {
		PageLayout?: any;
	};
};

const client = new ApolloClient({
	uri: 'http://localhost:4000/graphql', // adres endpointu GraphQL
	cache: new InMemoryCache(),
});

const App: FC<ComponentWithLayout> = ({ Component, pageProps }) => (
	<ApolloProvider client={client}>
		<Component {...pageProps} />
	</ApolloProvider>
);

export default App;
