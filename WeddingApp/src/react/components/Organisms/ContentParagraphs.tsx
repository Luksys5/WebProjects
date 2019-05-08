import * as React from 'react';
import { IContainerData, IParagraphText } from '../../../types/ContainerData';
import map from 'lodash/map';
import { ContentParagraph } from '../Molecules/ContentParagraph';
import { ParagraphTitle } from '../Atoms/ParagraphTitle';

export interface ContentParagraphsProps {
  paragraphs: IContainerData[];
}

export const ContentParagraphs: React.StatelessComponent<ContentParagraphsProps> = (props) => (
    <div className='o-content-paragraphs'>
      { map(
          props.paragraphs,
          (containerData: IContainerData, index: number) => 
            <div key={index} className='m-content-par'>
              <ParagraphTitle
                title={containerData.title}
                icon={containerData.icon}
                iconProps={containerData.iconProps}
              />
              <div className='m-content-par__content'>
              {
                containerData.paragraphs.map((par: IParagraphText, index: number) =>
                  <ContentParagraph key={index} {...par} />
                )
              }
              </div>
            </div>
      )}
    </div>
);