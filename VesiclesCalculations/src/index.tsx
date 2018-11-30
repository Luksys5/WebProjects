import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import configureStore from './store';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { HashRouter, Route} from 'react-router-dom';
import { CookiesProvider} from 'react-cookie';
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import {
    faCheck, faBan, faTimesCircle, faInfoCircle, faExclamationCircle, faThumbsUp, faHome, faFlask, faFolder, faQuestionCircle,
    faCopy, faClone, faPaste, faRecycle, faPlusSquare, faDownload, faEnvelope, faCalculator, faArrowLeft, faArrowRight, faPen, faPlusCircle, faSave, faExternalLinkAlt
} from "@fortawesome/free-solid-svg-icons";
import { faCcPaypal, faGooglePlusG, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

library.add(faCheck, faBan, faTimesCircle, faInfoCircle, faExclamationCircle, faThumbsUp, faCcPaypal, faGooglePlusG, faTwitter,
    faFacebook, faHome, faFlask, faFolder, faQuestionCircle, faCopy, faClone, faPaste, faRecycle, faPlusSquare, faDownload, faEnvelope, faCalculator, faArrowLeft,
    faArrowRight, faPen, faPlusCircle, faSave, faExternalLinkAlt
);
dom.watch();

require('./index.scss');
// @ts-ignore
import(/* webpackMode: "eager" */ '../assets/favicon.ico');

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