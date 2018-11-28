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
    
    if(active) {
      return (
        <a className={ 'sidebar__button ' + (active ? 'active' : '') }>
          { this.props.children }
          <span>{ label }</span>
        </a>
      );
    } else {
      return (
      <Link className={ 'sidebar__button ' + (active ? 'active' : '') } to={ linkTarget } >
        { this.props.children }
        <span>{ label }</span>
      </Link>
      );
    }
  }
}