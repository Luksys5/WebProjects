import * as React from 'react';

export class OverlayDialog extends React.Component {
  constructor(props) {
    super(props);
  }

  public componentDidMount(): void {

  }

  public render(): JSX.Element {

    return (
<<<<<<< HEAD
      <div className='overlaydialog-container'>
        <p>content</p>
=======
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
                  { buttonProps.iconComponent }
                  { buttonProps.value }
                </button>
              )
            }
          </div>
        </div>
>>>>>>> 56840ff... VCC. Released production version v1.0.0
      </div>
    );
  }
}