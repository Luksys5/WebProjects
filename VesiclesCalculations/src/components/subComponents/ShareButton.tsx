import * as React from 'react';

interface ShareButtonProps {
  id: string;
  className: string;
  iconClassName: any;
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
    const { className, iconClassName, tooltipClassName, tooltipText, iconColor, iconClick } = this.props;
    const { tooltipActive } = this.state;

    const tooltipClassNameFull: string = `${tooltipClassName} ${tooltipActive ? 'active' : ''}`;
    return (
      <div className={ className }
        onMouseEnter={ this._mouseEnterBtn.bind(this) }
        onMouseLeave={ this._mouseLeaveBtn.bind(this)}
        onClick={iconClick}
      >
        <i className={ `${className}__icon ${iconClassName}` } color={ iconColor } />
        <span className={ tooltipClassNameFull }>
          <span>{ tooltipText }</span>
          <div className='triangle'></div>
        </span>
      </div>
    );
  }
}