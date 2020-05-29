import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StorageContext, NavTitles } from '../../storage/StorageContext';

export const Logo: React.FC = () => {
    const { setNavTitle } = useContext(StorageContext);
    return (
        <Link to='/' className='a-logo' onClick={() => setNavTitle(NavTitles.home)}>
            <img className='a-logo__image' src={require('../../assets/images/logo.png')} alt="" />
            <span className='a-logo__text'>Lukas Tutkus</span>
        </Link>
    );
}