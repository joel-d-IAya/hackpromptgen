import React from 'react';
import type { Language } from '../types';
import type { useTranslations } from '../hooks/useTranslations';

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: ReturnType<typeof useTranslations>['t'];
}

export const Header: React.FC<HeaderProps> = ({ language, setLanguage, t }) => {
  return (
    <header className="bg-gray-800/50 backdrop-blur-sm sticky top-0 z-10 shadow-lg shadow-cyan-500/10">
      <div className="container mx-auto px-4 sm:px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-500">
          {t('title')}
        </h1>
        <div className="flex items-center space-x-1 bg-gray-700 rounded-full p-1">
          <button
            onClick={() => setLanguage('fr')}
            className={`px-3 py-1 text-sm font-semibold rounded-full transition-colors duration-300 ${
              language === 'fr' ? 'bg-cyan-500 text-white' : 'text-gray-300 hover:bg-gray-600'
            }`}
          >
            FR
          </button>
          <button
            onClick={() => setLanguage('en')}
            className={`px-3 py-1 text-sm font-semibold rounded-full transition-colors duration-300 ${
              language === 'en' ? 'bg-cyan-500 text-white' : 'text-gray-300 hover:bg-gray-600'
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLanguage('es')}
            className={`px-3 py-1 text-sm font-semibold rounded-full transition-colors duration-300 ${
              language === 'es' ? 'bg-cyan-500 text-white' : 'text-gray-300 hover:bg-gray-600'
            }`}
          >
            ES
          </button>
        </div>
      </div>
    </header>
  );
};
