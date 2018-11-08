import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import configureStore from './store';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { HashRouter, Route} from 'react-router-dom';
import { CookiesProvider} from 'react-cookie';

import './index.scss';
require('../assets/favicon.ico');

const AppComponent = (): any => {
    return(
        ReactDOM.render(
            <CookiesProvider>
                <Provider store={ configureStore() }>
                    <HashRouter>
                        <Route path='/' render={ ( { history, location })=> <App history={history} location={location} />}/>
                    </HashRouter>
                </Provider>
            </CookiesProvider>,
            document.getElementById('vesiclesCalcs-root')
        )
    );
}


export default hot(module)(AppComponent());