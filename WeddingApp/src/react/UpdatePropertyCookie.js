import Cookie from 'js-cookie';

export const UpdateCookieProperty = (name, value) => {
  const expires = 60 * 60 * 1000;
  const inOneHour = new Date(new Date().getTime() + expires)
  Cookie.set(name, JSON.stringify(value), { expires: inOneHour });
}