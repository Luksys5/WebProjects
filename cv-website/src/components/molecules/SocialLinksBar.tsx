import React from 'react';
import { IconSprite } from '../atoms/IconSprite';

type SocialLinksBarProps = {
    isActive: boolean;
}

export const SocialLinksBar: React.FC<SocialLinksBarProps> = ({ isActive }) => {
    const redirectToSocial = (url: string) => {
        window.open(url, '_blank');
    }

    return (
        <div className={`m-social-bar m-social-bar--${isActive ? 'active' : 'inactive'}`}>
            <div className="m-social-bar__row">
                <h4 className="h4">Find me!</h4>
                <div className="m-social-bar__links">
                    <IconSprite onClick={() => redirectToSocial('https://www.facebook.com/UniqPointStudio/')} noWrapper={false} name="linkedin" />
                    {/* <IconSprite onClick={() => redirectToSocial('https://www.twitch.tv/uniquepointstudio')} noWrapper={false} name="twitch" /> */}
                </div>
            </div>
            <div className="m-social-bar__row">
                <h4 className="h4">Games Social</h4>
                <div className="m-social-bar__links">
                </div>
            </div>
            <div className="m-social-bar__row">
                <h4 className="h4">Patron!</h4>
                <div className="m-social-bar__links">
                    <IconSprite onClick={() => redirectToSocial('https://www.patreon.com/user')} noWrapper={false} name="patreon" />
                </div>
            </div>
            {/* <IconSprite onClick={() => redirectToSocial('https://www.reddit.com/user/UniqPoint')} noWrapper={false} name="reddit" /> */}
        </div>
    );
}