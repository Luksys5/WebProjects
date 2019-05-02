import React, { useContext, ChangeEvent } from 'react';
import { IRegField } from '../../../Types/RegField';
import { RegistrationFormContext } from '../../App';

export const RegistrationField = ({name, className, type, title, placeHolder, value}: IRegField) => {
   const {values, setValues} = useContext(RegistrationFormContext);
  
  const updateValue = (name: string, title: string, event: any) => {
    const updatedValues = Object.assign({}, values, {[name]: { name: name, title: title, value: event.target.value }});
    setValues(updatedValues);
  }

  return (
    <div className='o-registration-page__field'>
      <input type={type} name={name} className={className} placeholder={placeHolder} onChange={(event) => updateValue(name, title, event)} />
      {title}
    </div>

  );
}