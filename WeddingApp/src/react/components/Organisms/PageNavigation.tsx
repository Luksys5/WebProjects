import * as React from 'react';
import { map } from 'lodash';
import Navigation from '../../../Data/Navigation';
import { NavLink } from 'react-router-dom';
import { INavigationItem, NavItemTypesEnum } from '../../../Types/Navigation';

export const PageNavigation: React.StatelessComponent = () => {
  return (
      <div className='o-page-sidebar'>
      {
          map(Navigation, (item: INavigationItem, index:number) =>
            item.type === NavItemTypesEnum.Navigation ? (
              <NavLink
                key={index}
                className='o-page-sidebar__item'
                activeClassName='o-page-sidebar__item active'
                to={{pathname: item.path }}
              >
                {item.title}
              </NavLink>
            ) : (
              <a key={index} className='o-page-sidebar__item nav-link' href="#footer">{item.title}</a>
            )
          )
      }
      </div>
  );
}