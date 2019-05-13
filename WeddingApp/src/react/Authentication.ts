import Cookies from 'js-cookie';
import { CookieNamesEnum } from './App';
import { IContextState } from '../types/ContextState';
import { FieldValues } from '../types/FieldValues';

export const getRegistrationParticipant = () => Cookies.get(CookieNamesEnum.RegistrationParticipant)
export const isAuthenticated = () => !!getRegistrationParticipant();

export const parseRegistrationParticipant = () => {
  const participant = getRegistrationParticipant();
  if(participant) {
    return JSON.parse(participant);
  }
  return null;
}

export const getFieldValues = (): FieldValues => {
  const stringifiedValues = Cookies.get(CookieNamesEnum.FieldValues);
  return !stringifiedValues ? {} : JSON.parse(stringifiedValues);
}

export const getInitialValues = (): IContextState => ({
  values: getFieldValues(),
  participant: parseRegistrationParticipant(), 
  imagePath: '../../../assets/images/About.jpg',
  error: '',
  info: '',
  overlay: false,
});