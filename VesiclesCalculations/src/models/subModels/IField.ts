export interface IField {
    name: string;
    type: string;
    label: string;
    helpText: string;
    units?: any;
    numbersAfterComma?: number;
    validator: (value: string, numbersAfterComma?: number) => boolean;
}