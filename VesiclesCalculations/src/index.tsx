import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import { hot } from 'react-hot-loader';
import { HashRouter, Route, Redirect } from 'react-router-dom';

import './index.scss';



const AppComponent = (): any => {
    return(
        ReactDOM.render(
            <HashRouter>
                <div>
                    <Redirect exact from='/' to='/Home' />
                    <Route exact path='/Home' render={ () => <App currentSectionName={ 'Home' } /> } />
                    <Route exact path='/lipidVolume' render={ () => <App currentSectionName={ 'Lipid volume calculator' } /> } />
                    <Route exact path='/molWeight' render={ () => <App currentSectionName={ 'Molecular weight calculator' } /> } />
                    <Route exact path='/custom' render={ () => <App currentSectionName={ 'vescalc' } /> } />
                </div>
            </HashRouter>
            ,document.getElementById('vesiclesCalcs-root')
        )
    );
}


export default hot(module)(AppComponent());