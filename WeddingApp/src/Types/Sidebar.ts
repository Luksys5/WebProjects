export interface ISidebarItem {
    name: string;
    title: string;
    class: string;
    path: string;
    type: string;
}


export enum SidebarTypesEnum {
  Link = "Link",
  Navigation = "Nav"
}