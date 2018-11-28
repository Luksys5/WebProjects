import { SET_LOADING, SET_ERROR, SAVE_PROJECT, SET_INFO, SET_DIALOG, SET_STRINGIFIED_RESULTS } from '../actions/types';

const initialState = {
    dialog: {},
    loading: false,
    loadingText: '',
    info: null,
    error: null,
    stringifiedResults: null
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SAVE_PROJECT:
            return {
                ...state,
                
            }
        case SET_STRINGIFIED_RESULTS:
            return {
                ...state,
                stringifiedResults: action.stringifiedResults
            }
        case SET_DIALOG:
            return {
                ...state,
                dialog: action.dialog
            }
        case SET_INFO: 
            return {
                ...state,
                info: action.info
            }
        case SET_ERROR:
            return {
                ...state,
                error: action.error
            }
        case SET_LOADING:
            return {
                ...state,
                loading: action.loading,
                loadingText: action.loadingText
            };
        default:
            return state;
    }
}