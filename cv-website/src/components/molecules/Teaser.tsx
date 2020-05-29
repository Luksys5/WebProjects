import React from 'react';
import { CarouselItemType } from '../organisms/Carousel';
import { GameLink } from './GameLink';

export const Teaser: React.FC<CarouselItemType> = ({ imgName, title, description, links, colorTheme }) => {
    return (
        <div className="m-teaser">
                <div className="m-teaser__img">
                    <img src={`images/games/${imgName}`} alt="none" />
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