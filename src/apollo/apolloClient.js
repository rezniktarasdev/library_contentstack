import { ApolloClient, InMemoryCache } from '@apollo/client';

const clientOptions = {
    uri: 'https://graphql.contentstack.com/stacks/blt6aac1bdeb96e7a60?environment=production',
    headers: {
    'Content-Type': 'application/json',
    'access_token': 'cse90c18f3d820e1b54de672e1',
    },
    cache: new InMemoryCache(),
};

const client = new ApolloClient(clientOptions);

export default client;
