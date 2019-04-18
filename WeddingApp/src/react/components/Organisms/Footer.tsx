import React from 'react';
import map from "lodash/map";
import ContactBlocks from "../../../Data/ContactBlocks";
import { IContactBlock } from '../../../Types/ContactBlock';
import { ContactBlock } from '../Molecules/ContactBlock';

export const Footer = () => {
  return (
    <div className='o-footer'>
      {
        map(ContactBlocks, (contactBlock: IContactBlock, index: number) => (
          <ContactBlock key={index} icon={contactBlock.icon} text={contactBlock.text} value={contactBlock.value} />
        ))
      }
    </div>
  );
}