import { IconType } from "react-icons/lib/iconBase";

export interface IContainerData {
  title?: string | undefined;
  icon?: IconType | undefined;
  iconProps?: any;
  paragraphs: IParagraphText[];
}

export interface IParagraphText {
  class?: string | undefined;
  content: string;
  contentEnding? : string | undefined;
  contentEndingClass? : string | undefined;
  link?: ILinkProps; 
  map?: IMap | undefined;
  boldFirstWord?: boolean | undefined;
}

export interface IMap {
  apiKey: string;
}

export interface ILinkProps {
  text: string;
  href: string;
}