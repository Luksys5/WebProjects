import React from 'react';
import { IRegField } from '../../../../../types/RegField';
import { FieldProps } from '.';

export const CheckboxField: React.StatelessComponent<FieldProps> = ({name, className, title, placeHolder, error, value, onChange}) => {

  return (
    <div className='a-checkbox-field'>
      <div
        className={`a-checkbox-field__value ${value ? 'active' : ''} ${error ? 'error' : ''}`}
        onClick={() => onChange && onChange(name, title, !value)}
      ></div>
      <div className='a-checkbox-field__title'>{title}</div>
    </div>
  );
}