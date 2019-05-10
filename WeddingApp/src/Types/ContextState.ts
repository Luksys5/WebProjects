import { FieldValues } from "./FieldValues";

export interface IContextState {
  values: FieldValues;
  token: string;
  error: '';
  info: '';
}