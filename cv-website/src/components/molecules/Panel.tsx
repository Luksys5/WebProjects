import React from 'react';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import { Image } from './Image';

type PanelProps = RouteComponentProps & {
    title: string;
    texts?: string[];
    imageSrc?: string;
    linkUrl?: string;
    imageUrl?: string;
    position: 'left' | 'center';
    size: 'full' | 'half';
    onClick?: () => void;
}

const Panel: React.FC<PanelProps> = ({ history, title, texts, imageSrc, imageUrl, linkUrl, position, size, onClick}) => {

    const redirectToLink = (url: string) => {
        history.push(url);
    }

    const onImageClick = () => {
        if (onClick) {
            onClick();
        }
        redirectToLink(imageUrl as string);
    }

    return (
        <div
            className={`m-panel m-panel--${position} m-panel--size-${size}`}
        >
            <header className='m-panel__header'>
                <h2 className='h2'>
                    { title }
                </h2>
            </header>

            <div className='m-panel__text'>
                { texts && texts.map((text, index) => 
                    <p key={index}>
                        { text }
                    </p>
                )}
            </div>

            {
                imageSrc && imageUrl &&
                    <div className='m-panel__img'>
                        <Image
                            src={imageSrc}
                            onClick={onImageClick}
                        />
                    </div>

            }

            { linkUrl &&
                <Link className='m-panel__link' to={linkUrl} onClick={onClick}>
                    Learn More
                </Link>
            }

        </div>
    );
}

export default withRouter(Panel);