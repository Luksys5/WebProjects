import { Game } from "./Game";
import { SkillGroup } from "./SkillGroup";
import { Like } from "./Like";
import { User } from "./User";

export type GamesQuery = {
    games: Game[];
}

export type LatestGameQuery = {
    game: Game;
}

export type SkillGroupQuery = {
    skills: SkillGroup[];
}

export type LikesQuery = {
    likes: Like[];
}

export type UserQuery = {
    getUserById: User[];
}

export type LikeMutation = {
    likeGame: Like | null;
}
