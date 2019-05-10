import { IAuthenticationResult } from "../types/Result";
import { FieldValues } from "../types/FieldValues";

const ServiceURL = "https://us-central1-mylocalworldmap.cloudfunctions.net/"; 
const defaultSettings: RequestInit = {
  method: "POST"
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

export const SendConfirmationLetter = async (code: string, values: FieldValues) => {
  const settings:RequestInit = {
    ...defaultSettings,
    body: JSON.stringify({
      values: values,
      token: code
    })
  };
  debugger;
  return CallGCFunction(`${ServiceURL}sendParticipationLetter`, settings);
}