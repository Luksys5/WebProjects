import * as React from 'react';
import { IContainerData } from '../../../types/ContainerData';
import { ContentParagraphs } from './ContentParagraphs';

export interface ContentPageProps {
  title: string;
  content: IContainerData[];
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