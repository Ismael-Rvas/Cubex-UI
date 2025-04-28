import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n.use(LanguageDetector) // Detecta automáticamente el idioma del navegador
  .use(HttpApi) // Carga traducciones desde archivos JSON externos
  .use(initReactI18next)
  .init({
    supportedLngs: ["en", "es"], // Idiomas soportados
    fallbackLng: ["es", "en"], 
    debug: true,
    interpolation: { escapeValue: false },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json" // Carga traducciones según el idioma detectado
    },
    detection: {
      order: ["navigator", "localStorage", "cookie"], // Prioriza el idioma del navegador
      caches: ["localStorage", "cookie"] // Guarda la selección para futuras visitas
    }
  });
export default i18n;
