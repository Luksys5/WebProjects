import React from 'react';
import { IconType } from 'react-icons/lib/iconBase';
import { FaTimesCircle } from 'react-icons/fa';

export interface MessageProps {
  icon: IconType;
  message: string;
  className: string;
  onClose?: () => void;
}

export const Message: React.StatelessComponent<MessageProps> = ({icon, message, className, onClose}) => {
  return (
    <div className={`m-message ${className}`}>
      <div className='m-message__icon'>
        {React.createElement(icon)}
      </div>
      <div className='m-message__text'>
        {message}
      </div>
      <div className='m-message__close' onClick={onClose}>{<FaTimesCircle />}</div>
    </div>
  );
}