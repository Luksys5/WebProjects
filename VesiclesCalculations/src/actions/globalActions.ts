import { createElement } from 'react';
import * as gcf from '../services/gcf';
import { SET_ERROR, SET_INFO, SET_DIALOG, SET_STRINGIFIED_RESULTS, SET_LOADING } from "./types";
import { LipidsVolInfo, ILipidData, LipidsMolWInfo } from "../models";
import { Cookies } from "react-cookie";
import { EmailForm } from '../forms';

export const saveProject = (cookies: Cookies, projectInfo: any, projectData: ILipidData, cookieNamespace: string) => dispatch => {
    try {
        const projectInfoCookieName: string = cookieNamespace + 'I';
        const projectDataCookieName: string = cookieNamespace + 'D';
        let projectInfoArray: any[] =  cookies.get(projectInfoCookieName) || [];
        let projectDataArray: any[] = cookies.get(projectDataCookieName) || [];

        // find current project by title and set new values
        const currentProjectIndex: any = projectInfoArray.findIndex((info: LipidsVolInfo | LipidsMolWInfo) => info.title == projectInfo.title);
        
        // when not found then add new element
        if(currentProjectIndex == -1) {
            projectInfoArray.push(projectInfo);
            projectDataArray.push(projectData);
        } else {
            projectInfoArray[currentProjectIndex] = projectInfo;
            projectDataArray[currentProjectIndex] = projectData;
        }

        cookies.set(projectInfoCookieName, JSON.stringify(projectInfoArray), { maxAge: (60 * 60 * 24 * 365 * 10) });
        cookies.set(projectDataCookieName, JSON.stringify(projectDataArray), { maxAge: (60 * 60 * 24 * 365 * 10) });

        setInfo('Project saved, you can view it in My Projects tab')(dispatch);
        
    } catch(ex) {
        setError("Error occurred: " + ex.toString())(dispatch);
    }
}

export const stringifyResults = (infoFields: any, dataFields: any, resultFields, lipidsInfo: LipidsVolInfo, lipidsData: ILipidData, lipidsResults: ILipidData | any, projectType: number) => {
    let results: string = '';

    // Concatenating Project field labels
    const allFields = Object.assign({},
        infoFields,
        { 'totalMass': { label: 'Total Mass' } },
        { 'totalVolume': { label: 'Total Volume'}},
    );
    results += 'Project Type,Modified Date,'
    for(let fieldName in allFields) {
        results += allFields[fieldName].label + ',';
    }
    results = results.substr(0, results.length - 1) + '\n';

    // add field values to results
    if(lipidsInfo.type == null) {
        lipidsInfo.type = projectType;
    }
    if(lipidsInfo.modifiedDate == null) {
        lipidsInfo.modifiedDate = new Date().toLocaleString();
    }

    results += lipidsInfo.type + ',' + lipidsInfo.modifiedDate.replace(',', ';') + ',';
    for(let fieldName in infoFields) {
        results += lipidsInfo[fieldName] + ',';
    }
    results += lipidsResults.totalMass + ',' + lipidsResults.totalVolume + '\n\n';

    const dataAndResultFields = Object.assign({}, 
        { lipid: { label: 'Lipid No.' } },
        dataFields, resultFields
    );
    for(let fieldName in dataAndResultFields) {
        results += dataAndResultFields[fieldName].label + ',';
    }
    results = results.substr(0, results.length - 1) + '\n';

    // add field values to results

    for(let i = 0; i < lipidsData.lipids.length; i++) {
        // log lipid number
        results += (i + 1) + ',';

        // insert data values and result values
        let lipid = lipidsData.lipids[i];
        for(let fieldName in dataFields) {
            results += lipid[fieldName] + ',';
        }
        lipid = lipidsResults.lipids[i];
        for(let fieldName in resultFields) {
            results += lipid[fieldName] + ',';
        }
        results = results.substr(0, results.length - 1) + '\n';
    }

    return results;
}

export const sendDataToEmail = async(values: any, stringifiedResults: string, dispatch: any) => {
    dispatch({
        type: SET_LOADING,
        loading: true,
        loadingText: 'Sending'
    });

    try {
        await gcf.sendDataToEmail(stringifiedResults, values.email);
        setInfo('Data has been sent to specified email')(dispatch); 
    } catch(ex) {
        setError(ex.toString())(dispatch); 
    }

    setDialog(null, null, null, null, false)(dispatch);

    dispatch({
        type: SET_LOADING,
        loading: false
    });
}

const header = 'Send Data To Email';

export const setDialogEmailForm = dispatch => {
    setDialog(header, createElement(EmailForm), null, null, true)(dispatch);
}

export const setStringifiedResults = (stringifiedResults: string) => dispatch => {
    dispatch({
        type: SET_STRINGIFIED_RESULTS,
        stringifiedResults
    })
}

export const setDialog = (header: string, content: any, buttons: any[], info: JSX.Element, overlay: boolean) => dispatch => {
    dispatch({
        type: SET_DIALOG,
        dialog: { header, content, buttons, info, overlay }
    })
}

export const setError = (error: string) => dispatch => {
    dispatch({
        type: SET_ERROR,
        error
    });
}

export const setInfo = (info: string) => dispatch => {
    dispatch({
        type: SET_INFO,
        info
    })
}

export const closeError = () => dispatch => {
    dispatch({
        type: SET_ERROR,
        error: null
    });
}

export const closeInfo = () => dispatch => {
    dispatch({
        type: SET_INFO,
        info: null
    })
}