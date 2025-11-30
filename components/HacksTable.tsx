import * as React from 'react';
import { HackRow } from './HackRow';
import type { Hack, Language } from '../types';
import type { useTranslations } from '../hooks/useTranslations';

interface HacksTableProps {
  hacks: Hack[];
  language: Language;
  t: ReturnType<typeof useTranslations>['t'];
  onSelectHack: (hack: Hack) => void;
}

export const HacksTable: React.FC<HacksTableProps> = ({ hacks, language, t, onSelectHack }) => {
  if (hacks.length === 0) {
    return (
      <div className="p-8 text-center text-gray-400">
        <p>{t('noHacksFound')}</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-300">
        <thead className="text-xs text-cyan-400 uppercase bg-gray-700/50">
          <tr>
            <th scope="col" className="px-6 py-3">{t('tableHeader_hack')}</th>
            <th scope="col" className="px-6 py-3">{t('tableHeader_context')}</th>
            <th scope="col" className="px-6 py-3">{t('tableHeader_compatibleLlms')}</th>
            <th scope="col" className="px-6 py-3">{t('tableHeader_example')}</th>
            <th scope="col" className="px-6 py-3">{t('tableHeader_mainBenefit')}</th>
            <th scope="col" className="px-6 py-3">{t('tableHeader_rating')}</th>
          </tr>
        </thead>
        <tbody>
          {hacks.map((hack) => (
            <HackRow key={hack.id} hack={hack} language={language} t={t} onSelectHack={onSelectHack} />
          ))}
        </tbody>
      </table>
    </div>
  );
};