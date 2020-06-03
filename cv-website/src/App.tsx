import React from 'react';
import './style/App.scss';
import { BrowserRouter } from 'react-router-dom';
import { BackgroundContent } from './components/templates/BackgroundContent';
import AppRouteTransitions from './AppRouteTransitions';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { StorageProvider } from './storage/StorageContext';
import { ApolloProvider } from '@apollo/react-hooks';
import { GlobalData } from './GlobalData';
import { ApolloClient } from 'apollo-boost';
import ReactTooltip from 'react-tooltip';

export function App() {
    return (
        <div className="App" >
            <ApolloProvider client={GlobalData.graphqlClient as ApolloClient<any>}>
                <BrowserRouter>
                    <StorageProvider>
                        <ReactTooltip type="info" effect="solid" place="top" />
                        <BackgroundContent>
                            <AppRouteTransitions />
                        </BackgroundContent>
                    </StorageProvider>
                </BrowserRouter>
            </ApolloProvider>
        </div>
    );
}