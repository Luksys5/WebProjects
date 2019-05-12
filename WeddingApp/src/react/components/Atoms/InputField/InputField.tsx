
import React, { useContext } from 'react';
import { IRegField } from '../../../../types/RegField';
import { RegistrationFormContext, ActionTypesEnum } from '../../../App';
import { FieldVariants } from './variants';


export const InputField: React.FunctionComponent<IRegField> = (props) => {
  const { type, name } = props; 
  const { state: {values}, dispatch } = useContext(RegistrationFormContext);
  if(!type) {
    return null;
  }
  
  const updateValue = (name: string, title: string, updateValue: string) => {
    const updateProperty = {[name]: { name: name, title: title, value: updateValue }};
    dispatch({type: ActionTypesEnum.setValues, payload: updateProperty});
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