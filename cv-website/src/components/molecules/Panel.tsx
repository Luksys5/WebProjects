import React from 'react';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';

type PanelProps = RouteComponentProps & {
    title: string;
    texts?: string[];
    imageSrc?: string;
    linkUrl?: string;
    imageUrl?: string;
    position: 'left' | 'center';
    size: 'full' | 'half';
}

const Panel: React.FC<PanelProps> = ({ history, title, texts, imageSrc, imageUrl, linkUrl, position, size}) => {

    const redirectToLink = (url: string) => {
        history.push(url);
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
                        <img src={imageSrc} alt="none" onClick={() => redirectToLink(imageUrl)} />
                    </div>

            }

            { linkUrl &&
                <Link className='m-panel__link' to={linkUrl}>
                    Learn More
                </Link>
            }

        </div>
    );
}

export default withRouter(Panel);