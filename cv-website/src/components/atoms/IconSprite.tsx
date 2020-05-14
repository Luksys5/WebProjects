import React from 'react';
import { icons } from './Icons';

export type IconNames = keyof typeof icons;

export interface IconSpriteProps extends React.HTMLAttributes<HTMLSpanElement> {
    name: IconNames;
    className?: string;
    onClick?: (event: React.SyntheticEvent<Element>) => void;
    noWrapper?: boolean;
}

export class IconSprite extends React.Component<IconSpriteProps> {
    public render(): JSX.Element | null {
        const { name, className, onClick, noWrapper, ...spanProps } = this.props;

        if (noWrapper) {
            return icons[name];
        } else if (icons[name]) {
            return (
                <span
                    className={`a-icon ${className} ${name ? 'a-icon--' + name : ''}`}
                    onClick={onClick}
                    {...spanProps}
                >
                    {
                        icons[name]
                    }
                </span>
            );
        }
        return null;
    }
}