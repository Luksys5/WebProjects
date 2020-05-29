import React, { useState } from 'react';
import { LazyLoadImage, LazyLoadImageProps } from 'react-lazy-load-image-component';

type ImageProps = LazyLoadImageProps & {
    className?: string;
    src: string;
    credit?: string;
    creditUrl?: string;
    onClick?: () => void;
}

export const Image: React.FC<ImageProps> = ({ className, onClick, src, credit, creditUrl, ...lazyLoadProps }) => {
    return (
        <div
            className={`m-image ${className}`}
            onClick={onClick}
        >
            <LazyLoadImage
                alt="none"
                className="lazyload"
                src={src}
                effect="blur"
                {...lazyLoadProps}
            />

            { credit && creditUrl &&
                <div className="m-image__credit">
                    <a href={creditUrl}>
                        { credit }
                    </a>
                </div>
            }
        </div>
    );
}