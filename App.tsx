import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { FilterControls } from './components/FilterControls';
import { HacksTable } from './components/HacksTable';
import { HelpSection } from './components/HelpSection';
import { hacks as initialHacks, llms, objectives } from './data/hacks';
import type { Language, LLM, Objective, Hack } from './types';
import { useTranslations } from './hooks/useTranslations';
import { HackDetailModal } from './components/HackDetailModal';

const getInitialLanguage = (): Language => {
  const supportedLanguages: Language[] = ['en', 'fr', 'es'];
  const browserLang = navigator.language.split('-')[0] as Language;
  if (supportedLanguages.includes(browserLang)) {
    return browserLang;
  }
  return 'en'; // Fallback to English
};

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>(getInitialLanguage());
  const [selectedLlm, setSelectedLlm] = useState<LLM | 'all'>('all');
  const [selectedObjective, setSelectedObjective] = useState<Objective | 'all'>('all');
  
  const [hacksData, setHacksData] = useState<Hack[]>(initialHacks);
  const [selectedHack, setSelectedHack] = useState<Hack | null>(null);
  const [combinedHacks, setCombinedHacks] = useState<Hack[]>([]);

  const { t, tObjective } = useTranslations(language);

  const filteredHacks = useMemo(() => {
    return hacksData.filter(hack => {
      const llmMatch = selectedLlm === 'all' || hack.compatibleLlms.includes(selectedLlm);
      const objectiveMatch = selectedObjective === 'all' || hack.objectives.includes(selectedObjective);
      return llmMatch && objectiveMatch;
    });
  }, [selectedLlm, selectedObjective, hacksData]);

  const handleSelectHack = (hack: Hack) => {
    setSelectedHack(hack);
    setCombinedHacks([hack]); // Pre-populate the combination with the selected hack
  };

  const handleCloseModal = () => {
    setSelectedHack(null);
    setCombinedHacks([]); // Clear the combination on close
  };
  
  const handleAddRating = (hackId: string, rating: number) => {
    setHacksData(prevHacks => {
      const newHacks = prevHacks.map(hack => {
        if (hack.id === hackId) {
          const newRatings = [...hack.ratings, rating];
          const updatedHack = { ...hack, ratings: newRatings };
          if (selectedHack?.id === hackId) {
            setSelectedHack(updatedHack);
          }
          return updatedHack;
        }
        return hack;
      });
      return newHacks;
    });
  };

  const handleAddComment = (hackId: string, commentText: string) => {
    setHacksData(prevHacks => {
       const newHacks = prevHacks.map(hack => {
        if (hack.id === hackId) {
          const newComment = { text: commentText, date: new Date().toISOString() };
          const newComments = [...hack.comments, newComment];
          const updatedHack = { ...hack, comments: newComments };
           if (selectedHack?.id === hackId) {
            setSelectedHack(updatedHack);
          }
          return updatedHack;
        }
        return hack;
      });
      return newHacks;
    });
  };

  const handleAddHackToCombination = (hackToAdd: Hack) => {
    setCombinedHacks(prev => {
      if (prev.find(h => h.id === hackToAdd.id)) {
        return prev;
      }
      return [...prev, hackToAdd];
    });
  };

  const handleRemoveHackFromCombination = (hackId: string) => {
    setCombinedHacks(prev => prev.filter(h => h.id !== hackId));
  };

  const handleClearCombination = () => {
    setCombinedHacks([]);
  };


  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      <Header language={language} setLanguage={setLanguage} t={t} />
      
      <main className="container mx-auto p-4 md:p-8">
        <HelpSection t={t} />

        <div className="bg-gray-800 shadow-lg rounded-2xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">{t('filterTitle')}</h2>
          <p className="text-gray-400 mb-6">{t('filterSubtitle')}</p>
          <FilterControls
            llms={llms}
            objectives={objectives}
            selectedLlm={selectedLlm}
            setSelectedLlm={setSelectedLlm}
            selectedObjective={selectedObjective}
            setSelectedObjective={setSelectedObjective}
            t={t}
            tObjective={tObjective}
          />
        </div>

        <div className="bg-gray-800 shadow-lg rounded-2xl overflow-hidden">
          <HacksTable hacks={filteredHacks} language={language} t={t} onSelectHack={handleSelectHack} />
        </div>
      </main>

      <footer className="text-center p-4 text-gray-500 text-sm">
        <p>{t('footerText')}</p>
      </footer>
      
      {selectedHack && (
        <HackDetailModal 
          hack={selectedHack}
          isOpen={!!selectedHack}
          onClose={handleCloseModal}
          onAddRating={handleAddRating}
          onAddComment={handleAddComment}
          language={language}
          t={t}
          combinedHacks={combinedHacks}
          onAddHackToCombination={handleAddHackToCombination}
          onRemoveHackFromCombination={handleRemoveHackFromCombination}
          onClearCombination={handleClearCombination}
          allHacks={hacksData}
        />
      )}
    </div>
  );
};

export default App;