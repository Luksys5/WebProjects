import React, { useState, useReducer, useContext } from 'react';
import Cookie from 'js-cookie';
import { TextField } from '../Atoms/InputField/variants/TextField';
import { Button } from '../Atoms/Button';
import { Authenticate } from '../../../services/services';
import { withRouter, RouteComponentProps } from 'react-router';
import { RegistrationFormContext, ActionTypesEnum } from '../../App';
import { IParticipant } from '../../../types/Participant';

const Authentication: React.StatelessComponent<RouteComponentProps> = ({ history }) => {
  const [codeValue, setCodeValue] = useState('');
  const { dispatch }  = useContext(RegistrationFormContext);
  const [error, setError] = useState('');

  const changeCodeValue = (name: string, title: string, value: string) => {
    setCodeValue(value);
  }

  const authenticate = async() => {
    Authenticate(codeValue)
      .then((participant: IParticipant) => {
        dispatch({type: ActionTypesEnum.setToken, payload: codeValue});
      })
      .catch(error => setError("Kodas netinkamas, patikrinkite!"));
  }
  
  return (
    <React.Fragment >
      <TextField
        name='authenticationInput'
        title={'Jei turite kodą identifikuokites'}
        onChange={changeCodeValue}
        placeHolder='Kodą rašykite čia'
        error={error}
        value=''
      />

      <Button title='Tikrinti kodą' buttonProps={{name: 'authentication-button', onClick: authenticate}} />
    </React.Fragment>
  );
}

export default withRouter(Authentication);