/**
 * External dependencies
 */
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { ReactNode } from 'react';

const Providers = ({ children }: { children: ReactNode }) => (
	<ApolloProvider
		client={
			new ApolloClient({
				uri: `${process.env.NEXT_PUBLIC_DATABASE_URL!}/graphql`,
				cache: new InMemoryCache(),
			})
		}
	>
		{children}
	</ApolloProvider>
);

export default Providers;
