import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { I18nextProvider, initReactI18next } from "react-i18next";
import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import resources from "./components/Language/translation/Index.js";
import { BrowserRouter } from "react-router-dom";
const defaultLanguage = ["ru"];
i18next.use(LanguageDetector, initReactI18next).init({
  resources,
  fallbacklng: defaultLanguage,
  interpolation: { escapeValue: true },
  lng: window.localStorage.getItem("i18nextLng"),
  debug: false,
});
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </BrowserRouter>,
);
