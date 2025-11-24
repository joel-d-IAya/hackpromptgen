export type Language = 'en' | 'fr' | 'es';

export type LLM = 'ChatGPT' | 'Claude' | 'Gemini' | 'Deepseek' | 'Llama' | 'Grok' | 'Perplexity' | 'Qwen' | 'Tous les LLM récents';
export type Objective = 'Créativité' | 'Rigueur' | 'Vitesse';

interface Translation {
  fr: string;
  en: string;
  es: string;
}

export interface Comment {
  text: string;
  date: string;
}

export interface PromptExample {
  useCase: Translation;
  prompt: Translation;
}

export interface Hack {
  id: string;
  name: Translation;
  compatibleLlms: LLM[];
  objectives: Objective[];
  context: Translation;
  examples: PromptExample[];
  mainBenefit: Translation;
  ratings: number[];
  comments: Comment[];
}