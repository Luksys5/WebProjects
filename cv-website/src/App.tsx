import React from 'react';
import './style/App.scss';
import { BrowserRouter, Switch } from 'react-router-dom';
import { BackgroundContent } from './components/templates/BackgroundContent';
import { StoreProvider } from './StoreProvider';
import AppRouteTransitions from './AppRouteTransitions';

export function App() {
    return (
        <div className="App" >
            <StoreProvider>
                <BrowserRouter>
                    <BackgroundContent>
                            <AppRouteTransitions />
                    </BackgroundContent>
                </BrowserRouter>
            </StoreProvider>
        </div>
    );
}