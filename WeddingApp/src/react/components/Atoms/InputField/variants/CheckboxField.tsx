import React from 'react';
import { IRegField } from '../../../../../Types/RegField';

export const CheckboxField: React.StatelessComponent<IRegField> = ({name, className, title, placeHolder, value}) => {
  return (
    <div className='a-checkbox-field'>
      {title}
    </div>
  );
}