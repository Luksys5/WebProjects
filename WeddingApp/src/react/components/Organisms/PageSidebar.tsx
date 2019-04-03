import * as React from 'react';
import { map } from 'lodash';
import Sidebar from '../../../Data/Sidebar';
import { NavLink } from 'react-router-dom';
import { ISidebarItem } from '../../../Types/Sidebar';

export const PageSidebar = () => {
    return (
        <div className='o-page-sidebar'>
        {
            map(Sidebar, (item: ISidebarItem, index:number) =>
                <NavLink
                  key={index}
                  className='o-page-sidebar__item'
                  activeClassName='o-page-sidebar__item active'
                  to={{pathname: item.path }}
                >
                  {item.title}
                </NavLink>
            )
        }
        </div>
    );
}