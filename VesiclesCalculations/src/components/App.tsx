import * as React from 'react';

interface AppProps {

}

interface AppState {

}

class App extends React.Component<AppProps, AppState> {
  constructor(props) {
    super(props);
  }

  public componentDidMount(): void {

  }

  public render(): JSX.Element {

    return (
      <div className='app-container'>
        <div className='flex-row row__non-middle'>
          <div className='flex-column column__non-center'>a</div>
          <div className='flex-column column__center'>b</div>
          <div className='flex-column column__non-center'>c</div>
        </div>
        <div className='flex-row row__middle'>
          <div className='flex-column column__non-center'>a</div>
          <div className='flex-column column__center'>b</div>
          <div className='flex-column column__non-center'>c</div>
        </div>
        <div className='flex-row row__non-middle'>
          <div className='flex-column column__non-center'>a</div>
          <div className='flex-column column__center'>b</div>
          <div className='flex-column column__non-center'>c</div>
        </div>
      </div>
    );
  }
}

export default App;
