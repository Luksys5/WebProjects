import React from 'react';
import { ContentParagraphs } from './ContentParagraphs';
import { IContainerText } from '../../../types/ContainerTexts';

export interface RegistrationPageProps {
  formTitle: string;
  contentTitle: string
  content: IContainerText[];
}

export const RegistrationPage: React.StatelessComponent<RegistrationPageProps> = (props) => {
  const { formTitle, children } = props;

  return (
    <div className='o-registration-page'>
      <div className='o-content-page'>
          <header className='o-content-page__header'>
              <h3>{formTitle}</h3>
          </header>
          { children }
      </div>
      
    </div>

  );
}