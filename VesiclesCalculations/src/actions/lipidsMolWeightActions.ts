import { SET_LIPID_MOL_W_INFO, SET_MOL_W_FORM_STEP,
    COPY_LIPID_MOL_W_DATA, SET_LIPID_MOL_W_DATA, CLEAR_LIPIDS_MOL_W_DATA, SET_LOADING, SET_LIPID_MOL_W_RESULTS, SET_ERROR 
} from './types';
import { LipidsMolWInfo, LipidMolWData, ILipidData, LipidsMolWResults, ILipidMolWResult, ProjectTypes } from '../models';
import { calculateLipidsMolWeight } from '../services/gcf';
    
export const setLipidsMolWInfo = (lipidsMolWInfo: LipidsMolWInfo) => dispatch => {
    dispatch({
        type: SET_LIPID_MOL_W_INFO,
        payload: lipidsMolWInfo,
        step: 1
    });
}

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

    dispatch({
        type: SET_LIPID_MOL_W_DATA,
        payload: lipidsMolWData,
        step
    });
}


export const setLipidsMolWInfoAndData = (molWInfo: LipidsMolWInfo, molWData: ILipidData) => dispatch => {
    dispatch({
        type: SET_LIPID_MOL_W_INFO,
        payload: molWInfo,
        step: 0
    });

    dispatch({
        type: SET_LIPID_MOL_W_DATA,
        payload: molWData,
        step: 0
    })
}

export const fillLipidsMolWInfoAndData = () => dispatch => {
    dispatch({
        type: SET_LIPID_MOL_W_INFO,
        payload: {
            title: 'Example',
            diameterStart: '74',
            diameterEnd: '150',
            step: '3',
            lipidsCount: 3,
            type: ProjectTypes.LipidMolWeight,
            filled: true,
            modifiedDate: new Date().toLocaleString()
        },
        step: 0
    });

    dispatch({
        type: SET_LIPID_MOL_W_DATA,
        payload: { lipids: [
            {
               name: 'first lipid',
               percentage: '17',
               molWeight: '0.1',
               height: '5',
               area: '20'
            },
            {
               name: 'second lipid',
               percentage: '37',
               molWeight: '0.32',
               height: '7',
               area: '23'
            },
            {
               name: 'third lipid',
               percentage: '46',
               molWeight: '0.2',
               height: '3',
               area: '13'
            }
        ]},
        step: 0
    })
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