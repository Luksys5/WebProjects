import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { ToastOptions } from 'react-toastify';

export const webAppData = (window as any).cvWebApp; 
export class GlobalData {
    public static graphqlUri = "";
    public static graphqlClient: ApolloClient<unknown> | undefined = undefined;
    public static fbClient: any = undefined;
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
    GlobalData.fbClient = window['FB' as any] as any;
}

export const ToastProps: ToastOptions = {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
};
