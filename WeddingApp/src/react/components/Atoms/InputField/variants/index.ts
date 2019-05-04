import { CheckboxField } from "./CheckboxField";
import { TextField } from "./TextField";
import { IRegField } from "../../../../../types/RegField";

export interface FieldProps extends IRegField {
  value: any;
  error: any;
  onChange: (name: string, title: string, value: any) => void;
}

interface Variant {
  [key: string]: React.StatelessComponent<FieldProps>;
}

export const FieldVariants: Variant = {
  checkbox: CheckboxField,
  text: TextField
};