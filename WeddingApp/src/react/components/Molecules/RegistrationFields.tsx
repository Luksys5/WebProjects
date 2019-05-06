import React from 'react';
import RegistrationFormFields from '../../../data/RegistrationForm';
import { IRegField } from '../../../types/RegField';
import { InputField } from '../Atoms/InputField/InputField';
import { Button } from '../Atoms/Button';

export const RegistrationFields = () => {
  return (
    <React.Fragment>
      {
        RegistrationFormFields.map((field: IRegField, index: number) => (
          <InputField key={index} {...field} />
        ))
      }
      <Button title='Tikrinti kodą' buttonProps={{name: 'authentication-button' }} />
      <div>Pasikeitus nuomonei</div>
    </React.Fragment>
  ); 
}