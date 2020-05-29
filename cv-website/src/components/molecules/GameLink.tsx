import React from 'react';
import { IconSprite } from '../atoms/IconSprite';

const LinksSrc = [
    'images/itchio.png',
    'images/GGJ.png',
    'images/google_play.png'
];

type GameLinkProps = {
    redirectUrl: string;
    type: number;
}

export const GameLink: React.FC<GameLinkProps> = ({ type, redirectUrl }) => {
    const redirectToBlank = (url: string) => {
        window.open(url, '_blank');
    }

    const linkSrc = LinksSrc[type];

    return (
        <div className='m-game-link' onClick={() => redirectToBlank(redirectUrl)}>
            <div className='m-game-link__img'>
                <img src={linkSrc} alt="none" />
            </div>
            <IconSprite name='download' />
        </div>
    );
}