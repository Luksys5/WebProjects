import React from 'react';
import { IconSprite } from '../atoms/IconSprite';

export const SocialLinks = () => {
    const redirectToSocial = (url: string) => {
        window.open(url, '_blank');
    }

    return (
        <div className='m-social-links'>
            <IconSprite onClick={() => redirectToSocial('https://www.facebook.com/UniqPointStudio/')} noWrapper={false} name="fb" />
            <IconSprite onClick={() => redirectToSocial('https://twitter.com/point_uniq')} noWrapper={false} name="twitter" />
            <IconSprite onClick={() => redirectToSocial('https://www.instagram.com/uniquepointstudio/')} noWrapper={false} name="instagram" />
            <IconSprite onClick={() => redirectToSocial('https://www.twitch.tv/uniquepointstudio')} noWrapper={false} name="twitch" />
            <IconSprite onClick={() => redirectToSocial('https://www.reddit.com/user/UniqPoint')} noWrapper={false} name="reddit" />
        </div>
    );
}