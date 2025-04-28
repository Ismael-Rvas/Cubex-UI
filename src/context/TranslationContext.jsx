import { createContext, useContext } from "react";
import { useTranslation } from "react-i18next";

const TranslationContext = createContext();

export function TranslationProvider({ children }) {
  const { t, i18n } = useTranslation(); 

  return (
    <TranslationContext.Provider value={{ t, i18n }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useAppTranslation() {
  return useContext(TranslationContext);
}
