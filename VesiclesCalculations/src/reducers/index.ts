import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import lipidsVolumeReducers from './lipidsVolumeReducers';
import lipidsMolWeightReducers from './lipidsMolWeightReducers';
import globalReducers from './globalReducers';

export default combineReducers({
    globals: globalReducers,
    lipidsVolume: lipidsVolumeReducers,
    lipidsMolWeight: lipidsMolWeightReducers,
    router: routerReducer,
    form: formReducer
})