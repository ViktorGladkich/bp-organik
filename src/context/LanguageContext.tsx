"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "ru" | "tr";

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextProps>({
  language: "en",
  setLanguage: () => {},
});

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [language, setLanguage] = useState<Language>("en");

  // Load saved language from local storage on mount
  useEffect(() => {
    const saved = localStorage.getItem("bp_lang") as Language;
    if (saved && ["en", "ru", "tr"].includes(saved)) {
      setTimeout(() => setLanguage(saved), 0);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("bp_lang", lang);
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleSetLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
