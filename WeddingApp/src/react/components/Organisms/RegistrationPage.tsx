import React, { useState } from 'react';
import RegistrationFormFields from '../../../Data/RegistrationForm';

export const RegistrationPage: React.FunctionComponent = () => {
  const [formValues, setFormValues] = useState(new Array(RegistrationFormFields.length).fill(''));

  const updateValue = (index: number, event: any) => {
    const updatedValues = formValues.slice(0);
    updatedValues[index] = event.target.value;
    setFormValues(updatedValues);
    console.log(updatedValues);

  }

  return (
    <div className='o-registration-page'>
      <div className='o-content-page'>
        {
          RegistrationFormFields.map((field, index) => (
            <div key={index} className='o-registration-page__field'>
              <input type={field.type} name={field.name} className={field.class} onChange={(event) => updateValue(index, event)} />
              {field.title}
              
            </div>
            
          ))
        }
      </div>
      
    </div>

  );
}