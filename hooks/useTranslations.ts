
import { useCallback } from 'react';
import { translations } from '../data/translations';
import type { Language, Objective } from '../types';

// This is a helper type to extract keys from the translations object
type TranslationKey = keyof typeof translations.en;

export const useTranslations = (language: Language) => {
  const t = useCallback((key: TranslationKey, ...args: any[]): string => {
    let translation = translations[language][key] || translations['en'][key];
    if (translation && args.length > 0) {
      // Basic interpolation if needed, e.g., t('someKey', 'value') replaces {0}
      args.forEach((arg, index) => {
        translation = (translation as string).replace(`{${index}}`, arg);
      });
    }
    return translation || (key as string);
  }, [language]);

  const tObjective = useCallback((objective: Objective): string => {
    const key = `objective_${objective}` as TranslationKey;
    return t(key);
  }, [t]);

  return { t, tObjective };
};
