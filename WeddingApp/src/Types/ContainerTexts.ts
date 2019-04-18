export interface IContainerText {
  title?: string;
  class: string;
  content: string;
  link?: ILinkProps; 
}

export interface ILinkProps {
  text: string;
  href: string;
}