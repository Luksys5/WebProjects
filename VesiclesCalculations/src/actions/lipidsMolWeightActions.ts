import { SET_LIPID_MOL_W_INFO, SET_MOL_W_FORM_STEP,
    COPY_LIPID_MOL_W_DATA, SET_LIPID_MOL_W_DATA, CLEAR_LIPIDS_MOL_W_DATA, SET_LOADING, SET_LIPID_MOL_W_RESULTS, SET_ERROR 
} from './types';
<<<<<<< HEAD
import { LipidsMolWInfo, LipidMolWData } from '../models';
=======
import { LipidsMolWInfo, LipidMolWData, ILipidData, LipidsMolWResults, ILipidMolWResult } from '../models';
import { calculateLipidsMolWeight } from '../services/gcf';
>>>>>>> 56840ff... VCC. Released production version v1.0.0
    
export const setLipidsMolWInfo = (lipidsMolWInfo: LipidsMolWInfo) => dispatch => {
    dispatch({
        type: SET_LIPID_MOL_W_INFO,
        payload: lipidsMolWInfo,
        step: 1
    });
}

<<<<<<< HEAD
export const setLipidsMolWData = (lipidsMolWData: { lipid: LipidMolWData[] }, step: number) => dispatch => {
=======
export const setLipidsMolWData = (lipidsMolWData: { lipid: LipidMolWData[] }, step: number, molWeightInfo: any) => async(dispatch) => {
    
    if(molWeightInfo != null) {
        dispatch({
            type: SET_LOADING,
            loading: true,
            loadingText: 'Calculating'
        })

        let error: string = null;
        let results: LipidsMolWResults = new LipidsMolWResults();
        try {
            // calculate molecular weight
            const data: ILipidMolWResult[] = await calculateLipidsMolWeight(molWeightInfo, lipidsMolWData);
            results.data = data;
            results.calculated = true;

            // when no errors occured dispatch results
            dispatch({
                type: SET_LIPID_MOL_W_RESULTS,
                payload: results,
            });
            
        } catch(ex) {
            error = ex. toString()
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

>>>>>>> 56840ff... VCC. Released production version v1.0.0
    dispatch({
        type: SET_LIPID_MOL_W_DATA,
        payload: lipidsMolWData,
        step
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