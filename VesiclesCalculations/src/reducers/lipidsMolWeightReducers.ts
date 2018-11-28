import { 
    SET_LIPID_MOL_W_INFO,
    SET_LIPID_MOL_W_DATA,
    SET_LIPID_MOL_W_RESULTS,
    COPY_LIPID_MOL_W_DATA,
    SET_MOL_W_FORM_STEP,
    CLEAR_LIPIDS_VOL_DATA,
} from '../actions/types';

const initialState = {
    lipidsMolWInfo: { filled: false },
    lipidsMolWData: { lipids: [] },
    lipidsMolWResults: { data: [], calculated: false },
    copiedMolWData: {},
    step: 0
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_LIPID_MOL_W_INFO:
            const lipids: any[] = state.lipidsMolWData.lipids;
            while(lipids.length < action.payload.lipidsCount) {
                lipids.push({});
            }
            return {
                ...state,
                lipidsMolWInfo: action.payload,
                lipidsMolWData: { lipids: lipids },
                step: action.step
            }
        case SET_LIPID_MOL_W_DATA:
            return {
                ...state,
                lipidsMolWData: action.payload,
                step: action.step
            }
        case SET_LIPID_MOL_W_RESULTS:
            return {
                ...state,
                lipidsMolWResults: action.payload
            }
        case COPY_LIPID_MOL_W_DATA:
            return {
                ...state,
                copiedMolWData: action.payload
            }
        case CLEAR_LIPIDS_VOL_DATA:
            return {
                ...state,
                lipidsMolWData: { lipids: [] },
                lipidsMolWResults: { lipids: [], lipidsMass: 0, lipidsVolume: 0, calculated: false }
            }
        case SET_MOL_W_FORM_STEP:
            return {
                ...state,
                step: action.payload
            }
        default:
            return state;
    }
}