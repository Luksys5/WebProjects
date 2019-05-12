import { IconType } from "react-icons/lib/iconBase";

export interface IContainerText {
  title?: string | undefined;
  icon?: IconType | undefined;
  iconProps?: any;
  className?: string | undefined;
  content: string;
  contentEnding? : string | undefined;
  contentEndingClass? : string | undefined;
  link?: ILinkProps; 
  map?: IMap | undefined;
  boldFirstWord?: boolean | undefined;
}

export interface IMap {
  apiKey: string;
  title: string;
  location: { lat: number, lng: number };
}

export interface ILinkProps {
  textBefore?: string;
  textBeforeClass?: string;
  navItem?: boolean;
  text: string;
  href: string;
}