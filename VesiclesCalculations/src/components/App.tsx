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
              className={ 'sidebar__button ' + (this._homeSection == currentSectionName ? 'active' : '') }
              linkClassName='home-link'
              linkTarget='/home'
              label='Home'
            />
            <SidebarButton
              className={ 'sidebar__button ' + (this._lipidVolumeSection == currentSectionName ? 'active' : '') }
              linkClassName='lipid-vol-link'
              linkTarget='/lipidVolume'
              label='Lipid volume calculator'
            />
            <SidebarButton
              className={ 'sidebar__button ' + (this._molWeightSection == currentSectionName ? 'active' : '') }
              linkClassName='mol-weight-link'
              linkTarget='/molWeight'
              label='Molecular weight calculator'
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
