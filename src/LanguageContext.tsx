import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export type Language = 'hi' | 'en';

const LanguageContext = createContext<{
  language: Language;
  toggleLanguage: () => void;
} | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    try {
      return localStorage.getItem('site-language') === 'en' ? 'en' : 'hi';
    } catch {
      return 'hi';
    }
  });

  useEffect(() => {
    document.documentElement.lang = language;
    try {
      localStorage.setItem('site-language', language);
    } catch {
      // Keep the selected language for this session when storage is unavailable.
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((current) => (current === 'hi' ? 'en' : 'hi'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export function localize(language: Language, hindi: string, english: string) {
  return language === 'hi' ? hindi : english;
}
