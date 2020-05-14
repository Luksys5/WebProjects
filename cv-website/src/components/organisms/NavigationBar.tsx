import React, { useContext } from 'react';
import { Logo } from '../atoms/Logo';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../StoreProvider';

type NavigationItem = {
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
    const { setTitle } = useContext(StoreContext);
    return (
        <Navigation>
            <Logo />
            {
                navigationItems.map((item, index) => {
                    return (
                        <Link
                            key={index}
                            className='o-navigation__item'
                            to={item.path}
                            onClick={() => setTitle(item.title)}
                        >
                            {item.title}
                        </Link>
                    );
                })            
            }
        </Navigation>
    );
}