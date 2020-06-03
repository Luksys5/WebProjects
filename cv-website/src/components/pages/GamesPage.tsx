import React from 'react';
import Card from '../molecules/Card';
import { Carousel } from '../organisms/Carousel';
import { useQuery } from '@apollo/react-hooks';
import { GET_GAMES_QUERY } from '../../graphqlApi/queries/GamesQuery';
import { Loader } from '../atoms/Loader';
import { GamesQuery } from '../../graphqlApi/types/Queries';
import { GraphError } from '../atoms/GraphError';
import { IconSprite } from '../atoms/IconSprite';

export const GamesPage: React.FC = () => {
    const { loading, error, data } = useQuery<GamesQuery>(GET_GAMES_QUERY);

    return (
        <Card
            lightHeader={true}
            className="p-games"
            contentClassName="p-games__content"
            links={[
                <IconSprite key={0} data-delay-show="500" data-tip="Major updates on fb" onClick={() => window.open('https://www.facebook.com/UniqPointStudio/', '_blank')} noWrapper={false} name="fb" />,
                <IconSprite key={1} data-delay-show="500" data-tip="Major updates on twitter" onClick={() => window.open('https://twitter.com/point_uniq', '_blank')} noWrapper={false} name="twitter" />,
                <IconSprite key={2} data-delay-show="500" data-tip="Major updates on insta" onClick={() => window.open('https://www.instagram.com/uniquepointstudio/', '_blank')} noWrapper={false} name="instagram" />,
                <IconSprite key={3} data-delay-show="500" data-tip="Check out my stream" onClick={() => window.open('https://www.twitch.tv/uniquepointstudio', '_blank')} noWrapper={false} name="twitch" />,
                <IconSprite key={4} data-delay-show="500" data-tip="Become my patreon!" onClick={() => window.open('https://www.patreon.com/user', '_blank')} noWrapper={false} name="patreon" />,
            ]}
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

