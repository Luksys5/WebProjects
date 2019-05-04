import React from 'react';

export interface RegistrationPageProps {
  title: string;
}

export const RegistrationPage: React.StatelessComponent<RegistrationPageProps> = (props) => {
  const { title, children } = props;

  return (
    <div className='o-registration-page'>
      <div className='o-content-page'>
          <header className='o-content-page__header'>
              <h3>{title}</h3>
          </header>
          { children }
      </div>
      
    </div>

  );
}