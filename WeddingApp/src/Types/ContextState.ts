import { FieldValues } from "./FieldValues";

export interface IContextState {
  values: FieldValues;
  token: string;
  error: string;
  info: string;
}