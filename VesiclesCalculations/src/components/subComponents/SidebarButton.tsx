import * as React from 'react';
import { Link } from 'react-router-dom';

interface SidebarButtonProps {
  linkTarget: string;
  label: string;
  active: boolean;
}

export class SidebarButton extends React.Component<SidebarButtonProps, {}> {
  public render(): JSX.Element {
    const { linkTarget, label, active } = this.props;
    return (
      <button className={ 'sidebar__button ' + (active ? 'active' : '') }>
        { active ? (
          <a className='sidebar-button__link'>
              <span>{ label }</span>
          </a>
        ) : (
          <Link className='sidebar-button__link' to={ linkTarget } >
            <span>{ label }</span>
          </Link>
        )}
        { this.props.children }
      </button>
    );
  }
}