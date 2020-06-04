import React from 'react';
import { CarouselItemType } from '../organisms/Carousel';
import { GameLink } from './GameLink';
import { Like } from '../../graphqlApi/types/Like';
import { LikeGame } from '../atoms/LikeGame';

type TeaserProps = CarouselItemType & {
    likes: Like[];
}

enum LikeTypes {
    Hot = 0,
    ThumbsUp = 1,
    Love = 2
}

export const Teaser: React.FC<TeaserProps> = ({ id, imgName, title, description, links, colorTheme, likes }) => {
    const gameLikes = likes.find(like => like.targetId === id && like.type === LikeTypes.Hot)?.count; 
    return (
        <div className="m-teaser">
            <div className="m-teaser__img">
                <img src={`images/games/${imgName}`} alt="none" />
                <div className="m-teaser__likes">
                    <LikeGame id={""} targetId={id} type={0} count={gameLikes || 0} /> 
                </div>
            </div>
            <div className={`m-teaser__details ${colorTheme ? 'm-teaser__details--' + colorTheme : ''}`}>
                <h3 className='h3 m-teaser__details__header'>
                    { title }
                </h3>
                <div className="m-teaser__details__description">
                    { description }
                    <a href={links[0].url} target="_blank">{'More Info...'}</a>
                </div>
                <div className="m-teaser__details__links">
                    {
                        links.map(
                            (link, index) => link.type > -1 && <GameLink key={index} type={link.type} redirectUrl={link.url} />
                        )
                    }
                </div>
            </div>
        </div>
    );
}