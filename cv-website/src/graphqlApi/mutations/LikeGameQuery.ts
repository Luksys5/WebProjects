import { gql } from "apollo-boost";

export const LIKE_GAME = gql`
    mutation likeGame($userId: String!, $targetId: String!, $type: Int!) {
        likeGame(userId: $userId, targetId: $targetId, type: $type) {
            targetId,
            type,
            count
        }
    }
`;