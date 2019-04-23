export interface INavigationItem {
    name: string;
    title: string;
    class: string;
    path?: string | undefined;
    type: string;
}


export enum NavItemTypesEnum {
  Link = "Link",
  Navigation = "Nav"
}