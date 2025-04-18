import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
  uri: process.env.CMS_DOMAIN + '/api',
  cache: new InMemoryCache(),
});

export default apolloClient;