import React, { useContext } from 'react';
import BackgroundImage from '../atoms/BackgroundImage';
import { NavigationBar } from '../organisms/NavigationBar';
import { Login } from '../molecules/Login';
import { StorageContext } from '../../storage/StorageContext';
import { Frame } from '../atoms/Frame';

export const BackgroundContent: React.FC = ({ children }) => {
    const { loginActive, loading } = useContext(StorageContext);
    return (
        <div className='t-bg-content'>
            <BackgroundImage />
            <NavigationBar />
            <Frame active={loginActive || loading}>
                <Login active={loginActive} />
                { children }
            </Frame>
        </div>
    );
}