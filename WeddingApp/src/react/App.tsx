import React, { useReducer } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { WeddingTemplate } from './components/Templates/WeddingTemplate';
import { Switch, Route, Redirect } from 'react-router';
import { ContentPage } from './components/Organisms/ContentPage';
import { RegistrationPage } from './components/Organisms/RegistrationPage';
import AboutParagraphs from '../data/About';
import AboutCityParagraphs from '../data/AboutCity';
import FestivalParagraphs from '../data/Festival';
import Contacts from '../data/Contacts';
import CeremonyParagraphs from '../data/Ceremony';
import { isAuthenticated, getInitialValues } from './Authentication';
import { RegistrationFields } from './components/Molecules/RegistrationFields';
import Authentication from './components/Molecules/Authentication';
import { IContextState } from '../types/ContextState';
import Festival from '../data/Festival';
import { UpdateCookieProperty } from './UpdatePropertyCookie';

export const RegistrationFormContext = React.createContext({
  state: {} as IContextState,
  dispatch: ({}: any) => {}
});

export enum ActionTypesEnum {
  setValues = "setValues",
  setParticipant = "setParticipant",
  setError = "setError",
  setInfo = "setInfo",
  setOverlay = "setOverlay"
}

export enum CookieNamesEnum {
  RegistrationParticipant = 'registrationParticipant',
  FieldValues = 'FieldValues',
}

export const App = () => {
  const reducer = (state: any, action: any) => {
    switch(action.type) {
      case ActionTypesEnum.setValues:
        const stateValues = Object.assign(state.values, action.payload);
        const updatedState: IContextState = Object.assign({} , state, { values: stateValues });
        UpdateCookieProperty(CookieNamesEnum.FieldValues, updatedState.values)
        return updatedState;
      case ActionTypesEnum.setParticipant:
        UpdateCookieProperty(CookieNamesEnum.RegistrationParticipant, action.payload);
        return Object.assign({}, state, { participant: action.payload, overlay: false });
      case ActionTypesEnum.setError:
        return Object.assign({}, state, { error: action.payload, overlay: false });
      case ActionTypesEnum.setInfo:
        return Object.assign({}, state, { info: action.payload, overlay: false });
      case ActionTypesEnum.setOverlay:
        return Object.assign({}, state, { overlay: action.payload });
      default: break;
    }
  }
  const [state, dispatch] = useReducer(reducer, getInitialValues());

  const AuthenticateRegistration = (): JSX.Element => {
    return state.participant || isAuthenticated() ? 
        <RegistrationPage content={Festival} formTitle="Registracija" contentTitle="Švente">
          <RegistrationFields /> 
          <ContentPage additionalClassName='no-background' content={Festival} title="Švente" /> 
        </RegistrationPage>
        :
        <RegistrationPage content={Festival} formTitle="Registracija" contentTitle="Švente">
          <Authentication /> 
        </RegistrationPage>
  }

  return (
  <RegistrationFormContext.Provider value={{state, dispatch}}>
    <BrowserRouter>
      <WeddingTemplate>
        <Switch>
          <Route path="/about" component={() => <ContentPage content={AboutParagraphs} title="Apie" />} />
          <Route path="/festival" component={() => <ContentPage content={FestivalParagraphs} title="Festivalis" />} />
          <Route path="/ceremony" component={() => <ContentPage content={CeremonyParagraphs} title="Ceremonija" />} />
          <Route path="/registry" component={() => AuthenticateRegistration() } />
          <Route path="/aboutCity" component={() => <ContentPage content={AboutCityParagraphs} title="Apie Anykščius" />} />
          <Route path="/contacts" component={() => <ContentPage content={Contacts} title="Kontaktai" />} />
          <Route path="/" render={() => <Redirect to='/about' />} />
        </Switch>
      </WeddingTemplate>
    </BrowserRouter>
  </RegistrationFormContext.Provider>
  );  
};

export default App;
