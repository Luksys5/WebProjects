import React from 'react';
import RegistrationFormFields from '../../../data/RegistrationForm';
import { IRegField } from '../../../types/RegField';
import { InputField } from '../Atoms/InputField/InputField';
import { Button } from '../Atoms/Button';
import { ContentParagraphs } from '../Organisms/ContentParagraphs';
import Festival from '../../../data/Festival';

export const RegistrationFields = () => {
  return (
    <React.Fragment>
      {
        RegistrationFormFields.map((field: IRegField, index: number) => (
          <InputField key={index} {...field} />
        ))
      }
      <Button title='Siūsti užpildytą informaciją' buttonProps={{name: 'authentication-button' }} />
      <ContentParagraphs paragraphs={Festival} />
    </React.Fragment>
  ); 
}