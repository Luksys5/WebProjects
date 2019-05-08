import React, { useState, useReducer } from 'react';
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
import { isAuthenticated, getRegistrationToken } from './Authentication';
import { RegistrationFields } from './components/Molecules/RegistrationFields';
import Authentication from './components/Molecules/Authentication';
import { IContextState } from '../types/ContextState';
import Festival from '../data/Festival';

export const RegistrationFormContext = React.createContext({
  state: {} as IContextState,
  dispatch: ({}) => {}
});

export const App = () => {
  const initialState: IContextState = { values: {} as FieldValue, token: '' };  
  const reducer = (state: any, action: any) => {
    switch(action.type) {
      case 'setValues':
        return Object.assign({}, state, { values: action.payload });
      case 'setToken':
        return Object.assign({}, state, { token: action.payload });
      default: break;
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  const AuthenticateRegistration = (): JSX.Element => {
    return true || state.token ? <RegistrationFields /> : <Authentication />; 
  }

  return (
  <RegistrationFormContext.Provider value={{state, dispatch}}>
    <BrowserRouter>
      <WeddingTemplate>
        <Switch>
          <Route path="/about" component={() => <ContentPage content={AboutParagraphs} title="Apie" />} />
          <Route path="/festival" component={() => <ContentPage content={FestivalParagraphs} title="Festivalis" />} />
          <Route path="/ceremony" component={() => <ContentPage content={CeremonyParagraphs} title="Ceremonija" />} />
          <Route path="/registry" component={() => <RegistrationPage content={Festival} formTitle="Registracija" contentTitle="Švente">{ AuthenticateRegistration() }</RegistrationPage> } />
          <Route path="/" render={() => <Redirect to='/about' />} />
        </Switch>
      </WeddingTemplate>
    </BrowserRouter>
  </RegistrationFormContext.Provider>
  );  
};

export default App;
