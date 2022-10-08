import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { lang } from "../utils";

export const localeResources = {
  ru: {
    translation: require("./locales/ru.json"),
  },
  kk: {
    translation: require("./locales/kz.json"),
  },
};

i18n.use(initReactI18next).init({
  resources: localeResources,
  lng: lang,
  fallbackLng: lang,
  interpolation: {
    escapeValue: false,
  },
});

export const setInitLang = async (lang) => {
  await i18n.changeLanguage(lang);
};

export const tl = (s) => i18n.t(s);

export default i18n;
