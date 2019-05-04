import React from 'react';
import map from "lodash/map";
import ContactBlocks from "../../../data/ContactBlocks";
import { IContactBlock } from '../../../types/ContactBlock';
import { ContactBlock } from '../Molecules/ContactBlock';

export const Footer: React.StatelessComponent = () => {
  return (
    <div id='footer' className='o-footer'>
      {
        map(ContactBlocks, (contactBlock: IContactBlock, index: number) => (
          <ContactBlock key={index} icon={contactBlock.icon} text={contactBlock.text} value={contactBlock.value} />
        ))
      }
    </div>
  );
}