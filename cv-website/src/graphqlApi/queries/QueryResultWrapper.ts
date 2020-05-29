import { ApolloQueryResult, NetworkStatus } from "apollo-boost";

export function queryResultWrapper<T>(result: ApolloQueryResult<T>): T | string {
    const { data, errors, networkStatus } = result;

    if (networkStatus === NetworkStatus.error) {
        return errors?.reduce((prev, current) => (prev + current.message + " "), "") || '';
    } else {
        return data;
    }
}
