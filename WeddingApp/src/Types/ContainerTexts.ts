export interface IContainerTexts {
  title: string;
  paragraphs: IContainerText[];
}


export interface IContainerText {
  title?: string;
  class: string;
  content: string;
}