import React from "react";
import { useTranslation } from "react-i18next";
const locales = [
  { lang: "en", title: "EN" },
  { lang: "fi", title: "FI" }
];
const LocaleSwitcher = () => {
  const { i18n } = useTranslation();
  return (
    <div className="flex justify-center items-center">
      <select
        className="uppercase dark:bg-gray-800 bg-gray-200 border-cyan-900"
        value={localStorage.getItem("i18nextLng") || locales[0].lang}
        onChange={(e) => i18n.changeLanguage(e.target.value)}>
        {locales.map((loc, index) => (
          <option
            value={loc.lang}
            key={index}
            disabled={i18n.resolvedLanguage === loc}
            className="text-black dark:text-white">
            {loc.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LocaleSwitcher;
