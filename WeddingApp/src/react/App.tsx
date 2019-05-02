import React, { useState } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { WeddingTemplate } from './components/Templates/WeddingTemplate';
import { Switch, Route, Redirect } from 'react-router';
import { ContentPage } from './components/Organisms/ContentPage';
import AboutParagraphs from '../Data/About';
import FestivalParagraphs from '../Data/Festival';
import CeremonyParagraphs from '../Data/Ceremony';
import { RegistrationPage } from './components/Organisms/RegistrationPage';

export const RegistrationFormContext = React.createContext({
  values: {},
  setValues: (value: any) => {}
});

export const App = () => {
  const [values, setValues] = useState({}); 
  return (
  <RegistrationFormContext.Provider value={{values, setValues}}>
    <BrowserRouter>
      <WeddingTemplate>
        <Switch>
          <Route path="/about" component={() => <ContentPage content={AboutParagraphs} title="Apie" />} />
          <Route path="/festival" component={() => <ContentPage content={FestivalParagraphs} title="Festivalis" />} />
          <Route path="/ceremony" component={() => <ContentPage content={CeremonyParagraphs} title="Ceremonija" />} />
          <Route path="/registry" component={() => <RegistrationPage title="Švente ir Registracija" /> } />
          <Route path="/" render={() => <Redirect to='/about' />} />
        </Switch>
      </WeddingTemplate>
    </BrowserRouter>
  </RegistrationFormContext.Provider>
  );  
};

export default App;
