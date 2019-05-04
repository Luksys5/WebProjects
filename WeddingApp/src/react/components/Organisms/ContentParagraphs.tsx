import * as React from 'react';
import { IContainerText } from '../../../types/ContainerTexts';
import map from 'lodash/map';
import { ContentParagraph } from '../Molecules/ContentParagraph';

export interface ContentParagraphsProps {
  paragraphs: IContainerText[];
}

export const ContentParagraphs: React.StatelessComponent<ContentParagraphsProps> = (props) => (
    <div className='o-content-paragraphs'>
        { map(
            props.paragraphs,
            (text: IContainerText, index: number) => <ContentParagraph key={index} index={index} {...text} />
        )}
    </div>
);