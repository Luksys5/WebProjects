import * as React from 'react';
import { IconType } from 'react-icons/lib/iconBase';

interface ShareButtonProps {
  iconComponent: IconType;
  id: string;
  className: string;
  tooltipClassName: string;
  tooltipText: string;
  iconColor: string;
  iconSize: number;
  iconClick: () => void;
}

interface ShareButtonState {
  tooltipActive: boolean;
  hover: boolean;
}

export class ShareButton extends React.Component<ShareButtonProps, ShareButtonState> {
  constructor(props) {
    super(props);
    this.state = {
      tooltipActive: false,
      hover: false,
    }
  }

  private _mouseEnterBtn() {
    window.setTimeout(() => {
      if(this.state.hover) {
        this.setState({ tooltipActive: true });
      }
    }, 300);
    this.setState({ hover: true });
  }

  private _mouseLeaveBtn() {
    this.setState({ hover: false, tooltipActive: false });
  } 

  public render(): JSX.Element {
    const { id, className, tooltipClassName, tooltipText, iconComponent, iconColor, iconSize, iconClick } = this.props;
    const { tooltipActive } = this.state;

    const tooltipClassNameFull: string = `${tooltipClassName} ${tooltipActive ? 'active' : ''}`;
    return (
      <div className={ className }
        onMouseEnter={ this._mouseEnterBtn.bind(this) }
        onMouseLeave={ this._mouseLeaveBtn.bind(this)}>
        { React.createElement(iconComponent, {
          id: id,
          className: `${className}__icon`,
          size: iconSize,
          color: iconColor,
          onClick: iconClick
        }) }
        <span className={ tooltipClassNameFull }>
          <span>{ tooltipText }</span>
          <div className='triangle'></div>
        </span>
      </div>
    );
  }
}