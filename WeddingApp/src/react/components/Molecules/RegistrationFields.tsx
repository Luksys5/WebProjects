import React, { useContext } from 'react';
import RegistrationFormFields from '../../../data/RegistrationForm';
import { InputField } from '../Atoms/InputField/InputField';
import { Button } from '../Atoms/Button';
import { RegistrationFormContext, ActionTypesEnum } from '../../App';
import { SendConfirmationLetter } from '../../../services/services';

export const RegistrationFields = () => {
  const {state: {values, participant}, dispatch} = useContext(RegistrationFormContext);

  const joinWeddingFestival = () => {
    if (participant == null) {
      return;
    }
    dispatch({type: ActionTypesEnum.setOverlay, payload: true});
    SendConfirmationLetter(participant.key, values)
      .then((result) => dispatch({type: ActionTypesEnum.setInfo, payload: 'Vakarinės dalies dalyvavimo forma nusiūsta!'}))
      .catch((error) => dispatch({type: ActionTypesEnum.setError, error}));
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
        <div className='a-additional-info'>Formą galite užpildyti/keisti iki birželio 1 d.</div>
      </div>
    </React.Fragment>
  ); 
}