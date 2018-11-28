<<<<<<< HEAD
import * as jQuery from 'jquery';

export const calculateLipidsVolume = async (volumeInfo, volumeData): Promise<any> => {
    return new Promise<any>((resolve, reject) => {
        jQuery.ajax({
            url: 'https://europe-west1-mylocalworldmap.cloudfunctions.net/calculate-lipidsVolume',
            method: 'POST',
            data: JSON.stringify({ volumeInfo, volumeData }),
            dataType: 'json',
            contentType: 'application/json',
            success: (result) => {
                console.log(result);
                resolve(result);
            },
            error: (jqXHR, message, status) => {
                reject(message);
            }
        })
=======
import { ICalcResult } from '../models/subModels/ICalcResult';

interface IHeader {
    name: string;
    value: string
}

const xhrRequestWrapper = (method: string, url: string, headers: IHeader[], data: any, success: (result: any) => void, reject): void => {
    const xhr = new XMLHttpRequest();
    if('withCredentials' in xhr) {
        xhr.open(method, url, true);
        // timeout 5 seconds
        xhr.timeout = 5000;
        // set all request headers
        for(let i in headers) {
            const header: IHeader = headers[i];
            xhr.setRequestHeader(header.name, header.value);
        }
        xhr.onload = function() {
            if(xhr.status === 200) {
                const result: any = JSON.parse(xhr.responseText);
                success(result);
            } else {
                reject(`Error occurred! ${!xhr.responseText ? 'Couldn\'t connect to the server please try again or later' : xhr.responseText}`);
            }
        }
        xhr.ontimeout = function() {
            reject('Error occurred! Timeout exception, please try to submit again or retry later');
        }
        xhr.onerror = function() {
            reject('Error occurred! Cannot connect to the server, please try to submit again or retry later');
        }
        xhr.send(JSON.stringify(data));
    } else {
        reject('Your browser doesn\'t support server request. Please download newer version of IE to fully use our services');
    }
}

export const calculateLipidsVolume = async (finalMass, lipidsData): Promise<any> => {
    return new Promise<any>((resolve, reject) => {
        xhrRequestWrapper('POST', 'https://europe-west1-mylocalworldmap.cloudfunctions.net/calculate-lipidsVolume',
            [{
                name: 'Content-Type', value: 'application/json'
            }, {
                name: 'Accept', value: 'application/json'
            }],
            { finalMass: finalMass, lipids: lipidsData },
            (result: ICalcResult) => {
                if(result.success) {
                    resolve(result.data);
                } else {
                    reject(`Error occurred! ${result.message} ${result.error.toString()}`);
                }
            }, reject
        );
    })
}

export const calculateLipidsMolWeight = async (info, data): Promise<any> => {
    return new Promise<any>((resolve, reject) => {
        xhrRequestWrapper('POST', 'https://europe-west1-mylocalworldmap.cloudfunctions.net/calculate-lipidsMolWeight',
            [{
                name: 'Content-Type', value: 'application/json'
            }, {
                name: 'Accept', value: 'application/json'
            }],
            { 'info': info, 'data': data },  
            (result: ICalcResult) => {
                if(result.success) {
                    resolve(result.data);
                } else {
                    reject(`Error occurred! ${result.message} ${result.error.toString()}`);
                }
            }, reject
        );
    })
}

export const sendDataToEmail = async(data: string, email: string): Promise<any> => {
    return new Promise<any>((resolve, reject) => {
        xhrRequestWrapper('POST', 'https://europe-west1-mylocalworldmap.cloudfunctions.net/send-mail',
            [{
                name: 'Content-Type', value: 'application/json'
            }, {
                name: 'Accept', value: 'application/json'
            }],
            { data, email },
            (result: ICalcResult) => {
                if(result.success) {
                    resolve(result.data);
                } else {
                    reject(`Error occurred! ${result.message} ${result.error.toString()}`);
                }
            }, reject
        );
>>>>>>> 56840ff... VCC. Released production version v1.0.0
    })

}