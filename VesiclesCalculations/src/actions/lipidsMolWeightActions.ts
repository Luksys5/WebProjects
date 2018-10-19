import { SET_LIPID_MOL_W_INFO, SET_MOL_W_FORM_STEP,
    COPY_LIPID_MOL_W_DATA, SET_LIPID_MOL_W_DATA, CLEAR_LIPIDS_MOL_W_DATA 
} from './types';
import { LipidsMolWInfo, LipidMolWData } from '../models';
    
export const setLipidsMolWInfo = (lipidsMolWInfo: LipidsMolWInfo) => dispatch => {
    dispatch({
        type: SET_LIPID_MOL_W_INFO,
        payload: lipidsMolWInfo,
        step: 1
    });
}

export const setLipidsMolWData = (lipidsMolWData: { lipid: LipidMolWData[] }, step: number) => dispatch => {
    dispatch({
        type: SET_LIPID_MOL_W_DATA,
        payload: lipidsMolWData,
        step: step
    });
}

export const copyLipidsMolWData = (lipidsMolWData: LipidMolWData) => dispatch => {
    dispatch({
        type: COPY_LIPID_MOL_W_DATA,
        payload: lipidsMolWData,
    });
}

export const clearLipidsMolWData = () => dispatch => {
    dispatch({
        type: CLEAR_LIPIDS_MOL_W_DATA
    })
}

export const setMolWFormStep = (step: number) => dispatch => {
    dispatch({
        type: SET_MOL_W_FORM_STEP,
        payload: step
    })
}