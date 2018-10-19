import { SET_LIPID_VOLUME_INFO, SET_VOLUME_FORM_STEP,
    COPY_LIPID_VOLUME_DATA, SET_LIPID_VOLUME_DATA, CLEAR_LIPIDS_VOL_DATA, SET_LOADING, SET_LIPID_VOLUME_RESULTS
} from './types';
import { LipidsVolInfo, LipidVolData } from '../models';
import { calculateLipidsVolume } from '../services/gcf';
    
export const setLipidsVolInfo = (lipidsVolInfo: LipidsVolInfo) => dispatch => {
    dispatch({
        type: SET_LIPID_VOLUME_INFO,
        payload: lipidsVolInfo,
        step: 1
    });
}

export const setLipidsVolData = (lipidsVolData: { lipid: LipidVolData[] }, step: number, volumeInfo: LipidsVolInfo) =>
    async(dispatch) => {
    // set loading if calculate is true
    if(LipidsVolInfo != null) {
        dispatch({
            type: SET_LOADING,
            loading: true
        })
        
        const results: any = await calculateLipidsVolume(volumeInfo, lipidsVolData);

        dispatch({
            type: SET_LIPID_VOLUME_RESULTS,
            payload: results
        })

        dispatch({
            type: SET_LOADING,
            loading: false
        });
    }

    dispatch({
        type: SET_LIPID_VOLUME_DATA,
        payload: lipidsVolData,
        step
    });

}

export const copyLipidsVolData = (lipidsVolData: LipidVolData) => dispatch => {
    dispatch({
        type: COPY_LIPID_VOLUME_DATA,
        payload: lipidsVolData,
    });
}

export const clearLipidsVolData = () => dispatch => {
    dispatch({
        type: CLEAR_LIPIDS_VOL_DATA
    })
}

export const setVolFormStep = (step: number) => dispatch => {
    dispatch({
        type: SET_VOLUME_FORM_STEP,
        payload: step
    })
}