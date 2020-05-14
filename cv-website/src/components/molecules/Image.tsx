import React from 'react';

type ImageProps = {
    credit: string;
    url: string;
}

export const Image: React.FC<ImageProps> = ({ credit, url }) => {
    return (
        <div className="m-image">
            <img src={url} alt="none" />
            <div className="m-image__credit">
                { credit }
            </div>
        </div>
    );
}