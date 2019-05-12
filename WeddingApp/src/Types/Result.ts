import { IParticipant } from "./Participant";

export interface IAuthenticationResult {
  success: boolean;
  error?: string;
  participant: IParticipant; 
}