import React from 'react';

export interface ButtonProps {
  title: string;
  buttonProps: any;
}

export const Button: React.StatelessComponent<ButtonProps> = ({title, buttonProps}) => {
  return (
    <button className='a-button' {...buttonProps}>
      {title}
    </button>
  );
}