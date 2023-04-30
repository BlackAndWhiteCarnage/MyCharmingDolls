/**
 * External dependencies
 */
import type { AppProps } from 'next/app';
import { FC } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

/**
 * Internal dependencies
 */
import { DollsContextProvider } from '@/elements';
import '@/scss/index.scss';

type ComponentWithLayout = AppProps & {
	Component: AppProps['Component'] & {
		PageLayout?: any;
	};
};

const client = new ApolloClient({
	uri: 'http://localhost:4000/graphql',
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
