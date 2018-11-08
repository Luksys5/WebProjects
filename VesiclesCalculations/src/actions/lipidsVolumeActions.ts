import { SET_LIPID_VOLUME_INFO, SET_VOLUME_FORM_STEP,
    COPY_LIPID_VOLUME_DATA, SET_LIPID_VOLUME_DATA, CLEAR_LIPIDS_VOL_DATA, SET_LIPID_VOLUME_RESULTS,
    SET_LOADING, SET_ERROR
} from './types';
import { LipidsVolInfo, LipidVolData, ILipidData } from '../models';
import { calculateLipidsVolume } from '../services/gcf';
    
export const setLipidsVolInfo = (lipidsVolInfo: LipidsVolInfo) => dispatch => {
    dispatch({
        type: SET_LIPID_VOLUME_INFO,
        payload: lipidsVolInfo,
        step: 1
    });
}

export const setLipidsVolData = (lipidsVolData: ILipidData, step: number, volumeInfo: LipidsVolInfo) =>
async(dispatch) => {

    // set loading if calculate is true
    if(volumeInfo != null) {
        dispatch({
            type: SET_LOADING,
            loading: true,
            loadingText: 'Calculating'
        })

        let error: string = null;
        let results: any = null;
        try {
            results = await calculateLipidsVolume(volumeInfo.finalMass, lipidsVolData.lipids);
            results.calculated = true;

            // when no errors occured dispatch results
            dispatch({
                type: SET_LIPID_VOLUME_RESULTS,
                payload: results,
            });
            
        } catch(ex) {
            error = ex.toString()
        }

        // Reset error
        dispatch({
            type: SET_ERROR,
            error: error
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

export const setLipidsVolInfoAndData = (volumeInfo: LipidsVolInfo, volumeData: ILipidData, clearResults: boolean) => dispatch => {
    dispatch({
        type: SET_LIPID_VOLUME_INFO,
        payload: volumeInfo,
        step: 0
    });

    dispatch({
        type: SET_LIPID_VOLUME_DATA,
        payload: volumeData,
        step: 0
    });

    if(clearResults) {
        dispatch({
            type: SET_LIPID_VOLUME_RESULTS,
            payload: { lipids: volumeData.lipids.map(lipid => {}) }
        })
    }
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