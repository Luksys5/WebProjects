import React from 'react';

type ButtonProps =  React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button:React.SFC<ButtonProps> = ({children, className, ...otherProps}) => 
  <button
    className={`a-button ${className}`}
    {...otherProps}
  >
    {children}
  </button>

