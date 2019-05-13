import React from 'react';
import { IconType } from 'react-icons/lib/iconBase';

export interface ContactBlockProps {
  icon?: IconType;
  text?: string;
  value?: string;
}

export const ContactBlock: React.StatelessComponent<ContactBlockProps> = (props) => {
  const { icon, text, value } = props;
  return (
    <div className='m-contact-block'>
      { icon && React.createElement(icon, { className: 'm-contact-block__icon' }) }
      <div className='m-contact-block__text'>{text}</div>
      <div className='m-contact-block__text'>{value}</div>
    </div>
  );
}