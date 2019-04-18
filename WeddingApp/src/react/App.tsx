import * as React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { WeddingTemplate } from './components/Templates/WeddingTemplate';
import { Switch, Route, Redirect } from 'react-router';
import { ContentPage } from './components/Organisms/ContentPage';
import AboutParagraphs from '../Data/About';
import FestivalParagraphs from '../Data/Festival';
import CeremonyParagraphs from '../Data/Ceremony';
import { RegistrationPage } from './components/Organisms/RegistrationPage';

export const App = () => (
  <BrowserRouter>
    <WeddingTemplate>
      <Switch>
        <Route path="/about" component={() => <ContentPage content={AboutParagraphs} title="Apie" />} />
        <Route path="/festival" component={() => <ContentPage content={FestivalParagraphs} title="Festivalis" />} />
        <Route path="/ceremony" component={() => <ContentPage content={CeremonyParagraphs} title="Ceremonija" />} />
        <Route path="/registry" component={() => <RegistrationPage /> } />
        <Route path="/" render={() => <Redirect to='/about' />} />
      </Switch>
    </WeddingTemplate>
  </BrowserRouter>
);

export default App;
