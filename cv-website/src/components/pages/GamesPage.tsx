import React from 'react';
import GamesCarousel from '../organisms/GamesCarousel';
import GamesInfo from '../../GamesInfo';
import Card from '../molecules/Card';

export const GamesPage: React.FC = () => {
    return (
        <Card className="p-games">
            <GamesCarousel gamesInfo={GamesInfo} />
        </Card>
    );
}

