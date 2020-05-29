import React, { useContext } from 'react';
import Panel from '../molecules/Panel';
import texts from '../../Texts';
import { StorageContext, NavTitles } from '../../storage/StorageContext';
import { useQuery } from '@apollo/react-hooks';
import { GET_LATEST_GAME_QUERY } from '../../graphqlApi/queries/LatestGameQuery';
import { Loader } from '../atoms/Loader';
import { GraphError } from '../atoms/GraphError';
import { LatestGameQuery } from '../../graphqlApi/types/Queries';

type HomePageProps = {
}

export const HomePage: React.SFC<HomePageProps> = () => {
    const { setNavTitle } = useContext(StorageContext);
    const { loading, error, data } = useQuery<LatestGameQuery>(GET_LATEST_GAME_QUERY );

    return (
        <div className='p-home'>
            <div className='p-home__panels'>
                { loading && <Loader size="medium" /> }
                { error && <GraphError message={error.message} error={error} hide={true} /> }

                <Panel
                    title="About me"
                    texts={texts.aboutMeSummary}
                    position="left"
                    size="full"
                    linkUrl="/about"
                    onClick={() => setNavTitle(NavTitles.aboutMe)}
                />

                { data && 
                    <Panel
                        title="News!"
                        position="center"
                        size="half"
                        imageSrc={`images/games/${data.game.imgName}`}
                        imageUrl={`/games?$id=${data.game.id}`}
                        onClick={() => setNavTitle(NavTitles.games)}
                    />
                }
            </div>
        </div>
    );
} 