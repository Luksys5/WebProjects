import { FieldValues } from "./FieldValues";
import { IParticipant } from "./Participant";

export interface IContextState {
  values: FieldValues;
  participant: IParticipant | null;
  imagePath: string;
  error: string;
  info: string;
  overlay: boolean;
}