import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import configureStore from './store';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';

require('./index.scss');
// @ts-ignore
import(/* webpackMode: "eager" */ '../assets/favicon.ico');

const AppComponent = (): any => {
    return(
        ReactDOM.render(
            <Provider store={ configureStore() }>
                <HashRouter>
                    <Switch>
                        <Redirect exact from='/' to='/Home' />
                        <Route exact path='/Home' component={App} /> } />
                        <Route exact path='/lipidsVolume' component={App} />
                        <Route exact path='/molecularWeight' component={App} />
                        <Route exact path='/projects' component={App} />
                    </Switch>
                </HashRouter>
            </Provider>,
            document.getElementById('vesiclesCalcs-root')
        )
    );
}

export default hot(module)(AppComponent());