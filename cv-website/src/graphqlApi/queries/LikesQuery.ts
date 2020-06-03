import { gql }  from 'apollo-boost';

export const GET_LIKES_QUERY = gql`
    {
        likes {
            targetId,
            type,
            count
        }
    }
`;