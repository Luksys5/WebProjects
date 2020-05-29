import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
// import { LazyLoadImage } from 'react-lazy-load-image-component';

type BgImageProps = RouteComponentProps;
export const BackgroundImage: React.FC<BgImageProps> = ({ location }) => {
    const blur = location.pathname !== '/';
    // const placeholderSrc = 'images/background/1367-treshold.png';
    return (
        <div
            className={`a-bg-image ${blur ? 'a-bg-image--blur': ''}`}
            // style={{ backgroundImage: `url('images/main-bg-loaded.png')`}}
        >
            {/* <LazyLoadImage
                alt="none"
                src="images/background/bg-4096.png"
                effect={"blur"}

                // srcSet={
                //     // "images/background/bg-4096.png 4096w,"+
                //     "images/background/bg-1920.png 1920w,"+
                //     "images/background/bg-1367.png 1367w,"+ // looks too much zoomed in
                //     "images/background/bg-768.png 768w,"+
                //     "images/background/bg-412.png 412w"
                // }
            /> */}
        </div>
    );
}

export default withRouter(BackgroundImage);