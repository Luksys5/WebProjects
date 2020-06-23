import React, { useContext } from 'react';
import Card from '../molecules/Card';
import { Carousel } from '../organisms/Carousel';
import { useQuery } from '@apollo/react-hooks';
import { GET_GAMES_QUERY } from '../../graphqlApi/queries/GamesQuery';
import { Loader } from '../atoms/Loader';
import { GamesQuery } from '../../graphqlApi/types/Queries';
import { GraphError } from '../atoms/GraphError';
import { IconSprite } from '../atoms/IconSprite';
import { FBContext } from '../../storage/FBContext';
import { StorageContext } from '../../storage/StorageContext';

const links = [
    {
        "data-delay-show": "500",
        "data-tip": "Major updates on fb!",
        "url": "https://www.facebook.com/UniqPointStudio/",
        "noWrapper": false,
        "name": "fb"
    },
    {
        "data-delay-show": "500",
        "data-tip": "Major updates on twitter",
        "url": "https://twitter.com/point_uniq",
        "noWrapper": false,
        "name": "twitter"
    },
    {
        "data-delay-show": "500",
        "data-tip": "Major updates on insta!",
        "url": "https://www.instagram.com/uniquepointstudio/",
        "noWrapper": false,
        "name": "instagram"
    },
    {
        "data-delay-show": "500",
        "data-tip": "Check out my stream!",
        "url": "https://www.twitch.tv/uniquepointstudio",
        "noWrapper": false,
        "name": "twitch"
    },
    {
        "data-delay-show": "500",
        "data-tip": "Become my patreon!",
        "url": "https://www.patreon.com/uniqpointstudio",
        "noWrapper": false,
        "name": "patreon"
    },
]

export const GamesPage: React.FC = () => {
    const { loading, error, data } = useQuery<GamesQuery>(GET_GAMES_QUERY);
    const { status } = useContext(FBContext);
    const { setLoginActive } = useContext(StorageContext);

    if (status === 'unknown') {
        setLoginActive(true);
    }

    return (
        <Card
            lightHeader={true}
            className="p-games"
            contentClassName="p-games__content"
            links={
                links.map(
                    (link, index) => 
                        // @ts-ignore
                        <IconSprite
                            key={index}
                            onClick={() => window.open(link.url, '_blank')}
                            {...link}
                        />
                )
            }
        >
            {
                loading && <Loader size="medium" />
            }
            {
                error && <GraphError error={error} message="Couldn't retrieve any games data" />
            }
            {
                data &&
                    <Carousel items={data.games} />
            }
        </Card>
    );
}

