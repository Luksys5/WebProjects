import * as React from 'react';
import { Link } from 'react-router-dom';

interface SidebarButtonProps {
  className: string;
  linkClassName: string;
  linkTarget: string;
  label: string;
  active: boolean;
}

interface SidebarButtonState {

}

class SidebarButton extends React.Component<SidebarButtonProps, SidebarButtonState> {
  public render(): JSX.Element {
    const { className, linkClassName, linkTarget, label, active } = this.props;
    return (
      <button className={ className + (active ? 'active' : '') }>
        { active ? (
          <a className={ linkClassName } onClick={() => {}}>
            <label>{ label }</label>
          </a>
        ) : (
          <Link className={ linkClassName } to={ linkTarget } replace>
            <label>{ label }</label>
          </Link>
        )}
      </button>
    );
  }
}

export default SidebarButton;
