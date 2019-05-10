import Cookies from 'js-cookie';
import { CookieNamesEnum } from './App';

export const getRegistrationToken = () => Cookies.get(CookieNamesEnum.RegistrationToken)
export const isAuthenticated = () => !!getRegistrationToken()