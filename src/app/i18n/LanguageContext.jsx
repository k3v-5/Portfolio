"use client";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { translations } from "./translations";

const STORAGE_KEY = "portfolio-lang";
const LanguageContext = createContext(null);

function detectInitialLanguage() {
  if (typeof window === "undefined") return "en";
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved === "en" || saved === "es") return saved;
  // Sin preferencia guardada: detectar idioma del navegador.
  const browserLang = window.navigator.language || "en";
  return browserLang.toLowerCase().startsWith("es") ? "es" : "en";
}

export function LanguageProvider({ children }) {
  // Arranca en "en" para que el primer render del servidor y del cliente
  // coincidan (evita mismatches de hidratación); el idioma real se resuelve
  // en el efecto de montaje, una vez que hay acceso a localStorage/navigator.
  const [lang, setLangState] = useState("en");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setLangState(detectInitialLanguage());
    setReady(true);
  }, []);

  const setLang = (next) => {
    setLangState(next);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, next);
    }
  };

  const toggleLang = () => setLang(lang === "en" ? "es" : "en");

  const value = useMemo(
    () => ({
      lang,
      setLang,
      toggleLang,
      ready,
      t: translations[lang],
    }),
    [lang, ready, toggleLang],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage debe usarse dentro de <LanguageProvider>");
  }
  return ctx;
}
