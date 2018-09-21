import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import { hot } from 'react-hot-loader';

import './index.scss';

const Component = ReactDOM.render(<App />, document.getElementById('vesiclesCalcs-root'));

export default hot(module)(Component);