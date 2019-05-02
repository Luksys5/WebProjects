import React from 'react';
import { IRegField } from '../../../../../Types/RegField';

export const TextField: React.StatelessComponent<IRegField> = ({name, className, title, placeHolder, value}) => {
  return <div className='a-text-field'>{title}</div>;
}