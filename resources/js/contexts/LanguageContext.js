import React, { createContext, useState, useEffect } from 'react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translations
import enTranslations from '../utils/translations/en';
import arTranslations from '../utils/translations/ar';

// Initialize i18next
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      ar: { translation: arTranslations }
    },
    lng: localStorage.getItem('language') || 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');
  const [isRTL, setIsRTL] = useState(language === 'ar');

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    i18n.changeLanguage(lang);
    setIsRTL(lang === 'ar');
    
    // Apply RTL class to body if Arabic
    if (lang === 'ar') {
      document.body.classList.add('rtl');
    } else {
      document.body.classList.remove('rtl');
    }
  };

  // Initialize language direction
  useEffect(() => {
    if (language === 'ar') {
      document.body.classList.add('rtl');
    }
  }, [language]);

  const value = {
    language,
    isRTL,
    changeLanguage,
    t: i18n.t
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};