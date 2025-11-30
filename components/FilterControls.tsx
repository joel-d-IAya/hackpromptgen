import * as React from 'react';
import type { LLM, Objective } from '../types';
import type { useTranslations } from '../hooks/useTranslations';

interface FilterControlsProps {
  llms: LLM[];
  objectives: Objective[];
  selectedLlm: LLM | 'all';
  setSelectedLlm: (llm: LLM | 'all') => void;
  selectedObjective: Objective | 'all';
  setSelectedObjective: (objective: Objective | 'all') => void;
  t: ReturnType<typeof useTranslations>['t'];
  tObjective: ReturnType<typeof useTranslations>['tObjective'];
}

export const FilterControls: React.FC<FilterControlsProps> = ({
  llms,
  objectives,
  selectedLlm,
  setSelectedLlm,
  selectedObjective,
  setSelectedObjective,
  t,
  tObjective,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label htmlFor="llm-select" className="block text-sm font-medium text-gray-300 mb-2">
          {t('selectLlm')}
        </label>
        <select
          id="llm-select"
          value={selectedLlm}
          onChange={(e) => setSelectedLlm(e.target.value as LLM | 'all')}
          className="w-full bg-gray-700 border-gray-600 text-white rounded-lg focus:ring-cyan-500 focus:border-cyan-500"
        >
          <option value="all">{t('allLlms')}</option>
          {llms.map((llm) => (
            <option key={llm} value={llm}>
              {llm === 'Tous les LLM récents' ? t('allRecentLlms') : llm}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="objective-select" className="block text-sm font-medium text-gray-300 mb-2">
          {t('selectObjective')}
        </label>
        <select
          id="objective-select"
          value={selectedObjective}
          onChange={(e) => setSelectedObjective(e.target.value as Objective | 'all')}
          className="w-full bg-gray-700 border-gray-600 text-white rounded-lg focus:ring-cyan-500 focus:border-cyan-500"
        >
          <option value="all">{t('allObjectives')}</option>
          {objectives.map((objective) => (
            <option key={objective} value={objective}>{tObjective(objective)}</option>
          ))}
        </select>
      </div>
    </div>
  );
};