import * as jQuery from 'jquery';
import { ICalcResult } from '../models/subModels/ICalcResult';

export const calculateLipidsVolume = async (finalMass, lipidsData): Promise<any> => {
    return new Promise<any>((resolve, reject) => {
        jQuery.ajax({
            // url: 'https://europe-west1-mylocalworldmap.cloudfunctions.net/calculate-lipidsVolume',
            url: 'http://localhost:5000/calculate-lipidsVolume',
            method: 'POST',
            crossDomain: true,
            data: JSON.stringify({ finalMass: finalMass, lipids: lipidsData }),
            dataType: 'json',
            contentType: 'application/json',
            success: (result: ICalcResult) => {
                if(result.success) {
                    resolve(result.data);
                } else {
                    reject(result.message + result.error.toString())
                }
            },
            error: (jqXHR, status, message) => {
                reject(`Error occurred! ${!message ? 'Couldn\'t connect to the server please try again or later' : message}`);
            }
        })
    })
}

export const sendDataToEmail = async(data: string, email: string): Promise<any> => {
    return new Promise<any>((resolve, reject) => {
        jQuery.ajax({
            // url: 'https://europe-west1-mylocalworldmap.cloudfunctions.net/calculate-lipidsVolume',
            url: 'http://localhost:5000/send-mail',
            method: 'POST',
            crossDomain: true,
            data: JSON.stringify({ data, email }),
            dataType: 'json',
            contentType: 'application/json',
            success: (result: ICalcResult) => {
                if(result.success) {
                    resolve(result.data);
                } else {
                    reject(`Error occurred! ${result.message} ${result.error.toString()}`);
                }
            },
            error: (jqXHR, status, message) => {
                reject(`Error occurred! ${!message ? 'Couldn\'t connect to the server please try again or later' : message}`);
            }
        })
    })

}