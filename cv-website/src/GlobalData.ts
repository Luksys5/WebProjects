import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';

export const webAppData = (window as any).cvWebApp; 
export class GlobalData {
    public static graphqlUri = "";
    public static graphqlClient: ApolloClient<unknown> | undefined = undefined;
}

export const globalInit = () => {
    GlobalData.graphqlUri = webAppData.GraphqlUri;
    GlobalData.graphqlClient = new ApolloClient({
        link: createHttpLink({ uri: (window as any).cvWebApp.GraphqlUri, headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        } }),
        cache: new InMemoryCache({
            // @ts-ignore
            dataIdFromObject: o => (o._id ? `${o.__typename}:${o._id}`: null),
        })
    });
}