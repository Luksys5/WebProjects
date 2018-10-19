import * as React from 'react';

export class OverlayDialog extends React.Component {
  constructor(props) {
    super(props);
  }

  public componentDidMount(): void {

  }

  public render(): JSX.Element {

    return (
      <div className='overlaydialog-container'>
        <p>content</p>
      </div>
    );
  }
}