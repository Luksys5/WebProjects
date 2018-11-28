import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Loadable from 'react-loadable'
import { Route, Switch, Redirect } from 'react-router-dom';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { withCookies, Cookies} from 'react-cookie';
import { map } from 'lodash';
import { Footer, ShareButton, SidebarButton, OverlayDialog, Message, Loading } from './subComponents';
import { LipidsVolInfo, ISidebarButton, IDialog, IShareButton, LipidsMolWInfo, RoutePaths, ProjectTypes } from '../models';
import { SidebarBtns, ShareBtns } from '../fields';
import { setLipidsVolInfo, setLipidsMolWInfo, closeError, setDialog, closeInfo } from '../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faBan, faExclamationCircle, faTimesCircle, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import Projects from './Projects';

interface AppProps {
  lipidsVolInfo: LipidsVolInfo;
  location: any;
  dialog: IDialog; 
  error: string;
  info: string;
  loading: boolean;
  setLipidsVolInfo: (lipidsVolInfo: LipidsVolInfo) => void;
  setLipidsMolWInfo: (lipidsVolInfo: LipidsMolWInfo) => void;
  setDialog: (header: string, content: JSX.Element[], buttons: any[], info: JSX.Element, overlay: boolean) => void;
  closeError: () => void;
  closeInfo: () => void;
}

interface AppState {
  canUseCookies: boolean;
  showFullMenu: boolean;
  showMenuText: boolean;
}

const cookiesHeader = 'Cookie Policy';
const cookiesContent = [
  'Our website uses cookies. We use them for saving your projects. ',
  'You can either Allow or Disallow cookies usage.\n Just remember that you can change cookie settings anytime in website footer link'
].map((content, index) => <p key={ index }>{ content }</p>);

const cookiesInfo = React.createElement('a', { href: 'https://en.wikipedia.org/wiki/HTTP_cookie', target: '_blank' }, 'More Info about Cookies here');
const cookiesButtons = [
  { type: 'button', value: 'Allow', iconComponent: <FontAwesomeIcon icon={faCheck} />, onClick: null },
  { type: 'button', value: 'Disallow', iconComponent: <FontAwesomeIcon icon={faBan} />, onClick: null },
];

const WhileLoading = (props) => {
  if(props.error) {
      return <div className='messages-container'>
        {
          Message('error-message', 
            React.createElement('span', null, 'Error occurred while loading component please try ', 
              React.createElement('a', { onClick: props.retry }, 'Again')),
            faExclamationCircle) 
        }
       </div>
  } else if(props.pastDelay) {
    return Loading('Loading');
  } else {
    return null;
  }
}

const LoadableLipidsMolWInfoForm = Loadable({
  loader: () => import('../forms/LipidsMolWeightInfo'),
  modules: ['LipidsMolWeightInfo'],
  // @ts-ignore
  webpack: () => [require.resolveWeak('../forms/LipidsMolWeightInfo')],
  loading: WhileLoading,
  delay: 500
});

const LoadableHome = Loadable({
  loader: () => import('./Home'),
  loading: WhileLoading
});

const LoadableLipidsMolWDataForm = Loadable({
  loader: () => import('../forms/LipidsMolWeightData'),
  loading: WhileLoading,
  delay: 500
})


const LoadableLipidsVolDataForm = Loadable({
  loader: () => import('../forms/LipidsVolumeData'),
  loading: WhileLoading,
  delay: 500
});


const LoadableLipidsVolInfoForm = Loadable({
  loader: () => import('../forms/LipidsVolumeInfo'),
  loading: WhileLoading,
  delay: 500
})



class App extends React.Component<AppProps, AppState> {
  private _menuUpdate: boolean = true;

  constructor(props) {
    super(props);

    const canUseCookies: boolean = !!props.cookies.get('VCC-canUse');
    this.state = { canUseCookies, showFullMenu: false, showMenuText: false };
    
    cookiesButtons[0].onClick = this._allowCookieUsage.bind(this);
    cookiesButtons[1].onClick = this._disallowCookieUsage.bind(this);
    props.setDialog(cookiesHeader, cookiesContent, cookiesButtons, cookiesInfo, !canUseCookies);
  }

