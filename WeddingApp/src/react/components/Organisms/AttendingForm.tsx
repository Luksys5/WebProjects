import React from 'react';

export interface AttendingFormProps {

} 
const FormContext = React.createContext(null);

export const AttendingForm: React.StatelessComponent<AttendingFormProps> = (props) => {
  return (
    <FormContext.Provider value={null}>
      <div className='o-attending-form'>
        

      </div>
    </FormContext.Provider>
  );
}