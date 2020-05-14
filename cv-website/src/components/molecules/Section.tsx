import React from 'react';
import { IconNames, IconSprite } from '../atoms/IconSprite';

type SectionProps = {
    className?: string;
    iconName?: IconNames;
    header: string;
}

export const Section: React.FC<SectionProps> = ({ className, iconName, header, children }) => {
    return (
        <div className={`m-section ${className}`}>
            <div className="m-section__header">
                { iconName && <IconSprite name={iconName} /> }
                <h3 className="h3">{ header }</h3>
            </div>
            <div className="m-section__content">
                { children }
            </div>
        </div>
    )
}