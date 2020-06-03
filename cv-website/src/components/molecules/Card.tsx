import React, { useContext, useEffect } from 'react';
import ReactTooltip from 'react-tooltip';
import { withRouter, RouteComponentProps } from 'react-router';
import { StorageContext } from '../../storage/StorageContext';

type CardProps = RouteComponentProps & {
    contentClassName?: string;
    className?: string;
    lightHeader?: boolean
    credit?: () => JSX.Element;
    links?: JSX.Element[];
};

const Card: React.FC<CardProps> = ({ children, className, contentClassName, lightHeader, credit, links }) => {
    const { navTitle } = useContext(StorageContext);

    return (
        <div className={`m-card ${className}`}>
            <header className={`m-card__header m-card__header--${lightHeader ? 'light' : 'dark'}`}>
                <h1 className="h1">{ navTitle }</h1>
            </header>
            <div className={`m-card__content ${contentClassName}`}>
                { children }
            </div>
            { links &&
                <div className="m-card__links">
                    { links }
                </div>
            }
            { credit &&
                <div className="m-card__credit">
                    { credit() }
                </div>
            }
        </div>
    );
}

export default withRouter(Card);