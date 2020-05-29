import { gql }  from 'apollo-boost';

export const GET_LATEST_GAME_QUERY = gql`
    {
        game {
            id,
            title,
            description,
            releasedDate,
            imgName,
        }
    }
`
