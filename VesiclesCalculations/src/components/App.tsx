import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FaThumbsUp, FaGooglePlusG, FaTwitter, 
  FaFacebook, FaCcPaypal 
} from 'react-icons/fa';
import { Home } from './Home';
import { Footer, ShareButton, SidebarButton } from './subComponents';
import { LipidsVolInfoForm, LipidsVolDataForm, LipidsMolWInfoForm, LipidsMolWDataForm } from '../forms';
import { LipidsVolInfo, ISidebarButton, RoutePaths, LipidsMolWInfo } from '../models';
import { SidebarBtns } from '../fields';
import { setLipidsVolInfo, setLipidsMolWInfo } from '../actions';
import * as _ from 'lodash';

interface AppProps {
  lipidsVolInfo: LipidsVolInfo;
  location: any;
  volumeFormStep: number;
  molWFormStep: number;
  loading: boolean;
  setLipidsVolInfo: (lipidsVolInfo: LipidsVolInfo) => void;
  setLipidsMolWInfo: (lipidsVolInfo: LipidsMolWInfo) => void;
}

const siteUrl = (encode: boolean): string => {
  const url: string = window.location.origin;
  return encode ? url.replace(':', '%3A').replace(/\//g, '%2F') : url;
};

class App extends React.Component<AppProps, {}> {
  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log(error);
  }
  
  private _supportByPayPal(): void {
    window.open('https://www.paypal.me/vescalc', '_blank');
  }

  private _shareFb(): void {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${siteUrl(true)}`, '_blank');
  }

  private _likeFb(): void {
    window.open(`https://www.facebook.com/plugins/like.php?href=http%3A%2F%2Fwww.facebook.com%2FVesCalc&amp;send=false&amp;layout=button_count&amp;width=125&amp;show_faces=false&amp;action=like&amp;colorscheme=light&amp;font=verdana&amp;height=21`, '_blank');
  }

  private _shareGPlus(): void {
    window.open(`https://plus.google.com/share?url=${siteUrl(true)}`, '_blank');
  }

  private _shareTwitter(): void {
    window.open(`https://twitter.com/intent/tweet?text=Calculate%20Your%20Vesicles%20Content%20And%20More&url=${siteUrl(false)}`, '_blank');
  }

  private _submitVolumeInfo(values: any): void {
    this.props.setLipidsVolInfo(values);
  }

  private _submitMolWeightInfo(values: any): void {
    this.props.setLipidsMolWInfo(values);
    
  }

  private _getSectionName(sectionName): string {
    switch(sectionName) {
      case RoutePaths.Home:
        return "Vesicles Content Calculations"
      case RoutePaths.LipidsVolume:
        return "Calculate Lipids Volume"
      case RoutePaths.MolecularWeight:
        return "Calculate Molecular Weight"
      default:
        return "Vesicles Content Calculations"
    } 

  }

  public render(): JSX.Element {
    const currentPath = this.props.location.pathname;
    const header: string = this._getSectionName(currentPath);

    const { loading } = this.props;
    
    return (
      <div className='app-container flex-row'>
        {
          loading && 
          <div className='ring-container'>
            <div className="lds-ring">
              <div></div><div></div><div></div><div></div>
              <p className='saving'>Calculating<span>.</span><span>.</span><span>.</span></p>
            </div>
          </div>
        }
        <div className='flex-column column__left'>
          <div className='row__middle'>
            {
              _.map(SidebarBtns, (field: ISidebarButton, name: string) => 
                <SidebarButton
                  key={ name }
                  linkTarget={ field.path }
                  label={ name }
                  active={ field.path === currentPath }
                >
                  <field.icon className='sidebar-button__icon'/>
                </SidebarButton>
              )
            }
          </div>
        </div>

        <div className='flex-column column__right'>
          <div className='row__middle'>
            <header>
              <div>
                <h1>{ header }</h1>
              </div>
            </header>
            { 
              this._renderSectionComponent(currentPath)
            }
          </div>
        </div>
        <div className='share-site-bar'>
          <ShareButton id='PayPal-btn' className='share-btn' tooltipClassName='tooltip'
            iconComponent={ FaCcPaypal } tooltipText='Support our site via PayPal!'
            iconColor='#8AD4DF' iconSize={32} iconClick={ this._supportByPayPal } />
          <ShareButton id='FbShare-btn' className='share-btn' tooltipClassName='tooltip'
            iconComponent={ FaFacebook } tooltipText='Share our site in FaceBook!'
            iconColor='#4267B2' iconSize={32} iconClick={ this._shareFb } />
          <ShareButton id='FbLike-btn' className='share-btn' tooltipClassName='tooltip'
            iconComponent={ FaThumbsUp } tooltipText='Like our site in FaceBook!'
            iconColor='#4267B2' iconSize={32} iconClick={ this._likeFb } />
          <ShareButton id='GoogleShare-btn' className='share-btn' tooltipClassName='tooltip'
            iconComponent={ FaGooglePlusG } tooltipText='Share our site in Google+!'
            iconColor='#DD5245' iconSize={32} iconClick={ this._shareGPlus } />
          <ShareButton id='Twitter-btn' className='share-btn' tooltipClassName='tooltip'
            iconComponent={ FaTwitter } tooltipText='Share our site in Twitter!'
            iconColor='#1DA1F2' iconSize={32} iconClick={ this._shareTwitter } />
        </div>
        <Footer />
      </div>
    );
  }

  private _renderSectionComponent(currentPath: string): JSX.Element {
    const { volumeFormStep, molWFormStep } = this.props;

    switch(currentPath) {
      case RoutePaths.Home:
        return <Home />;
      case RoutePaths.LipidsVolume:
        switch(volumeFormStep) {
          case 0:
            return <LipidsVolInfoForm onSubmit={ (values: any) => this._submitVolumeInfo(values) }/>
          case 1:
            return <LipidsVolDataForm />
          default:
            return <Home />;
        }
      case RoutePaths.MolecularWeight:
        switch(molWFormStep) {
          case 0:
            return <LipidsMolWInfoForm onSubmit={ (values: any) => this._submitMolWeightInfo(values) }/>
          case 1:
            return <LipidsMolWDataForm />
          default:
            return <Home />;
        }
      default:
        return <Home />
    } 
  }
}

const mapStateToProps = state => ({
  lipidsVolInfo: state.lipidsVolume.lipidsVolInfo,
  volumeFormStep: state.lipidsVolume.step,
  molWFormStep: state.lipidsMolWeight.step,
  loading: state.globals.loading
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
      setLipidsVolInfo,
      setLipidsMolWInfo,
    }, dispatch
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(App); 