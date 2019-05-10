import React, { useContext } from 'react';
import RegistrationFormFields from '../../../data/RegistrationForm';
import { IRegField } from '../../../types/RegField';
import { InputField } from '../Atoms/InputField/InputField';
import { Button } from '../Atoms/Button';
import { RegistrationFormContext } from '../../App';
import { SendConfirmationLetter } from '../../../services/services';

export const RegistrationFields = () => {
  const {state: {values, token}} = useContext(RegistrationFormContext);

  const joinWeddingFestival = () => {
    SendConfirmationLetter(token, values);
  }

  return (
    <React.Fragment>
      {
        RegistrationFormFields.map((field: any, index: number) => (
          <InputField key={index} {...field}/>
        ))
      }
      <div className='m-submit-info'>
        <Button title='Pateikti užpildytą informacija' buttonProps={{name: 'authentication-button', onClick: joinWeddingFestival }} />
        <div className='a-additional-info'>Persigalvojus visada galite nusiūsti naujai užpildytą formą</div>
      </div>
    </React.Fragment>
  ); 
}