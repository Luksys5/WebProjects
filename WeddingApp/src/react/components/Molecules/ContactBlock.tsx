import React from 'react';
import { IconType } from 'react-icons/lib/iconBase';
import { IContacts } from '../../../types/ContactBlock';

export interface ContactBlockProps {
  text: string;
  contacts: IContacts[];
}

export const ContactBlock: React.StatelessComponent<ContactBlockProps> = (props) => {
  const { contacts, text } = props;
  return (
    <div className='m-contact-block'>
      <p className='m-contact-block__text'>{text}</p>
      <div className='m-contact-block__contacts'>
        {
          contacts.map(({icon, text, value}, index: number) => 
          <div key={index} className='m-contact'>
              { React.createElement(icon, { className: 'm-contact-block__icon' }) }
              <div className='m-contact-block__text'>{text}</div>
              <div className='m-contact-block__text'>{value}</div>
            </div>
          )
        }
        </div>
    </div>
  );
}