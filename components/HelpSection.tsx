import React from 'react';
import type { useTranslations } from '../hooks/useTranslations';

interface HelpSectionProps {
  t: ReturnType<typeof useTranslations>['t'];
}

export const HelpSection: React.FC<HelpSectionProps> = ({ t }) => {
  return (
    <div className="mb-8 bg-gray-800/50 border border-gray-700 rounded-2xl p-6 md:p-8">
      <h2 className="text-2xl font-bold text-teal-400 mb-4">{t('helpTitle')}</h2>
      <p className="text-gray-400 mb-6 max-w-3xl">{t('helpIntro')}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="font-semibold text-white mb-2">{t('helpTip1Title')}</h3>
          <p className="text-sm text-gray-400">{t('helpTip1Text')}</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="font-semibold text-white mb-2">{t('helpTip2Title')}</h3>
          <p className="text-sm text-gray-400">{t('helpTip2Text')}</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="font-semibold text-white mb-2">{t('helpTip3Title')}</h3>
          <p className="text-sm text-gray-400">{t('helpTip3Text')}</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="font-semibold text-white mb-2">{t('helpTip4Title')}</h3>
          <p className="text-sm text-gray-400">{t('helpTip4Text')}</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="font-semibold text-white mb-2">{t('helpTip5Title')}</h3>
          <p className="text-sm text-gray-400">{t('helpTip5Text')}</p>
        </div>
      </div>
    </div>
  );
};