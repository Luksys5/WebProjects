
import React, { useContext, ChangeEvent } from 'react';
import { IRegField } from '../../../../types/RegField';
import { RegistrationFormContext } from '../../../App';
import { FieldVariants } from './variants';


export const InputField: React.FunctionComponent<IRegField> = (props) => {
  const { type, name } = props; 
  const { values, setValues } = useContext(RegistrationFormContext);
  if(!type) {
    return null;
  }
  
  const updateValue = (name: string, title: string, updateValue: string) => {
    const updatedValues = Object.assign(
      {},
      values,
      {[name]: { name: name, title: title, value: updateValue }}
    );
    setValues(updatedValues);
  }

  return React.createElement(
    FieldVariants[type],
    {
      ...props,
      value: values && values[name] && values[name].value,
      error: values && values[name] && values[name].error,
      onChange: updateValue
    },
    null
  );
}