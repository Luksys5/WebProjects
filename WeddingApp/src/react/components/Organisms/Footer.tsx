import React from 'react';
import map from "lodash/map";
import ContactBlocks from "../../../data/ContactBlocks";
import { IContactsBlock } from '../../../types/ContactBlock';
import { ContactBlock } from '../Molecules/ContactBlock';

export const Footer: React.StatelessComponent = () => {
  return (
    <div id='footer' className='o-footer'>
      {
        map(ContactBlocks, (contactBlock: IContactsBlock, index: number) => (
          <ContactBlock key={index} text={contactBlock.text} contacts={contactBlock.contacts} />
        ))
      }
    </div>
  );
}