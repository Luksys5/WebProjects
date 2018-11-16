import { IField } from "../models";
// @ts-ignore
import { each } from 'lodash';
import { ILipidData } from "../models/subModels/ILipidData";
import LipidData from "../models/LipidVolumeData";

export const validateValues = (values: any, fields: any) => {
  let errors = {};

  each(fields, (field: IField, name: string) => {
    if(!values[name]) {
      errors = Object.assign(errors, { [name]: `${field.label} is required to be filled`});
    } else if(field.validator) {
      const error = field.validator(values[name], field.numbersAfterComma);
      if(!!error) {
         errors = Object.assign(errors, { [name]: `${field.label} ${error}`});
      }
    }
  });

  return errors;
}


export const validateData = (data: ILipidData, fields: any, sumPercentage: boolean) => {

  let errors = {};
  if (!data.lipids || !data.lipids.length) {
    errors = Object.assign(errors, { lipids: { _error: 'At least one lipid must be added' } });
  } else {
    const lipidsErrors = [];
    let containsErrors: boolean = false;
    data.lipids.forEach((lipid: LipidData) => {
      const error = validateValues(lipid, fields);
      if(JSON.stringify(error) != '{}') {
        containsErrors = true;
      }
      lipidsErrors.push(error);
    });

    if(sumPercentage) {
      let sum: number = 0;
      data.lipids.forEach(element => sum += parseInt(element.percentage));

      if(sum !== 100) {
        errors = Object.assign(errors, { lipids: { _error: 'Sum of lipids percentages must be equal to 100!' } } )
      }
    } 

    if(containsErrors) { 
      errors = Object.assign(errors, { lipids: lipidsErrors });
    }
  }
  return errors;
}