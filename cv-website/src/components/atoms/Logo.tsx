import React from 'react';

export const Logo: React.FC = () => {
    return (
        <div className='a-logo'>
            <img className='a-logo__image' src={require('../../assets/images/logo.png')} alt="" />
            <span className='a-logo__text'>Lukas Tutkus</span>
        </div>
    );
}