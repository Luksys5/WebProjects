import React, { useContext, useState } from 'react';
import { Logo } from '../atoms/Logo';
import { Link } from 'react-router-dom';
import { StorageContext, NavTitles } from '../../storage/StorageContext';
import { SocialLinksBar } from '../molecules/SocialLinksBar';

export type NavigationItem = {
    path: string;
    title: string;
}

export const navigationItems: NavigationItem[] = [
    {
        path: '/',
        title: 'Home',
    },
    {
        path: '/about',
        title: 'About me'       
    },
    {
        path: '/experience',
        title: 'Experience'       
    },
    {
        path: '/games',
        title: 'Games'       
    }
];

const Navigation: React.SFC = ({children}) => <nav className='o-navigation'>{ children }</nav>

export const NavigationBar: React.FC = () => { 
    const { navTitle, setNavTitle } = useContext(StorageContext);

    return (
        <Navigation>
            <Logo />
            {
                navigationItems.map((item, index) => {
                    const selected: boolean = navTitle === item.title;
                    return (
                        <Link
                            key={index}
                            className={`o-navigation__item ${selected ? 'o-navigation__item--selected' : ''}`}
                            to={item.path}
                            onClick={() => setNavTitle(item.title)}
                        >
                            {item.title}
                        </Link>
                    );
                })            
            }
{/* 
            <div
                className='o-navigation__item o-navigation__item__contact'
                onMouseEnter={() => setHoverContact(true)}
                onMouseLeave={() => setHoverContact(false)}
                onMouseOver={() => setHoverContact(true)}
                onMouseOut={() => setHoverContact(false)}
            >
                <span>
                    Contact
                </span>
                <SocialLinksBar isActive={hoverContact} />
            </div> */}
        </Navigation>
    );
}