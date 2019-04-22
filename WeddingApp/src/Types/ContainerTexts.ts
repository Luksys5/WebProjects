import { IconType } from "react-icons/lib/iconBase";

export interface IContainerText {
  title?: string | undefined;
  icon?: IconType | undefined;
  class?: string | undefined;
  content: string;
  contentEnding? : string | undefined;
  contentEndingClass? : string | undefined;
  link?: ILinkProps; 
  map?: IMap | undefined;
}

export interface IMap {
  apiKey: string;
}

export interface ILinkProps {
  text: string;
  href: string;
}