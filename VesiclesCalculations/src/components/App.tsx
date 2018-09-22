import * as React from 'react';
import SidebarButton from './subComponents/SidebarButton';
import { Footer } from './subComponents/Footer';

interface AppProps {
  currentSectionName: string;
}

interface AppState {
}

class App extends React.Component<AppProps, AppState> {
  private _homeSection = 'Home';
  private _lipidVolumeSection = 'Lipid volume calculator'
  private _molWeightSection = 'Molecular weight calculator'

  constructor(props) {
    super(props);
  }

  public componentDidMount(): void {

  }

  public render(): JSX.Element {
    const { currentSectionName } = this.props;

    return (
      <div className='app-container'>
        <div className='flex-row horizontaly-filled row__top'>
          <div className='flex-column column__left'></div>
          <div className='flex-column column__right'>
            <header>
              <div><h1>Vesicles Content Calculations</h1></div>
              <div><h2>{ currentSectionName }</h2></div>
            </header>
          </div>
        </div>
        <div className='flex-row horizontaly-filled row__middle'>
          <div className='flex-column column__left'>
            <SidebarButton
              className={ 'sidebar__button ' }
              linkClassName='home-link'
              linkTarget='/home'
              label={ this._homeSection }
              active={ this._homeSection == currentSectionName }
            />
            <SidebarButton
              className={ 'sidebar__button ' }
              linkClassName='lipid-vol-link'
              linkTarget='/lipidVolume'
              label={ this._lipidVolumeSection }
              active={ this._lipidVolumeSection == currentSectionName }
            />
            <SidebarButton
              className={ 'sidebar__button ' }
              linkClassName='mol-weight-link'
              linkTarget='/molWeight'
              label={ this._molWeightSection }
              active={ this._molWeightSection == currentSectionName }
            />
          </div>
          <div className='flex-column column__right'></div>
        </div>
        <div className='flex-row horrizontaly-filled row__bottom'>
          <div className='flex-column column__left'></div>
          <div className='flex-column column__right'>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
