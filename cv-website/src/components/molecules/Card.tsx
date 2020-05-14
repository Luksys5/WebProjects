import React, { useState, useEffect } from 'react';
import ReactTooltip from 'react-tooltip';
import { navigationItems } from '../organisms/NavigationBar';
import { withRouter, RouteComponentProps } from 'react-router';

type CardProps = RouteComponentProps & {
    className?: string;
};
const Card: React.FC<CardProps> = ({ children, className, location }) => {
    const [title, setTitle] = useState('');
    useEffect(
        () => {
            const item = navigationItems.find(el => el.path !== '/' && location.pathname.match(new RegExp('^' + el.path)));
            setTitle(item ? item.title : '');
        },
        [location.pathname]
    );

    return (
        <div className="m-card">
            <ReactTooltip type="info" effect="solid" place="top" />
            <header className="m-card__header">
                <h1 className="h1">{ title }</h1>
            </header>
            <div className={`m-card__content ${className}`}>
                { children }
            </div>
        </div>
    );
}

export default withRouter(Card);