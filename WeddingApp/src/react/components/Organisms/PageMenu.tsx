import * as React from 'react';
import { map } from 'lodash';
import Menu from '../../../Data/Menu';

export const PageMenu = () => {
    return (
        <div className='o-page-menu'>
        {
            map(Menu, item =>
                <div className='o-page-menu__item'>{item.title}</div>
            )
        }
        </div>
    );
}