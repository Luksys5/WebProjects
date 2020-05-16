import React from 'react';
import Panel from '../molecules/Panel';
import texts from '../../Texts';

type HomePageProps = {
}

export const HomePage: React.SFC<HomePageProps> = () => {
    return (
        <div className='p-home'>
            <div className='p-home__panels'>
                <Panel title="About me" texts={texts.aboutMeSummary} position="left" size="full"  linkUrl="/about" />
                <Panel title="News!" position="center" size="half" imageSrc="images/games/cyberfix.png" imageUrl="/games?$id=1" />
            </div>
        </div>
    );
} 