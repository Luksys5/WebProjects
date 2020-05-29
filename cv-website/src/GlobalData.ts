import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';

export const webAppData = (window as any).cvWebApp; 
export class GlobalData {
    public static graphqlUri: string = "";
    public static graphqlClient: ApolloClient<unknown> | undefined = undefined;
}

export const globalInit = () => {
    GlobalData.graphqlUri = webAppData.GraphqlUri;
    GlobalData.graphqlClient = new ApolloClient({
        link: createHttpLink({ uri: (window as any).cvWebApp.GraphqlUri }),
        cache: new InMemoryCache()
    });
}