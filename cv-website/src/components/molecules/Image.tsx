import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

type ImageProps = {
    height: number;
    src: string;
    placeholderSrc: string;
    credit?: string;
    creditUrl?: string;
}

export const Image: React.FC<ImageProps> = ({ height, src, placeholderSrc, credit, creditUrl }) => {
    return (
        <div className="m-image">
            <LazyLoadImage
                alt="none"
                className="lazyload"
                src="images/background/me-1920.png"
                effect="blur"
            />

            <div className="m-image__credit">
                <a href={creditUrl}>
                    { credit }
                </a>

            </div>
        </div>
    );
}