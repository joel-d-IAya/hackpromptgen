import * as React from 'react';
import { useState } from 'react';
import type { Hack, Language } from '../types';
import type { useTranslations } from '../hooks/useTranslations';
import { CopyIcon } from './icons/CopyIcon';
import { StarIcon } from './icons/StarIcon';

interface HackRowProps {
  hack: Hack;
  language: Language;
  t: ReturnType<typeof useTranslations>['t'];
  onSelectHack: (hack: Hack) => void;
}

export const HackRow: React.FC<HackRowProps> = ({ hack, language, t, onSelectHack }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent modal from opening when copying
    navigator.clipboard.writeText(hack.examples[0].prompt[language]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  const avgRating = hack.ratings.length > 0
    ? hack.ratings.reduce((a, b) => a + b, 0) / hack.ratings.length
    : 0;

  return (
    <tr 
      className="bg-gray-800 border-b border-gray-700 hover:bg-gray-700/50 transition-colors duration-200 cursor-pointer"
      onClick={() => onSelectHack(hack)}
      title={t('viewDetails')}
    >
      <th scope="row" className="px-6 py-4 font-medium text-white">
        {hack.name[language]}
      </th>
      <td className="px-6 py-4">{hack.context[language]}</td>
      <td className="px-6 py-4">
        <div className="flex flex-wrap gap-1">
          {hack.compatibleLlms.map((llm) => (
            <span key={llm} className="px-2 py-0.5 text-xs font-medium bg-gray-600 text-gray-200 rounded-full">
              {llm}
            </span>
          ))}
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-2 relative">
          <p className="flex-1 font-mono text-cyan-300 text-xs">{hack.examples[0].prompt[language]}</p>
          <button
            onClick={handleCopy}
            className="p-2 rounded-md bg-gray-700 hover:bg-cyan-600 text-gray-300 hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            aria-label={t('copy')}
          >
            <CopyIcon className="w-4 h-4" />
          </button>
          {copied && <span className="text-xs text-green-400 -top-6 right-0 absolute bg-gray-900 px-2 py-1 rounded">{t('copied')}</span>}
        </div>
      </td>
      <td className="px-6 py-4">{hack.mainBenefit[language]}</td>
      <td className="px-6 py-4">
        <div className="flex items-center space-x-1" title={`${t('averageRating')}: ${avgRating.toFixed(1)}`}>
          <StarIcon className="w-5 h-5 text-amber-400" filled={avgRating > 0} />
          <span className="font-bold text-gray-200">{avgRating.toFixed(1)}</span>
        </div>
      </td>
    </tr>
  );
};