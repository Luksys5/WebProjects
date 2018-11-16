import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface ISidebarButton {
    path: string;
    icon: IconProp;
    step?: string;
}