export const TitleValidator = (value: string) => (!value.match(new RegExp('^[a-z0-9-_ ]+$', 'i')) ? 'Field can contain only letters numbers and -, _' : '');
export const NumberValidator = (value: string) => isNaN(parseInt(value)) ? 'is not a valid number' : ''
export const GreaterThanValidator = (value: string, greaterThan) => {
  const numberValidation = NumberValidator(value);
  return !numberValidation ? (value > greaterThan ? '' : `must be greater than ${greaterThan}`) : numberValidation;
}
export const FloatValidator = (value: string, numbersAfterComma: number = 5) => {
    if(!!value.match(new RegExp("[^\\d\.,]+"))) {
      return 'must be a float value';
    }
    if(!value.match(new RegExp(`^[0-9]+(\.|,)?[0-9]{0,${numbersAfterComma}}$`))) {
        return `cannot contain more than ${numbersAfterComma} values after comma`;
    }
    return '';

}
export const PercentageValidator = (value: string) => {
  const percentage = parseInt(value);
  if(isNaN(percentage) || percentage < 0 || percentage > 100) {
    return 'must be number between 0 and 100';
  }
  return FloatValidator(value, 2);
}
