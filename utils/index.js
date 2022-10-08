import { parseCookies } from "nookies";
export const getLanguage = () => {
  const cookie = parseCookies();
  return cookie.lang;
};
export const lang = getLanguage() ? getLanguage() : "ru";
