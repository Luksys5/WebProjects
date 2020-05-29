import { gql }  from 'apollo-boost';

export const GET_GAMES_QUERY = gql`
    {
        games {
            id,
            title,
            description,
            releasedDate,
            imgName,
            links {
                id,
                gameId,
                type,
                url
            }
        }
    }
`;