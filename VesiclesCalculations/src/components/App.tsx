import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, Switch, Redirect } from 'react-router-dom';
import { withCookies, Cookies} from 'react-cookie';
import { Home } from './Home';
import { LipidsVolInfoForm, LipidsVolDataForm, LipidsMolWInfoForm, LipidsMolWDataForm } from '../forms';
import { Footer, ShareButton, SidebarButton, OverlayDialog } from './subComponents';
import { LipidsVolInfo, ISidebarButton, IShareButton, LipidsMolWInfo, RoutePaths, ProjectTypes } from '../models';
import { SidebarBtns, ShareBtns } from '../fields';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { setLipidsVolInfo, setLipidsMolWInfo, closeError, setDialog, closeInfo } from '../actions';
import { FaTimesCircle, FaInfoCircle, FaExclamationCircle, FaCheck, FaBan } from 'react-icons/fa';
import { IDialog } from '../models/subModels/IDialog';
import Projects from './Projects';
import * as _ from 'lodash';

interface AppProps {
  cookies: Cookies;
  history: any;
  location: any;
  dialog: IDialog; 
  error: string;
  info: string;
  volumeFormStep: number;
  molWFormStep: number;
  loading: boolean;
  loadingText: string;
  molWInfoFormFilled: boolean;
  volInfoFormFilled: boolean;
  setLipidsVolInfo: (lipidsVolInfo: LipidsVolInfo) => void;
  setLipidsMolWInfo: (lipidsVolInfo: LipidsMolWInfo) => void;
  setDialog: (header: string, content: JSX.Element[], buttons: JSX.Element[], info: JSX.Element, overlay: boolean) => void;
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
  { type: 'button', value: 'Allow', iconComponent: FaCheck, onClick: null },
  { type: 'button', value: 'Disallow', iconComponent: FaBan, onClick: null },
];
class App extends React.Component<AppProps, AppState> {
  private _menuUpdate: boolean = true;

  constructor(props) {
    super(props);

    this.state = { canUseCookies: false, showFullMenu: false, showMenuText: false };
    
    const canUseCookies: boolean = !!props.cookies.get('VCC-canUse');
    cookiesButtons[0].onClick = this._allowCookieUsage.bind(this);
    cookiesButtons[1].onClick = this._disallowCookieUsage.bind(this);
    props.setDialog(cookiesHeader, cookiesContent, cookiesButtons, cookiesInfo, !canUseCookies);
  }

  public componentDidMount() {
    const { location, cookies } = this.props;
    const canUseCookies: boolean = !!cookies.get('VCC-canUse');
  
    // set cookies usage
    this.setState({
      canUseCookies
    });
    
    location.pathname.match('/') 
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log(error);
  }

  componentDidUpdate() {
    if(this._menuUpdate) {
      this._menuUpdate = false;
      return;
    }
    const node: any = ReactDOM.findDOMNode(this);
    node.scrollTop = 0;
  }

  private _submitVolumeInfo(values: LipidsVolInfo): void {
    const { history, setLipidsVolInfo } = this.props;

    values.filled = true;
    values.type = ProjectTypes.LipidVolume;
    values.modifiedDate = new Date().toLocaleString();
    setLipidsVolInfo(values);

    history.push('/lipidsVolume/1');
  }

