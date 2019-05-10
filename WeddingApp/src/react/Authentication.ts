import Cookies from 'js-cookie';
import { CookieNamesEnum } from './App';
import { string } from 'prop-types';
import { IContextState } from '../types/ContextState';
import { FieldValues } from '../types/FieldValues';

export const getRegistrationToken = () => Cookies.get(CookieNamesEnum.RegistrationToken)
export const isAuthenticated = () => !!getRegistrationToken();

export const getFieldValues = (): FieldValues => {
  const stringifiedValues = Cookies.get(CookieNamesEnum.FieldValues);
  return !stringifiedValues ? {} : JSON.parse(stringifiedValues);
}

export const getInitialValues = (): IContextState => ({
  values: getFieldValues(),
  token: getRegistrationToken() || '',
  error: '',
  info: ''
});