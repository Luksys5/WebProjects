import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useLocation } from 'react-router-dom';
import { Teaser } from '../molecules/Teaser';
import { Link } from '../../graphqlApi/types/Link';
import { Image } from '../molecules/Image';
import { useQuery } from '@apollo/react-hooks';
import { GET_LIKES_QUERY } from '../../graphqlApi/queries/LikesQuery';
import { LikesQuery } from '../../graphqlApi/types/Queries';
// import { Comments } from './Comments';
const qs = require('qs');

export const ColorThemes = {
    'gray': 'metal-gray',
    'green': 'grass-green',
    'blue': 'stars-blue',
    'brown': 'desert-brown'
}

export type CarouselItemType = {
    id: string;
    imgName: string;
    title: string;
    description: string;
    colorTheme?: 'gray' | 'green' | 'blue' | 'brown';
    originPosition?: 'top-origin' | 'bottom-left-origin' | 'bottom-right-origin';
    devices: string;
    links: Link[];
}

type CarouselProps = {
    items: CarouselItemType[];
}

export const Carousel: React.FC<CarouselProps> = ({ items }) => {
    const { search } = useLocation();
    const { data } = useQuery<LikesQuery>(GET_LIKES_QUERY);
    const parsedPath = qs.parse(search.replace('?$', ''));
    const itemIndex = items.findIndex((currItem) => currItem.id === parsedPath.id);
    const [selectedIndex, setSelectedIndex] = useState<number>(itemIndex > -1 ? itemIndex : 0);
    const item = items[selectedIndex];

    return (
        <div className="o-carousel">
            <TransitionGroup>
                <CSSTransition
                    classNames="teaser-animation"
                    timeout={{enter: 350, exit: 350}}
                    key={selectedIndex}
                >
                    <Teaser likes={data ? data.likes : []} {...item} />
                </CSSTransition>
            </TransitionGroup>
            <div className="o-carousel__items">
                {
                    items.map((currItem, index) => {
                        return (
                            <Image
                                key={index}
                                className={
                                    `o-carousel__items__img ${currItem.originPosition} 
                                    ${index === selectedIndex ? 'o-carousel__items__img--selected' : ''}`
                                }
                                src={`images/games/${currItem.imgName}`}
                                onClick={() => setSelectedIndex(index)}
                            />
                        );
                    })
                }
            </div>

            {/* <Comments /> */}
        </div>
    )
}