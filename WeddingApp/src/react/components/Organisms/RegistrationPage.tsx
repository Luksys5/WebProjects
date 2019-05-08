import React from 'react';
import { ContentParagraphs } from './ContentParagraphs';
import { IContainerText } from '../../../types/ContainerTexts';

export interface RegistrationPageProps {
  formTitle: string;
  contentTitle: string
  content: IContainerText[];
}

export const RegistrationPage: React.StatelessComponent<RegistrationPageProps> = (props) => {
  const { formTitle, contentTitle, content, children } = props;

  return (
    <div className='o-registration-page'>
      <div className='o-content-page'>
          <header className='o-content-page__header'>
              <h3>{formTitle}</h3>
          </header>
          { children }
          <header className='o-content-page__header'>
              <h3>{contentTitle}</h3>
          </header>
          <ContentParagraphs paragraphs={content} />
      </div>
      
    </div>

  );
}