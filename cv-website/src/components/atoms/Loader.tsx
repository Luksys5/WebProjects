import React from 'react';

type LoaderProps = {
    className?: string;
    size: 'small' | 'medium';
    colors?: string[];
}

export const Loader: React.FC<LoaderProps> = ({ colors, className, size }) => {
    const loadingSize = size ? size : "medium"; // medium by default
    return <div className={`loader loader--${loadingSize} ${className}`} />;
}