  private _submitMolWeightInfo(values: LipidsMolWInfo): void {
    const { history, setLipidsMolWInfo } = this.props;
    
    values.filled = true;
    values.type = ProjectTypes.LipidVolume;
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

  private _allowCookieUsage(): void {
    const { dialog, setDialog, cookies} = this.props;
    
    cookies.set('VCC-canUse', true);
    this.setState({ canUseCookies: true });

    dialog.overlay = false;
    setDialog(dialog.header, dialog.content, dialog.buttons, dialog.info, dialog.overlay);
  }

  private _disallowCookieUsage(): void {
    const { cookies, dialog, setDialog} = this.props;
    const { canUseCookies } = this.state;
    
    canUseCookies && cookies.remove('VCC-canUse');
    this.setState({ canUseCookies: false });
    
    dialog.overlay = false;
    setDialog(dialog.header, dialog.content, dialog.buttons, dialog.info, dialog.overlay);
  }

  private _setCookies(): void {
    window.scrollTo(0, 0);
    const { dialog, setDialog} = this.props;
    
    dialog.header = cookiesHeader;
    dialog.content = cookiesContent;
    dialog.buttons = cookiesButtons;
    dialog.info = cookiesInfo;
    dialog.overlay = true;
    setDialog(dialog.header, dialog.content, dialog.buttons, dialog.info, dialog.overlay);
  }

  private _showMenu() {
    this._menuUpdate = true;
    this.setState({ showFullMenu: true });
    setTimeout(() => {
      this._menuUpdate = true;
      this.setState({ showMenuText: this.state.showFullMenu }), 100
    });

  }

  private _hideMenu() {
    this._menuUpdate = true;
    this.setState({ showFullMenu: false, showMenuText: false });
  }

  public render(): JSX.Element {
    const { loading, loadingText, error, info, location, cookies, dialog, closeError, closeInfo } = this.props;
    const { canUseCookies, showMenuText } = this.state;

    let fillHeight = { className: ''}
    const header: string = this._getSectionName(location.pathname, fillHeight);
    const shadedContainer = loading || dialog.overlay ? 'shaded' : '';

    return (
      <div className={`app-container ${shadedContainer}`}>
        {
          dialog.overlay && <OverlayDialog {...dialog}
            acceptAction={ this._allowCookieUsage.bind(this) } declineAction={ this._disallowCookieUsage.bind(this) } />
        }
        {
          loading && 
          <div className='overlay-container'>
            <div className="lds-ring">
              <div></div><div></div><div></div><div></div>
              <p className='saving'>{ loadingText }<span>.</span><span>.</span><span>.</span></p>
            </div>
          </div>
        }
        <div className='messages-container'>
          
          { error &&
            <div className='error-message'>
              <div className='message__icon'>
                <FaExclamationCircle />
              </div>
              <div className='message__text'>
                <span>{ error }</span>
              </div>
              <div className='message__close' onClick={ closeError }>
                <FaTimesCircle  className='close__icon'/>
              </div>
            </div>
          } { info &&
            <div className='info-message'>
              <div className='message__icon'>
                <FaInfoCircle />
              </div>
              <div className='message__text'>
                <span>{ info }</span>
              </div>
              <div className='message__close' onClick={ closeInfo }>
                <FaTimesCircle  className='close__icon'/>
              </div>
            </div>
          } 
        </div>

        <div className='column__left' onMouseEnter={ this._showMenu.bind(this) } onMouseLeave={ this._hideMenu.bind(this) }>
          <div className='row__middle'>
            {
              _.map(SidebarBtns, (field: ISidebarButton, name: string) => 
                <SidebarButton
                  key={ name }
                  linkTarget={ field.path + field.step }
                  label={ !showMenuText ? '' : name }
                  active={ location.pathname.match(field.path) != null }
                >
                  <field.icon className={ `sidebar-button__icon ${ showMenuText ? '' : 'extended'}` }/>
                </SidebarButton>
              )
            }
          </div>
        </div>

        <div className={ `column__right ${ showMenuText ? '' : 'extended'}` }>
        { 
          <div className={ `row__middle ${fillHeight.className}` }>
            <header className='app-header'>
                <div>
                  <h1>{ header }</h1>
                </div>
            </header>
            {
              <Switch location={ location }>
                <Route exact path='/home' component={ Home } />
                <Route exact path='/lipidsVolume/:step?' render={ ({ match }) => {
                  if(match.params.step == "1" && this.props.volInfoFormFilled) {
                    return <LipidsVolDataForm canUseCookies={canUseCookies} cookies={cookies} />
                  } else {
                    return <LipidsVolInfoForm onSubmit={ (values: any) => this._submitVolumeInfo(values) } />
                  }
                }} />
                <Route exact path='/molecularWeight/:step?' render={ ({ match }) => {
                  return <h2>Currently under construction</h2>;
                  if(match.params.step == "1" && this.props.molWInfoFormFilled) {
                    return <LipidsMolWDataForm />
                  } else {
                    return <LipidsMolWInfoForm onSubmit={ (values: any) => this._submitMolWeightInfo(values) } />
                  }
                }} />
                <Route exact path='/projects' render={ () => <Projects cookies={cookies} /> } />
                <Redirect from='/' to='/home' />
              </Switch>
            }
          </div>
        }
        </div>
        <div className='share-site-bar'>
          {
            _.map(ShareBtns, (field: IShareButton, index) => 
              <ShareButton key={index} { ...field } />
            )  
          }
        </div>
        { Footer(this._setCookies.bind(this)) }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  volumeFormStep: state.lipidsVolume.step,
  molWFormStep: state.lipidsMolWeight.step,
  volInfoFormFilled: state.lipidsVolume.lipidsVolInfo.filled,
  molWInfoFormFilled: state.lipidsMolWeight.lipidsMolWInfo.filled,
  dialog: state.globals.dialog,
  loading: state.globals.loading,
  loadingText: state.globals.loadingText,
  error: state.globals.error,
  info: state.globals.info
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
      setLipidsVolInfo,
      setLipidsMolWInfo,
      setDialog,
      closeError,
      closeInfo
    }, dispatch
  )
});

const composedApp: any = compose(
  withCookies,
  connect(mapStateToProps, mapDispatchToProps)
)(App);

export default composedApp;