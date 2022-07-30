import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "../public/locales/en.json";
import fi from "../public/locales/fi.json";

const resources = {
  en,
  fi
};

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: true,
    fallbackLng: "en",
    ns: ["translations"],
    defaultNS: "translations",
    resources
  });

export default i18next;
