import { gql }  from 'apollo-boost';

export const GET_SKILLS_QUERY = gql`
    {
        skills {
            title,
            keys,
            values,
            color
        }
    }
`;
