import * as React from 'react';

interface DialogProps {
  header: string;
  content: JSX.Element[];
  buttons: any[];
  info: JSX.Element;
  acceptAction: () => void;
  declineAction: () => void;
}

export class OverlayDialog extends React.Component<DialogProps, {}> {

  private clickOverlay(ev) {
    if(ev.currentTarget == ev.target) {
      this.props.declineAction();
    }
  }

  public render(): JSX.Element {
    const { header, content, buttons, info } = this.props;
    return (
      <div className='overlay-container' onClick={ this.clickOverlay.bind(this) }>
        <div className='dialog-container'>
          <header className='dialog__header'><h3>{ header }</h3></header>
          <div className='dialog__content'>
            { content }
            { info }
          </div>
          <div className='dialog__footer'>
            {
              buttons && buttons.map((buttonProps: any, index: number) =>
                <button key={ index } type={ buttonProps.type } onClick={ buttonProps.onClick } className='button-with-icon'>
                  { buttonProps.iconComponent && React.createElement(buttonProps.iconComponent, { className: 'button__icon', size: 16 }) }
                  { buttonProps.value }
                </button>
              )
            }
          </div>
        </div>
      </div>
    );
  }
}