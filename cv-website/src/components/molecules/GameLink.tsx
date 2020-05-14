import React from 'react';
import { IconSprite } from '../atoms/IconSprite';
import { GameLinkProps } from '../organisms/GamesCarousel';

export const GameLink: React.FC<GameLinkProps> = ({ imgSrc, viewLink, downloadLink }) => {
    const redirectToBlank = (url: string) => {
        window.open(url, '_blank');
    }

    return (
        <div className='m-game-link'>
            <div className='m-game-link__img'>
                <img src={imgSrc} alt="none" />
            </div>
            <div className="m-game-link__icons">
                <IconSprite name='view' onClick={() => redirectToBlank(viewLink)} />
                { downloadLink &&
                    <IconSprite name='download' onClick={() => redirectToBlank(downloadLink)} />
                }
            </div>
        </div>
    );
}