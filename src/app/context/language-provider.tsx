'use client';
import {createContext, useContext, useState} from 'react';

const LanguageContext = createContext('vn');

export const LanguageProvider = ({children}: {children: React.ReactNode}) => {
  const [language, setLanguage] = useState('vn');

  return <LanguageContext.Provider value={language}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => useContext(LanguageContext);
