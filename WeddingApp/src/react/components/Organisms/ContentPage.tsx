import * as React from 'react';
import { IContainerText } from '../../../Types/ContainerTexts';
import { ContentParagraphs } from './ContentParagraphs';

export interface ContentPageProps {
  title: string;
  content: IContainerText[];
}

export const ContentPage: React.SFC<ContentPageProps> = (props) => {
    const { title, content } = props;
    return (
        <div className='o-content-page'>
            <div className='o-content-page__frame'>
              <header className='o-content-page__frame__header'>
                  <h3>{title}</h3>
              </header>
              <ContentParagraphs paragraphs={content} />
            </div>
        </div>
    );
}