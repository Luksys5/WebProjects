import React, { useState, useReducer, useContext } from 'react';
import { TextField } from '../Atoms/InputField/variants/TextField';
import { Button } from '../Atoms/Button';
import { Authenticate } from '../../../services/services';
import { withRouter, RouteComponentProps } from 'react-router';
import { RegistrationFormContext, ActionTypesEnum } from '../../App';
import { IParticipant } from '../../../types/Participant';

const Authentication: React.StatelessComponent<RouteComponentProps> = ({ history }) => {
  const [codeValue, setCodeValue] = useState('');
  const { dispatch }  = useContext(RegistrationFormContext);

  const changeCodeValue = (name: string, title: string, value: string) => {
    setCodeValue(value);
  }

  const authenticate = async() => {
    dispatch({type: ActionTypesEnum.setOverlay, payload: true});
    Authenticate(codeValue)
      .then((participant: IParticipant) => {
        dispatch({type: ActionTypesEnum.setParticipant, payload: participant});
      })
      .catch((error: Error) => dispatch({type: ActionTypesEnum.setError, payload: error.message}));
  }
  
  return (
    <React.Fragment >
      <TextField
        name='authenticationInput'
        title={'Jei turite kodą identifikuokites'}
        onChange={changeCodeValue}
        placeHolder='Kodą rašykite čia'
        error=''
        value=''
      />

      <Button title='Eiti į Registraciją' buttonProps={{name: 'authentication-button', onClick: authenticate}} />
    </React.Fragment>
  );
}

export default withRouter(Authentication);