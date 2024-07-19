import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as Localization from "expo-localization";
import AsyncStorage from "@react-native-async-storage/async-storage";

import en from "./locales/en.json";
import hi from "./locales/hi.json";

const resources = {
  en: { translation: en },
  hi: { translation: hi },
};

const getLanguage = async () => {
  const storedLanguage = await AsyncStorage.getItem("language");
  return storedLanguage || Localization.locale.split("-")[0];
};

const initializeI18n = async () => {
  const language = await getLanguage();
  i18n.use(initReactI18next).init({
    compatibilityJSON: "v3",
    resources,
    fallbackLng: "en",
    lng: language,
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });
};

initializeI18n();

export const changeLanguage = async (language) => {
  await AsyncStorage.setItem("language", language);
  i18n.changeLanguage(language);
};

export default i18n;
