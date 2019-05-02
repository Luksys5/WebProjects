import React, { useState } from 'react';
import RegistrationFormFields, { RegFieldNamesEnum } from '../../../Data/RegistrationForm';
import { IRegField } from '../../../Types/RegField';
import { RegistrationField } from '../Molecules/RegistrationField';

export interface RegistrationPageProps {
  title: string;
}

export const RegistrationPage: React.StatelessComponent<RegistrationPageProps> = ({title}) => {

  return (
    <div className='o-registration-page'>
      <div className='o-content-page'>
        <div className='o-content-page__frame'>
          <header className='o-content-page__frame__header'>
              <h3>{title}</h3>
          </header>
          {
            // RegistrationFormFields.map((field: IRegField, index) => (
            //   <RegistrationField {...field} />
            // ))
          }
          { 'Dar pildomas'}
        </div>
      </div>
      
    </div>

  );
}