import React from 'react';
import { TextField } from '../Atoms/InputField/variants/TextField';
import { Button } from '../Atoms/Button';

export const Authentication: React.StatelessComponent = (props) => {

  const authenticate = () => {
    
  }
  
  return (
    <React.Fragment >
      <TextField
        name='auth-text'
        title={'Jei turite kodą identifikuokites'}
        onChange={() => {}}
        placeHolder='Kodą rašykite čia'
        error=''
        value=''
      />

      <Button title='test' buttonProps={{name: 'authentication-button', onClick: () => {}}} />
    </React.Fragment>
  );
}