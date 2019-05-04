import Cookies from 'js-cookie';

export const getRegistrationToken = () => Cookies.get('registration_token')
export const isAuthenticated = () => !!getRegistrationToken()