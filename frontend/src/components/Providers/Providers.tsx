/**
 * External dependencies
 */
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { ReactNode } from 'react';

const Providers = ({ children }: { children: ReactNode }) => (
	<ApolloProvider
		client={
			new ApolloClient({
				uri: 'http://localhost:4000/graphql',
				cache: new InMemoryCache(),
			})
		}
	>
		{children}
	</ApolloProvider>
);

export default Providers;
