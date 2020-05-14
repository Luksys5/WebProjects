import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';

type BgImageProps = RouteComponentProps;
export const BackgroundImage: React.FC<BgImageProps> = ({ location }) => {
    const blur = location.pathname !== '/';
    return (
        <div className={`a-bg-image ${blur ? 'a-bg-image--blur': ''}`} style={{ backgroundImage: `url('images/main-bg-loaded.png')`}} />
    );
}

export default withRouter(BackgroundImage);