import Cookie from 'js-cookie';

export const UpdateCookieProperty = (name, value, stringify) => {
  const expires = 60 * 60 * 1000;
  const inOneHour = new Date(new Date().getTime() + expires)
  Cookie.set(name, stringify ? JSON.stringify(value) : value, { expires: inOneHour });
}