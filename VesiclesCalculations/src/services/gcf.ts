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
    })

}