import React, { createContext, useState, useCallback, ReactNode } from 'react';
import { translations } from '../data/translations';

interface LanguageContextType {
    language: string;
    setLanguage: (lang: string) => void;
    t: (key: string, params?: { [key: string]: string | number }) => string;
}

export const LanguageContext = createContext<LanguageContextType>({
    language: 'fr',
    setLanguage: () => {},
    t: (key: string) => key,
});

interface LanguageProviderProps {
    children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
    const [language, setLanguageState] = useState(() => {
        return localStorage.getItem('quizLang') || 'fr';
    });

    const setLanguage = (lang: string) => {
        localStorage.setItem('quizLang', lang);
        setLanguageState(lang);
    };

    const t = useCallback((key: string, params: { [key: string]: string | number } = {}) => {
        const langTranslations = translations[language] || translations.fr;
        let translation = (langTranslations && langTranslations[key]) ? langTranslations[key] : key;
        
        Object.keys(params).forEach(paramKey => {
            translation = translation.replace(`{${paramKey}}`, String(params[paramKey]));
        });

        return translation;
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};