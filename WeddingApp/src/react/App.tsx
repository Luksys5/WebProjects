import * as React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { WeddingTemplate } from './components/Templates/WeddingTemplate';
import { Switch, Route, Redirect } from 'react-router';
import { ContentPage } from './components/Organisms/ContentPage';
import AboutParagraphs from '../Data/About';

export const App = () => (
  <BrowserRouter>
    <WeddingTemplate>
      <Switch>
        <Route path="/about" component={() => <ContentPage content={AboutParagraphs} />} />
        <Route path="/festival" component={() => <ContentPage content={AboutParagraphs} />} />
        <Route path="/" render={() => <Redirect to='/about' />} />
      </Switch>
    </WeddingTemplate>
  </BrowserRouter>
);

export default App;
