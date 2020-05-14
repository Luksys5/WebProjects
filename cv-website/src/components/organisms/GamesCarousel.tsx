import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { GameLink } from '../molecules/GameLink';
import { withRouter, RouteComponentProps } from 'react-router';
import { RouteParams } from '../../types/RouteParams';
const qs = require('qs');

export type GameLinkProps = {
    imgSrc: string;
    viewLink: string;
    downloadLink?: string;
}

export type GameInfoProps = {
    title: string;
    details: string;
    imageUrl: string;
    links: GameLinkProps[];
}

type CarouselProps = RouteComponentProps<RouteParams> & {
    gamesInfo: GameInfoProps[];
}

const GamesCarousel: React.FC<CarouselProps> = ({ gamesInfo, location: { search } }) => {
    const parsedPath = qs.parse(search.replace('?$', ''));
    const [selectedIndex, setSelectedIndex] = useState<number>(!!parsedPath.id ? parseInt(parsedPath.id) : 0);
    const selectedGame: GameInfoProps = gamesInfo[selectedIndex];

    return (
        <div className="o-carousel">
            <TransitionGroup>
                <CSSTransition
                    classNames="slide"
                    timeout={{enter: 5000, exit: 5000}}
                    key={selectedIndex}
                >
                    <div className="o-carousel__selected">
                        <div className="o-carousel__selected__img">
                            <img src={selectedGame.imageUrl} alt="none" />
                        </div>
                        <div className="o-carousel__selected__sidepane">
                            <h3 className='h3'>
                                { selectedGame.title }
                            </h3>
                            <div className="o-carousel__selected__details">
                                { selectedGame.details }
                            </div>
                            <div className="o-carousel__selected__details">
                                { selectedGame.details }
                            </div>
                            <div className="o-carousel__selected__links">
                                {
                                    selectedGame.links.map(
                                        (link, index) => <GameLink key={index} {...link} />
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </CSSTransition>
            </TransitionGroup>
            <div className="o-carousel__other">
                {
                    gamesInfo.map((gameInfo, index) => {
                        return (
                            <div
                                key={index}
                                className={
                                    `o-carousel__other__img 
                                    ${index === selectedIndex ? 'o-carousel__other__img--selected' : ''}`
                                }
                                onClick={() => setSelectedIndex(index)}
                            >
                                <img src={gameInfo.imageUrl} alt="none" />
                            </div>
                        );
                    })
                }
            </div>

        </div>
    )
}

export default withRouter(GamesCarousel);