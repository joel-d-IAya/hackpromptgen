
import React, { useState, useEffect, useRef } from 'react';
import type { Hack, Language } from '../types';
import type { useTranslations } from '../hooks/useTranslations';
import { CloseIcon } from './icons/CloseIcon';
import { SparklesIcon } from './icons/SparklesIcon';
import { StarRating } from './StarRating';
import { CopyIcon } from './icons/CopyIcon';
import { GoogleGenAI } from '@google/genai';

interface HackDetailModalProps {
  hack: Hack | null;
  isOpen: boolean;
  onClose: () => void;
  onAddRating: (hackId: string, rating: number) => void;
  onAddComment: (hackId: string, comment: string) => void;
  language: Language;
  t: ReturnType<typeof useTranslations>['t'];
  combinedHacks: Hack[];
  onAddHackToCombination: (hack: Hack) => void;
  onRemoveHackFromCombination: (hackId: string) => void;
  onClearCombination: () => void;
  allHacks: Hack[];
}

export const HackDetailModal: React.FC<HackDetailModalProps> = ({
  hack,
  isOpen,
  onClose,
  onAddRating,
  onAddComment,
  language,
  t,
  combinedHacks,
  onAddHackToCombination,
  onRemoveHackFromCombination,
  onClearCombination,
  allHacks,
}) => {
  const [newComment, setNewComment] = useState('');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [generatedPromptCopied, setGeneratedPromptCopied] = useState(false);
  
  // State for Prompt Generator
  const [userIdea, setUserIdea] = useState('');
  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationError, setGenerationError] = useState('');
  const [showHackSelector, setShowHackSelector] = useState(false);
  const [hackSearchTerm, setHackSearchTerm] = useState('');

  // State for Comment Improver
  const [isImproving, setIsImproving] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      modalRef.current?.focus();
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);
  
  // Reset generator state when hack changes
  useEffect(() => {
    setUserIdea('');
    setGeneratedPrompt('');
    setGenerationError('');
    setShowHackSelector(false);
    setHackSearchTerm('');
  }, [hack]);


  if (!isOpen || !hack) {
    return null;
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

  const handleGeneratePrompt = async () => {
    if (!userIdea.trim() || !hack) return;
    setIsGenerating(true);
    setGenerationError('');
    setGeneratedPrompt('');

    const hacksToUse = combinedHacks.length > 0 ? combinedHacks : [hack];
    const isCombined = hacksToUse.length > 1;

    const techniquesInfo = hacksToUse.map(h => 
        `- Technique Name: '${h.name[language]}'\n  Description: ${h.context[language]}\n  Example: "${h.examples[0].prompt[language]}"`
      ).join('\n');

    const metaPrompt = `You are an expert in prompt engineering. Your task is to combine a user's idea with ${isCombined ? 'several specific prompting techniques' : 'a specific prompting technique'} to create a perfect, ready-to-use prompt for another LLM.

Here ${isCombined ? 'are the techniques' : 'is the technique'} to use:
${techniquesInfo}

User's Idea: "${userIdea}"

Your generated prompt should be the final, polished prompt for the user to copy${isCombined ? ', artfully blending all the requested techniques' : ''}. Do not add any extra explanations, introductions, or quotation marks around the final prompt. Just output the prompt itself.`;

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [{ role: 'user', parts: [{ text: metaPrompt }] }],
      });
      setGeneratedPrompt(response.text);
    } catch (error) {
      console.error("Error generating prompt:", error);
      setGenerationError(t('errorGenerating'));
    } finally {
      setIsGenerating(false);
    }
  };
  
  const handleImproveComment = async () => {
      if (!newComment.trim()) return;
      setIsImproving(true);
      
      const improvePrompt = `You are a helpful assistant. Revise the following comment to make it more constructive and clear, without changing its core meaning. Keep the original language of the comment.

Comment: "${newComment}"

Revised Comment:`;

      try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: [{ role: 'user', parts: [{ text: improvePrompt }] }],
        });
        setNewComment(response.text);
      } catch (error) {
          console.error("Error improving comment:", error);
          // Optionally, show an error to the user
      } finally {
          setIsImproving(false);
      }
  };


  const avgRating = hack.ratings.length > 0
    ? hack.ratings.reduce((a, b) => a + b, 0) / hack.ratings.length
    : 0;
    
  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      onAddComment(hack.id, newComment.trim());
      setNewComment('');
    }
  };

  const handleCopy = (textToCopy: string, index: number) => {
    navigator.clipboard.writeText(textToCopy);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };
  
  const handleGeneratedPromptCopy = (textToCopy: string) => {
    navigator.clipboard.writeText(textToCopy);
    setGeneratedPromptCopied(true);
    setTimeout(() => setGeneratedPromptCopied(false), 2000);
  }

  const objectivesText = hack.objectives.map(obj => {
      switch(obj) {
          case 'Créativité': return t('objective_Créativité');
          case 'Rigueur': return t('objective_Rigueur');
          case 'Vitesse': return t('objective_Vitesse');
          default: return obj;
      }
  }).join(', ');

  const filteredHacksForSelector = allHacks
    .filter(h => !combinedHacks.some(ch => ch.id === h.id))
    .filter(h => h.name[language].toLowerCase().includes(hackSearchTerm.toLowerCase()));

  return (
    <div
      className="fixed inset-0 bg-gray-900 bg-opacity-80 backdrop-blur-sm z-50 flex justify-center items-center p-4 transition-opacity duration-300"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        ref={modalRef}
        className="bg-gray-800 rounded-2xl shadow-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto flex flex-col text-gray-200 border border-gray-700 relative"
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors text-gray-400 hover:text-white z-10"
          aria-label={t('close')}
        >
          <CloseIcon className="w-6 h-6" />
        </button>

        <div className="p-8">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-500 mb-4 pr-12">
            {hack.name[language]}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 text-sm">
            <div>
              <h4 className="font-semibold text-gray-400 mb-2">{t('compatibleWith')}</h4>
              <div className="flex flex-wrap gap-2">
                {hack.compatibleLlms.map(llm => (
                  <span key={llm} className="px-2 py-1 bg-gray-700 text-gray-300 rounded-md text-xs">
                    {llm === 'Tous les LLM récents' ? t('allRecentLlms') : llm}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-400 mb-2">{t('objectives')}</h4>
              <p className="text-gray-300">{objectivesText}</p>
            </div>
          </div>
          
          <div className="mb-6">
            <h4 className="font-semibold text-gray-400 mb-2">{t('mainBenefit')}</h4>
            <p className="text-gray-300 flex items-center gap-2">
              <SparklesIcon className="w-5 h-5 text-teal-400 flex-shrink-0" />
              <span>{hack.mainBenefit[language]}</span>
            </p>
          </div>

          <div className="space-y-4 mb-6">
            <h4 className="text-lg font-semibold text-gray-300">{t('examplePrompts')}</h4>
            {hack.examples.map((example, index) => (
              <div key={index} className="bg-gray-900/50 p-4 rounded-lg">
                <h5 className="font-semibold text-gray-400 mb-2">{example.useCase[language]}</h5>
                <div className="flex items-start gap-2 relative">
                  <p className="flex-1 font-mono text-cyan-300 text-sm whitespace-pre-wrap">{example.prompt[language]}</p>
                  <button
                    onClick={() => handleCopy(example.prompt[language], index)}
                    className="p-2 rounded-md bg-gray-700 hover:bg-cyan-600 text-gray-300 hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 flex-shrink-0"
                    aria-label={t('copy')}
                  >
                    <CopyIcon className="w-4 h-4" />
                  </button>
                  {copiedIndex === index && <span className="text-xs text-green-400 -top-6 right-0 absolute bg-gray-900 px-2 py-1 rounded">{t('copied')}</span>}
                </div>
              </div>
            ))}
          </div>


          <hr className="border-gray-700 my-8" />
          
          {/* Prompt Generator */}
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4 text-teal-400 flex items-center gap-2">
                <SparklesIcon className="w-6 h-6"/>
                {t('promptGeneratorTitle')}
              </h3>

              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold text-gray-400">{t('combineHacksTitle')}</h4>
                  <button onClick={() => setShowHackSelector(!showHackSelector)} className="text-sm text-cyan-400 hover:underline">
                    {t('addHackToCombine')}
                  </button>
                </div>
                
                {showHackSelector && (
                  <div className="my-2 p-3 bg-gray-700 rounded-lg">
                    <input 
                      type="text" 
                      placeholder={t('searchHackPlaceholder')}
                      value={hackSearchTerm}
                      onChange={(e) => setHackSearchTerm(e.target.value)}
                      className="w-full bg-gray-600 border-gray-500 text-white rounded-md p-2 focus:ring-cyan-500 focus:border-cyan-500 mb-2"
                      autoFocus
                    />
                    <ul className="max-h-40 overflow-y-auto space-y-1">
                      {filteredHacksForSelector.map(h => (
                          <li key={h.id} 
                              onClick={() => {
                                  onAddHackToCombination(h);
                                  setShowHackSelector(false);
                                  setHackSearchTerm('');
                              }}
                              className="p-2 text-sm hover:bg-gray-600 rounded-md cursor-pointer"
                          >
                              {h.name[language]}
                          </li>
                      ))}
                    </ul>
                  </div>
                )}

                {combinedHacks.length > 0 ? (
                  <div className="flex flex-wrap gap-2 items-center">
                    {combinedHacks.map(ch => (
                      <span key={ch.id} className="flex items-center gap-2 bg-gray-700 text-gray-300 rounded-full px-3 py-1 text-sm">
                        {ch.name[language]}
                        <button onClick={() => onRemoveHackFromCombination(ch.id)} className="text-gray-500 hover:text-white" aria-label={`Remove ${ch.name[language]}`}>
                          <CloseIcon className="w-4 h-4" />
                        </button>
                      </span>
                    ))}
                    <button onClick={onClearCombination} className="text-sm text-red-400 hover:underline">{t('clearCombination')}</button>
                  </div>
                ) : (
                  <p className="text-sm text-gray-500">{t('noHacksCombined')}</p>
                )}
              </div>

              <div className="space-y-4">
                <div>
                  <label htmlFor="user-idea" className="font-semibold text-gray-400 mb-2 block">{t('yourIdea')}</label>
                  <textarea
                    id="user-idea"
                    value={userIdea}
                    onChange={(e) => setUserIdea(e.target.value)}
                    className="w-full bg-gray-700 border-gray-600 text-white rounded-lg p-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
                    rows={3}
                    placeholder={t('yourIdeaPlaceholder')}
                  ></textarea>
                </div>
                <button
                    onClick={handleGeneratePrompt}
                    className="w-full px-4 py-2 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors disabled:bg-gray-500 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    disabled={isGenerating || !userIdea.trim()}
                >
                    {isGenerating ? (
                        <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            {t('generating')}
                        </>
                    ) : (
                        combinedHacks.length > 0 ? t('generateCombinedPrompt') : t('generatePrompt')
                    )}
                </button>
                {generationError && <p className="text-red-400 text-sm">{generationError}</p>}
                {generatedPrompt && (
                    <div className="bg-gray-900/50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-400 mb-2">{combinedHacks.length > 0 ? t('combinedPromptTitle') : t('generatedPromptTitle')}</h4>
                        <div className="flex items-start gap-2 relative">
                            <p className="flex-1 font-mono text-cyan-300 text-sm whitespace-pre-wrap">{generatedPrompt}</p>
                            <button
                                onClick={() => handleGeneratedPromptCopy(generatedPrompt)}
                                className="p-2 rounded-md bg-gray-700 hover:bg-cyan-600 text-gray-300 hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 flex-shrink-0"
                                aria-label={t('copy')}
                            >
                                <CopyIcon className="w-4 h-4" />
                            </button>
                            {generatedPromptCopied && <span className="text-xs text-green-400 -top-6 right-0 absolute bg-gray-900 px-2 py-1 rounded">{t('copied')}</span>}
                        </div>
                    </div>
                )}
              </div>
          </div>
          
          <hr className="border-gray-700 my-6" />

          {/* Ratings Section */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">{t('ratings')}</h3>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex items-center space-x-2">
                <span className="text-3xl font-bold">{avgRating.toFixed(1)}</span>
                <span className="text-gray-400">/ 5</span>
              </div>
              <StarRating rating={avgRating} />
              <span className="text-gray-400 text-sm">({hack.ratings.length} {t('votes')})</span>
            </div>
            {hack.ratings.length === 0 && <p className="text-gray-500 text-sm mt-2">{t('noRatingsYet')}</p>}
            <div className="mt-4">
              <h4 className="font-semibold text-gray-400 mb-2">{t('addYourRating')}</h4>
              <StarRating rating={0} onRatingChange={(rating) => onAddRating(hack.id, rating)} interactive />
            </div>
          </div>

          <hr className="border-gray-700 my-6" />

          {/* Comments Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">{t('comments')}</h3>
            <div className="space-y-4 max-h-48 overflow-y-auto pr-2 mb-4">
              {hack.comments.length === 0 ? (
                <p className="text-gray-500 text-sm">{t('noCommentsYet')}</p>
              ) : (
                hack.comments.slice().reverse().map((comment) => (
                  <div key={comment.date} className="bg-gray-700/50 p-3 rounded-lg">
                    <p className="text-gray-300">{comment.text}</p>
                    <p className="text-xs text-gray-500 mt-1 text-right">{new Date(comment.date).toLocaleString(language)}</p>
                  </div>
                ))
              )}
            </div>
            
            <form onSubmit={handleCommentSubmit} className="mt-4">
              <label htmlFor="comment" className="font-semibold text-gray-400 mb-2 block">{t('addComment')}</label>
              <textarea
                id="comment"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="w-full bg-gray-700 border-gray-600 text-white rounded-lg p-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
                rows={3}
              ></textarea>
              <div className="flex items-center justify-between mt-2">
                <button
                    type="button"
                    onClick={handleImproveComment}
                    className="px-3 py-2 bg-gray-600 text-teal-300 text-sm font-semibold rounded-lg hover:bg-gray-500 transition-colors disabled:bg-gray-700 disabled:text-gray-500 disabled:cursor-not-allowed flex items-center gap-1.5"
                    disabled={isImproving || !newComment.trim()}
                >
                    {isImproving ? (
                        <>
                            <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            {t('improving')}
                        </>
                    ) : (
                        <>
                            <SparklesIcon className="w-4 h-4" />
                            {t('improveComment')}
                        </>
                    )}
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-cyan-600 text-white font-semibold rounded-lg hover:bg-cyan-700 transition-colors disabled:bg-gray-500"
                  disabled={!newComment.trim()}
                >
                  {t('submitComment')}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
