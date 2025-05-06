
import React, { createContext, useContext } from "react";
import { useTranslation } from "react-i18next";

const TranslationContext = createContext(undefined);

export function TranslationProvider({ children }) {
  const { t, i18n } = useTranslation();

  return (
    <TranslationContext.Provider value={{ t, i18n }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useAppTranslation() {
  const context = useContext(TranslationContext);
  if (context === undefined) {
     throw new Error('useAppTranslation must be used within a TranslationProvider');
  }
  return context;
}
  