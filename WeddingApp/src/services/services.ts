import { IAuthenticationResult } from "../types/Result";

const ServiceURL = "https://us-central1-mylocalworldmap.cloudfunctions.net/"; 
const defaultSettings = {
  method: "POST",
}

export const CallGCFunction = async(url: string, settings: any = defaultSettings) => {
  return fetch(url , settings)
    .then(resp => {
      if(!resp.ok) {
        throw Error(resp.statusText);
      }
      return resp.json();
    })
    .then((result: IAuthenticationResult) => {
      if(!result.succeed) {
        throw Error(result.error);
      }
      return result.participant;
    })
}

export const Authenticate = async (code: string) => {
  return CallGCFunction(`${ServiceURL}validateKey?key=${code}`);
}

export const SendConfirmationLetter = () => {
  
}