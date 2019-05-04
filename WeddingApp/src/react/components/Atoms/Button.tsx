import React from 'react';

export interface ButtonProps {
  title: string;
  buttonProps: any;
}

export const Button: React.StatelessComponent<ButtonProps> = ({title, buttonProps}) => {
  return (<button {...buttonProps}>{title}</button>);
}