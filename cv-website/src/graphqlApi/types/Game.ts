import { Link } from "./Link";

export type Game = {
    id: string;
    title: string;
    description: string;
    releasedDate: string;
    imgName: string;
    devices: string;
    links: Link[];
}