import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as Localization from "expo-localization";

import en from "./locales/en.json";
import hi from "./locales/hi.json";

const resources = {
  en: { translation: en },
  hi: { translation: hi },
};

i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  resources,
  fallbackLng: "en",
  lng: Localization.locale.split("-")[0], // Automatically set the language based on the device's locale
  debug: true,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
