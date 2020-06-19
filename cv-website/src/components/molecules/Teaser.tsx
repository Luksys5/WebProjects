import React from 'react';
import { CarouselItemType } from '../organisms/Carousel';
import { GameLink } from './GameLink';
import { Like } from '../../graphqlApi/types/Like';
import { LikeGame } from '../atoms/LikeGame';
import { IconSprite } from '../atoms/IconSprite';

type TeaserProps = CarouselItemType & {
    likes: Like[];
}

enum LikeTypes {
    Hot = 0,
    ThumbsUp = 1,
    Love = 2
}

type DeviceValue = "0" | "1";
type DeviceName = "adb" | "pc";

const devicesNames =  {
    "0": "adb",
    "1": "pc"
}

export const Teaser: React.FC<TeaserProps> = ({ id, imgName, title, description, links, colorTheme, devices, likes }) => {
    const gameLikes = likes.find(like => like.targetId === id && like.type === LikeTypes.Hot)?.count;

    const renderDevices = () => {
        if (devices && devices.length > 0) {
            const multipleDevice: DeviceValue[] = devices.split(',') as DeviceValue[];
            if (multipleDevice.length > 1) {
                return multipleDevice.map(
                    (device: DeviceValue, index) => <IconSprite key={index} name={devicesNames[device] as DeviceName} />
                );
            }
            const firstDevice: DeviceValue = devices as DeviceValue;
            return <IconSprite name={devicesNames[firstDevice] as DeviceName} /> 
        }
        return null;
    }

    return (
        <div className="m-teaser">
            <div className="m-teaser__img">
                <img src={`images/games/${imgName}`} alt="none" />
                <div className="m-teaser__devices">
                    { renderDevices() }
                </div>
                <div className="m-teaser__likes">
                    <LikeGame id={""} targetId={id} type={0} count={gameLikes || 0} /> 
                </div>
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