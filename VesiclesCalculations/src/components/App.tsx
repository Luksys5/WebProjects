import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Loadable from 'react-loadable'
import { Route, Switch, Redirect } from 'react-router-dom';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { withCookies, Cookies} from 'react-cookie';
import { map } from 'lodash';
import { Footer, ShareButton, SidebarButton, OverlayDialog, Message, Loading } from './subComponents';
import { LipidsVolInfo, ISidebarButton, IDialog, IShareButton, LipidsMolWInfo, ProjectTypes } from '../models';
import { SidebarBtns, ShareBtns } from '../fields';
import { setLipidsVolInfo, setLipidsMolWInfo, closeError, setDialog, closeInfo } from '../actions';
import Projects from './Projects';

interface AppProps {
  cookies: Cookies;
  history: any;
  location: any;
  dialog: IDialog; 
  error: string;
  info: string;
  loading: boolean;
  loadingText: string;
  molWInfoFormFilled: boolean;
  volInfoFormFilled: boolean;
  setLipidsVolInfo: (lipidsVolInfo: LipidsVolInfo) => void;
  setLipidsMolWInfo: (lipidsVolInfo: LipidsMolWInfo) => void;
  setDialog: (header: string, content: JSX.Element[], buttons: any[], info: JSX.Element, overlay: boolean) => void;
  closeError: () => void;
  closeInfo: () => void;
}

interface AppState {
  canUseCookies: boolean;
}

const cookiesHeader = 'Cookie Policy';
const cookiesContent = [
  'Our website uses cookies. We use them for saving your projects. ',
  'You can either Allow or Disallow cookies usage.\n Just remember that you can change cookie settings anytime in website footer link'
].map((content, index) => <p key={ index }>{ content }</p>);

const cookiesInfo = React.createElement('a', { href: 'https://en.wikipedia.org/wiki/HTTP_cookie', target: '_blank' }, 'More Info about Cookies here');
const cookiesButtons = [
  { type: 'button', value: 'Allow', iconComponent: React.createElement('i', { className: 'fas fa-check' }), onClick: null },
  { type: 'button', value: 'Disallow', iconComponent: React.createElement('i', { className: 'fas fa-ban' }), onClick: null },
];

const WhileLoading = (props) => {
  if(props.error) {
      return <div className='messages-container'>
        {
          Message('error-message', 
            React.createElement('span', null, 'Error occurred while loading component please try ', 
              React.createElement('a', { onClick: props.retry }, 'Again')),
            'fas fa-exclamation-circle') 
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

const LoadableHelp = Loadable({
  loader: () => import('./subComponents/Help'),
  loading: () => null
})

const LoadableHome = Loadable({
  loader: () => import('./Home'),
  loading: () => null
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
  private _header = 'Home';

  constructor(props) {
    super(props);

    const canUseCookies: boolean = !!props.cookies.get('VCC-canUse');
    this.state = { canUseCookies };
  }

  public componentDidMount() {
    const { location, setDialog } = this.props;
    const { canUseCookies } = this.state;
    location.pathname.match('/') 
    
    cookiesButtons[0].onClick = this._allowCookieUsage.bind(this);
    cookiesButtons[1].onClick = this._disallowCookieUsage.bind(this);
    setDialog(cookiesHeader, cookiesContent, cookiesButtons, cookiesInfo, !canUseCookies);
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log(error);
  }

  componentDidUpdate() {
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
    values.type = ProjectTypes.LipidMolWeight;
    values.modifiedDate = new Date().toLocaleString();
    setLipidsMolWInfo(values);
   
    history.push('/molecularWeight/1');
  }

  private _closeDialog(): void {
    const { dialog, setDialog } = this.props;

    dialog.overlay = false;
    setDialog(dialog.header, dialog.content, dialog.buttons, dialog.info, dialog.overlay);
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
    const { setDialog} = this.props;
    
    setDialog(cookiesHeader, cookiesContent, cookiesButtons, cookiesInfo, true);
  }

  private _callHelp(): void {
    window.scrollTo(0, 0);
    const { setDialog} = this.props;

    setDialog('Help', null, [
      { type: 'button', value: 'Close', iconComponent: React.createElement('i', { className: 'fas fa-check' }), onClick: this._closeDialog.bind(this) }
    ], <LoadableHelp />, true);
  }

  public render(): JSX.Element {
    const { loading, loadingText, error, info, location, cookies, dialog, closeError, closeInfo } = this.props;
    const { canUseCookies } = this.state;

    let fillHeight = { className: ''}
    const shadedContainer = loading || dialog.overlay ? 'shaded' : '';

    return (
      <div className={`app-container ${shadedContainer}`}>
        {
          dialog.overlay && <OverlayDialog {...dialog}
            acceptAction={ this._allowCookieUsage.bind(this) } declineAction={ this._disallowCookieUsage.bind(this) } />
        }
        {
          loading && Loading(loadingText) 
        }
        <div className='messages-container'>
          { error && Message('error-message', error, 'fas fa-exclamation-circle', 'fas fa-times-circle', closeError) }
          { info && Message('info-message', info, 'fas fa-info-circle', 'fas fa-info-circle', closeInfo) }
        </div>

        <div className='column__left' >
          <div className='row__middle'>
            {
              map(SidebarBtns, (field: ISidebarButton, name: string) => 
                <SidebarButton
                  key={ name }
                  linkTarget={ field.path + field.step }
                  label={ name }
                  active={ location.pathname.match(new RegExp('^' + field.path + '/?[0-9]?/?$')) != null }
                  header={ field.header }
                  menuClick={ (header: string) => this._header = header }
                >
                  <i className={ `sidebar-button__icon ${field.icon}` } />
                </SidebarButton>
              )
            }
          </div>
        </div>

        <div className={ 'column__right' }>
        { 
          <div className={ `row__middle ${fillHeight.className}` }>
            <header className='app-header'>
                <div>
                  <h1>{ this._header }</h1>
                </div>
            </header>
            {
              <Switch location={ location }>
                <Route exact path='/' component={ LoadableHome }/>
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
                <Redirect from='/home' to='/' />  
              </Switch>
            }
          </div>
        }
        </div>
        <div className='share-site-bar'>
          {
            map(ShareBtns, (field: IShareButton, index) => 
              <ShareButton key={index} { ...field } />
            )  
          }
        </div>
        { Footer(this._setCookies.bind(this), this._callHelp.bind(this)) }
      </div>
    );
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

const composedApp: any = compose(
  withCookies,
  connect(mapStateToProps, mapDispatchToProps)
)(App);

export default composedApp;