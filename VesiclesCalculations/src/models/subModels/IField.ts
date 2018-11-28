export interface IField {
    type: string;
    name: string;
    unitClassName: string;
    label: string;
    helpText: string;
    units?: any;
    numbersAfterComma?: number;
    validator: (value: string, numbersAfterComma?: number) => boolean;
}