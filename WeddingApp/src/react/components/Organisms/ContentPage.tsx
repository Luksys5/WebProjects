import * as React from 'react';
import { IContainerText } from '../../../types/ContainerTexts';
import { ContentParagraphs } from './ContentParagraphs';

export interface ContentPageProps {
  title: string;
  content: IContainerText[];
}

export const ContentPage: React.StatelessComponent<ContentPageProps> = (props) => {
    const { title, content } = props;
    return (
        <div className='o-content-page'>
            <header className='o-content-page__header'>
                <h3>{title}</h3>
            </header>
            <ContentParagraphs paragraphs={content} />
        </div>
    );
}