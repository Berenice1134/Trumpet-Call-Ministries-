import { useMemo, useState } from "react";
import { translations } from "../data/translations";
import { LanguageContext } from "./languageContext.js";

function getNestedValue(source, key) {
  return key.split(".").reduce((current, part) => current?.[part], source);
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("es");

  const value = useMemo(() => {
    const t = (key) => getNestedValue(translations[language], key) ?? key;

    return {
      language,
      setLanguage,
      t,
      dictionary: translations[language],
    };
  }, [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
