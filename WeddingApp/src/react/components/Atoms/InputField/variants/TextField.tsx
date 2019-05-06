import React, {useRef} from 'react';
import { FieldProps } from '.';

export const TextField: React.StatelessComponent<FieldProps> = ({name, title, placeHolder, error, value, onChange}) => {
  const inputReference: any = useRef();

  const onBlur = () => {
    onChange(name, title, inputReference.current.value);
  }

  return ( 
    <div className='a-text-field'>
      <div className='a-text-field__title'>{title}</div>
      <input
        ref={inputReference}
        type='text'
        className={`a-text-field__value error ${error ? 'error' : ''}`}
        defaultValue={value}
        placeholder={placeHolder}
        onBlur={onBlur}
      />
      {
        error && 
        <div className='a-text-field__error'>{error}</div>
      }
    </div>
  );
}