  public componentDidMount() {
    const { location } = this.props;
    location.pathname.match('/') 
  }

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

  private _submitMolWeightInfo(values: LipidsMolWInfo): void {
    const { history, setLipidsMolWInfo } = this.props;
    
    values.filled = true;
    values.type = ProjectTypes.LipidMolWeight;
    values.modifiedDate = new Date().toLocaleString();
    setLipidsMolWInfo(values);
   
    history.push('/molecularWeight/1');
  }
  
  private _getSectionName(sectionName, fillHeight): string {
    if (sectionName.match(RoutePaths.Home)) {
      fillHeight.className = 'fill-height'
      return "Vesicles Content Calculations"
    } else if (sectionName.match(RoutePaths.LipidsVolume)) {
      return "Calculate Lipids Volume"
    } else if (sectionName.match(RoutePaths.MolecularWeight)) {
      return "Calculate Molecular Weight"
    } else {
      fillHeight.className = 'fill-height'
      return "Vesicles Content Calculations"
    } 
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

  private _setCookies(): void {
    window.scrollTo(0, 0);
    const { setDialog} = this.props;
    
    setDialog(cookiesHeader, cookiesContent, cookiesButtons, cookiesInfo, true);
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
          loading && Loading(loadingText) 
        }
        <div className='messages-container'>
          { error && Message('error-message', error, faExclamationCircle, faTimesCircle, closeError) }
          { info && Message('info-message', info, faInfoCircle, faTimesCircle, closeInfo) }
        </div>

        <div className='column__left' onMouseEnter={ this._showMenu.bind(this) } onMouseLeave={ this._hideMenu.bind(this) }>
          <div className='row__middle'>
            {
              map(SidebarBtns, (field: ISidebarButton, name: string) => 
                <SidebarButton
                  key={ name }
                  linkTarget={ field.path }
                  label={ name }
                  active={ field.path === currentPath }
                >
                  <FontAwesomeIcon className={ `sidebar-button__icon ${ showMenuText ? '' : 'extended'}`  } icon={field.icon} />
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
              <Switch location={ location }>
                <Route exact path='/home' component={ LoadableHome }/>
                <Route exact path='/lipidsVolume/:step?' render={ ({ match }) => {
                  if(match.params.step == "1" && this.props.volInfoFormFilled) {
                    return <LoadableLipidsVolDataForm canUseCookies={ canUseCookies } cookies={ cookies } />;
                  } else {
                    return <LoadableLipidsVolInfoForm onSubmit={ (values: any) => this._submitVolumeInfo(values) } />;
                  }
                }} />
                <Route exact path='/molecularWeight/:step?' render={ ({ match }) => {
                  if(match.params.step == "1" && this.props.molWInfoFormFilled) {
                    return <LoadableLipidsMolWDataForm canUseCookies={ canUseCookies } cookies={ cookies } />
                  } else {
                    return <LoadableLipidsMolWInfoForm onSubmit={ (values: any) => this._submitMolWeightInfo(values) } />
                  }
                }} />
                <Route exact path='/projects' render={ () => <Projects cookies={cookies} canUseCookies={ canUseCookies }/> }/>
                <Redirect from='/' to='/home' />
              </Switch>
            }
          </div>
        </div>
        <div className='share-site-bar'>
          {
            map(ShareBtns, (field: IShareButton, index) => 
              <ShareButton key={index} { ...field } />
            )  
          }
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
  volInfoFormFilled: state.lipidsVolume.lipidsVolInfo.filled,
  molWInfoFormFilled: state.lipidsMolWeight.lipidsMolWInfo.filled,
  dialog: state.globals.dialog,
  loading: state.globals.loading,
  loadingText: state.globals.loadingText,
  error: state.globals.error,
  info: state.globals.info
});

const mapDispatchToProps = dispatch => bindActionCreators({
    setLipidsVolInfo,
    setLipidsMolWInfo,
    setDialog,
    closeError,
    closeInfo
  }, dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(App); 