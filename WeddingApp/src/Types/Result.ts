import { IParticipant } from "./Participant";

export interface IAuthenticationResult {
  succeed: boolean;
  error?: string;
  participant: IParticipant; 
}