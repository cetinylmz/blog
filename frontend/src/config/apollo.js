import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from "@apollo/client/link/context";

const authLink = setContext(() => {
  const token = localStorage.getItem('jwtToken');
  return {
    headers: {
      Authorization: token ? `Bearer ${token}` : ''
    }
  };
});
const httpLink = createHttpLink({
  uri: 'https://blogtr.herokuapp.com/graphql'
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client