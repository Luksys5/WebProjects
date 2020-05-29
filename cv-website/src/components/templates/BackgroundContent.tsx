import React from 'react';
import BackgroundImage from '../atoms/BackgroundImage';
import { NavigationBar } from '../organisms/NavigationBar';

export const BackgroundContent: React.FC = ({ children }) => {
    return (
        <div className='t-bg-content'>
            <BackgroundImage />
            <NavigationBar />
            { children }
        </div>
    );

}