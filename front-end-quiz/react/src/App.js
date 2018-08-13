import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import store from "./store";
import BrowsePage from './components/BrowsePage';
import ViewItem from "./components/ViewItem";
import './style/App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Redirect exact from='/' to='/browseItems' />
            <Route exact path='/browseItems/:start?/:limit?' component={BrowsePage} />
            <Route path='/viewItem/:itemId?' component={ViewItem} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
