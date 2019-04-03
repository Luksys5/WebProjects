import * as React from 'react';
import './App.css';
import { WeddingTemplate } from './components/Templates/WeddingTemplate';
import { About } from './components/Pages/About';
import { Route, Redirect, Switch } from 'react-router';
import { BrowserRouter as Router } from "react-router-dom";
import { Festival } from './components/Pages/Festival';

class App extends React.Component {
  render() {
    return (
      <Router>
          <WeddingTemplate>
            <Switch>
              <Route path="/about" component={About} />
              <Route path="/festival" component={Festival} />
              <Route path="/" render={() => <Redirect to="/about" /> }/>
            </Switch>
        </WeddingTemplate>
      </Router>
    );
  }
}

export default App;
