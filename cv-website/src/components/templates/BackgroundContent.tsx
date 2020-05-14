import React from 'react';
import BackgroundImage from '../atoms/BackgroundImage';
import { NavigationBar } from '../organisms/NavigationBar';
import { SocialLinks } from '../molecules/SocialLinks';

export const BackgroundContent: React.FC = ({ children }) => {
    return (
        <div className='t-bg-content'>
            <BackgroundImage />
            <NavigationBar />
            <SocialLinks />
            { children }
        </div>
    );

}