import { 
    SET_LIPID_VOLUME_INFO,
    SET_LIPID_VOLUME_DATA,
    SET_LIPID_VOLUME_RESULTS,
    COPY_LIPID_VOLUME_DATA,
    SET_VOLUME_FORM_STEP,
    CLEAR_LIPIDS_VOL_DATA, 
} from '../actions/types';

const initialState = {
    lipidsVolInfo: { filled: true },
    lipidsVolData: { lipids: [] },
    lipidsVolResults: { lipids: [], calculated: false },
    copiedVolData: {},
    step: 1
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_LIPID_VOLUME_INFO:
            const lipids: any[] = state.lipidsVolData.lipids;
            while(lipids.length < action.payload.lipidsCount) {
                lipids.push({});
            }
            return {
                ...state,
                lipidsVolInfo: action.payload,
                lipidsVolData: { lipids: lipids },
                step: action.step
            }
        case SET_LIPID_VOLUME_DATA:
            return {
                ...state,
                lipidsVolData: action.payload,
                step: action.step
            }
        case SET_LIPID_VOLUME_RESULTS:
            return {
                ...state,
                lipidsVolResults: action.payload
            }
        case COPY_LIPID_VOLUME_DATA:
            return {
                ...state,
                copiedVolData: action.payload
            }
        case CLEAR_LIPIDS_VOL_DATA:
            return {
                ...state,
                lipidsVolData: { lipids: [] },
                lipidsVolResults: { lipids: [], lipidsMass: 0, lipidsVolume: 0, calculated: false }
            }
        case SET_VOLUME_FORM_STEP:
            return {
                ...state,
                step: action.payload
            }
        default:
            return state;
    }
}