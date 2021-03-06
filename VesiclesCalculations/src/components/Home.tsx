import * as React from 'react';

const Home = () => {
    return (
        <div className='home-container'>
            <img src={ require('../../assets/logo.png') } id="logo"/> 
            <div className='home__text'>
                <div className='body'>
                    <h2>About</h2>
                    <p className='body__about'>
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
                </div>
            </div>
        </div>
    );
};   

export default Home;