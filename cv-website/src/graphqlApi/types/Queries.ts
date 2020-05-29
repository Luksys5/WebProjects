import { Game } from "./Game";
import { SkillGroup } from "./SkillGroup";

export type GamesQuery = {
    games: Game[];
}

export type LatestGameQuery = {
    game: Game;
}

export type SkillGroupQuery = {
    skills: SkillGroup[];
}
