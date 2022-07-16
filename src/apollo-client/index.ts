import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { getEnvironments } from '../env';

const env = getEnvironments();

export const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: env.VITE_APOLLO_URL || 'http://localhost:4000/graphql',
  }),
  cache: new InMemoryCache(),
});
