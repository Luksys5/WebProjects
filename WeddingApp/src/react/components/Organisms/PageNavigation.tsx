import * as React from 'react';
import { map } from 'lodash';
import Navigation from '../../../data/Navigation';
import { NavLink } from 'react-router-dom';
import { INavigationItem, NavItemTypesEnum } from '../../../types/Navigation';

export const PageNavigation: React.FunctionComponent = () => {
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