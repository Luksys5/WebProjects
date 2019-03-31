import * as React from 'react';
import './App.css';
import { WeddingTemplate } from './components/Templates/WeddingTemplate';
import { About } from './components/Pages/About';
import { Route } from 'react-router';
import { BrowserRouter as Router } from "react-router-dom";
import { Festival } from './components/Pages/Festival';

class App extends React.Component {
  render() {
    return (
      <Router>
        <WeddingTemplate>
          <Route path="/" exact component={About} />
          <Route path="/about" component={About} />
          <Route path="/festival" component={Festival} />
        </WeddingTemplate>
      </Router>
    );
  }
}

export default App;
