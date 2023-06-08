import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// Create an httpLink to connect Apollo Client to GraphQL server
const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql', // Update with GraphQL server URL
});

// Create an authLink to include the authentication token in the request headers
const authLink = setContext((_, { headers }) => {
  // Get the authentication token from wherever you store it (e.g., local storage)
  const token = localStorage.getItem('authToken');

  // Return the headers with the authentication token included
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : '', // Include the token in the 'Authorization' header
    },
  };
});

// Create the Apollo Client instance
const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql', // Update with your GraphQL server URL
  cache: new InMemoryCache(),
});

export default client;