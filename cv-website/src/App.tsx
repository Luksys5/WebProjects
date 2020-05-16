import React from 'react';
import './style/App.scss';
import { BrowserRouter } from 'react-router-dom';
import { BackgroundContent } from './components/templates/BackgroundContent';
import { StoreProvider } from './StoreProvider';
import AppRouteTransitions from './AppRouteTransitions';
import 'react-lazy-load-image-component/src/effects/blur.css';

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