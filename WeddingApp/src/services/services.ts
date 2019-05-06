import { IAuthenticationResult } from "../types/Result";

const ServiceURL = "https://us-central1-mylocalworldmap.cloudfunctions.net/"; 
const settings = {
  method: "POST",
}

export const Authenticate = async (code: string) => {
  return await fetch(`${ServiceURL}validateKey?key=${code}`, settings)
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

export const SendConfirmationLetter = () => {
  
}