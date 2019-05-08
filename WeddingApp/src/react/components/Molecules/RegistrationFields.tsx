import React from 'react';
import RegistrationFormFields from '../../../data/RegistrationForm';
import { IRegField } from '../../../types/RegField';
import { InputField } from '../Atoms/InputField/InputField';
import { Button } from '../Atoms/Button';
import { ContentParagraphs } from '../Organisms/ContentParagraphs';
import Festival from '../../../data/Festival';
import { ParagraphTitle } from '../Atoms/ParagraphTitle';

export const RegistrationFields = () => {
  return (
    <React.Fragment>
      {
        RegistrationFormFields.map((field: IRegField, index: number) => (
          <InputField key={index} {...field} />
        ))
      }
      <div className='m-submit-info'>
        <Button title='Pateikti užpildytą informacija' buttonProps={{name: 'authentication-button' }} />
        <div className='a-additional-info'>Persigalvojus visada galite nusiūsti naujai užpildytą formą</div>
      </div>
    </React.Fragment>
  ); 
}