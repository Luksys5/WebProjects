import * as React from 'react';
import { Link } from 'react-router-dom';

interface SidebarButtonProps {
  linkTarget: string;
  label: string;
  header: string;
  active: boolean;
  menuClick: (header: string) => void;
}

export class SidebarButton extends React.Component<SidebarButtonProps, {}> {
  public render(): JSX.Element {
    const { linkTarget, label, active, header, menuClick } = this.props;
    
    if(active) {
      return (
        <a className={ 'sidebar__button ' + (active ? 'active' : '') }>
          { this.props.children }
          <span>{ label }</span>
        </a>
      );
    } else {
      return (
      <Link className={ 'sidebar__button ' + (active ? 'active' : '') } to={ linkTarget } onClick={ () => menuClick(header) } >
        { this.props.children }
        <span>{ label }</span>
      </Link>
      );
    }
  }
}