import React from 'react';

type FrameProps = {
    active: boolean;
}

export const Frame: React.FC<FrameProps> = ({ children, active }) =>
    <>
        {children}
        <div className={`a-frame ${active ? 'a-frame--active' : ''}`}>
        </div>
    </>