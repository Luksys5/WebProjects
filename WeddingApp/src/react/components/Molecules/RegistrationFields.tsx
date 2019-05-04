import React from 'react';
import RegistrationFormFields from '../../../data/RegistrationForm';
import { IRegField } from '../../../types/RegField';
import { InputField } from '../Atoms/InputField/InputField';

export const RegistrationFields = () => {
  return (
    <React.Fragment>
      {
        RegistrationFormFields.map((field: IRegField, index: number) => (
          <InputField key={index} {...field} />
        ))
      }
      <button type='button'>Siūsti</button>
      <div>Pasikeitus nuomonei</div>
    </React.Fragment>
  ); 
}