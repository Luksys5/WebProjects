import * as React from 'react';
import { Link } from 'react-router-dom';

interface SidebarButtonProps {
  className: string;
  linkClassName: string;
  linkTarget: string;
  label: string;
}

interface SidebarButtonState {

}

class SidebarButton extends React.Component<SidebarButtonProps, SidebarButtonState> {
  public render(): JSX.Element {
    const { className, linkClassName, linkTarget, label } = this.props;
    return (
      <button className={ className }>
        <Link className={ linkClassName } to={ linkTarget }>
          <label>{ label }</label>
        </Link>
      </button>
    );
  }
}

export default SidebarButton;
