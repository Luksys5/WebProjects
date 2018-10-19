import * as React from 'react';

export const Home: any = (): JSX.Element => {

    return (
    <div className='home-container flex-row'>
        <img src={ require('../../assets/logo.png') } id="logo" className='home__image flex-column'/> 
        <div className='home__text flex-column flex-align'>
            <div className='body'>
                <h2>About</h2>
                <p>
                        Our main mission is to save researchers time by making calculations for
                        liposome preparation and their properties more convenient.
                </p>

                <h2>What Do We Offer</h2>
                <p>Here you will find three types of calculations</p>
                <ol className='listing'>
                    <li>
                        Calculate volumes of lipid solutions 
                    </li>
                    <li>
                        Calculate molecular weight of any composition and size liposome
                    </li>
                    <li>
                        Calculate number of lipids per liposome of any composition and size
                    </li>
                </ol>

                <h2>Tutorial</h2>
                    { React.createElement('iframe', {
                        className: 'youtube-frame',
                        width: "480",
                        height: "240",
                        src: 'https://www.youtube.com/embed/FdCk6K1UeOc',
                        allow: "autoplay; encrypted-media",
                        frameBorder: "0",
                        rel: "0",
                        modestbranding: "1",
                    },
                    ) }
            </div>
        </div>
    </div>
    )
}