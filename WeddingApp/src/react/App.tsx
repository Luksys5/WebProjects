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
import { FieldValues } from '../types/FieldValues';
import { isAuthenticated, getRegistrationToken } from './Authentication';
import { RegistrationFields } from './components/Molecules/RegistrationFields';
import Authentication from './components/Molecules/Authentication';
import { IContextState } from '../types/ContextState';
import Festival from '../data/Festival';
import { UpdateCookieProperty } from './UpdatePropertyCookie';

export const RegistrationFormContext = React.createContext({
  state: {} as IContextState,
  dispatch: ({}) => {}
});

export enum ActionTypesEnum {
  setValues = "setValues",
  setToken = "setToken",
  setError = "setError",
  setInfo = "setInfo"
}

export enum CookieNamesEnum {
  RegistrationToken = 'registrationToken',
  FieldValues = 'FieldValues',
}

export const App = () => {
  const initialState: IContextState = { values: {} as FieldValues, token: '', error: '', info: '' };  
  const reducer = (state: any, action: any) => {
    switch(action.type) {
      case ActionTypesEnum.setValues:
        const updatedValues = Object.assign({}, state, { values: action.payload });
        UpdateCookieProperty(CookieNamesEnum.FieldValues, updatedValues.values)
        return updatedValues;
      case ActionTypesEnum.setToken:
        UpdateCookieProperty(CookieNamesEnum.RegistrationToken, action.payload);
        return Object.assign({}, state, { token: action.payload });
      case ActionTypesEnum.setError:
        return Object.assign({}, state, { error: action.payload });
      case ActionTypesEnum.setInfo:
        return Object.assign({}, state, { error: action.payload });
      default: break;
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  const AuthenticateRegistration = (): JSX.Element => {
    return state.token || isAuthenticated() ? 
      <React.Fragment>
        <RegistrationFields /> 
        <ContentPage additionalClassName='no-background' content={Festival} title="Švente" /> 
      </React.Fragment> : <Authentication />; 
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
