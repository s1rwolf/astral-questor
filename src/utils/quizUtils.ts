export interface QuizResult {
  summary: string;
  details: {
    [key: string]: string;
  };
  compatibility: string[];
  strengths: string[];
  challenges: string[];
  // Premium features
  isPremium?: boolean;
  futureAnalysis?: string;
  clientPhoto?: string | null;
}
