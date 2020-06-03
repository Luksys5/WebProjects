import { gql } from "apollo-boost";

export const GET_USER_QUERY = gql`
    query GetUserById($id: String!) {
        getUserById(id: $id) {
            id,
            likeId
        }
    }
`;