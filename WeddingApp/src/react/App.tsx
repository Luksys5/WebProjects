import React, { useState } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { WeddingTemplate } from './components/Templates/WeddingTemplate';
import { Switch, Route, Redirect } from 'react-router';
import { ContentPage } from './components/Organisms/ContentPage';
import { RegistrationPage } from './components/Organisms/RegistrationPage';
import AboutParagraphs from '../data/About';
import FestivalParagraphs from '../data/Festival';
import CeremonyParagraphs from '../data/Ceremony';
import { FieldValue } from '../types/FieldValue';
import { Authentication } from './components/Molecules/Authentication';
import { isAuthenticated } from './Authentication';
import { RegistrationFields } from './components/Molecules/RegistrationFields';

export const RegistrationFormContext = React.createContext({
  values: {} as FieldValue,
  setValues: (value: FieldValue) => {}
});

export const AuthenticateRegistration = (): JSX.Element => {
  return isAuthenticated() ? <RegistrationFields /> : <Authentication />; 
}

export const App = () => {
  const [values, setValues] = useState(); 
  return (
  <RegistrationFormContext.Provider value={{values, setValues}}>
    <BrowserRouter>
      <WeddingTemplate>
        <Switch>
          <Route path="/about" component={() => <ContentPage content={AboutParagraphs} title="Apie" />} />
          <Route path="/festival" component={() => <ContentPage content={FestivalParagraphs} title="Festivalis" />} />
          <Route path="/ceremony" component={() => <ContentPage content={CeremonyParagraphs} title="Ceremonija" />} />
          <Route path="/registry" component={() => <RegistrationPage title="Švente ir Registracija">{ AuthenticateRegistration() }</RegistrationPage> } />
          <Route path="/" render={() => <Redirect to='/about' />} />
        </Switch>
      </WeddingTemplate>
    </BrowserRouter>
  </RegistrationFormContext.Provider>
  );  
};

export default App;
