

export enum GameState {
  Login,
  Playing,
  PreCertificate,
  PerfectScoreReward,
  Finished,
}

export interface Player {
  id: string;
  username: string;
  country: string;
  avatar: string;
  unlockedTrophies?: number[];
  hasPerfectScore?: boolean;
  bio?: string;
  hobbies?: any[];
  thought?: string;
  pin?: string;
  createdAt?: any;
}

export interface Question {
  id: string;
  level: number;
  question: { [lang: string]: string };
  options: { [lang: string]: string[] };
  shuffledOptions?: { [lang: string]: string[] };
  correctAnswer: { [lang: string]: string };
  explanation: { [lang: string]: string };
}

export interface AnswerHistoryItem {
  question: Question;
  selectedAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
}

export interface QuizResult {
  score: number;
  time: number;
  history: AnswerHistoryItem[];
  status: 'passed' | 'failed';
  earnedTrophies: number[];
}

export interface LevelConfig {
    level: number;
    name: { [lang: string]: string };
    trophy: {
        name: { [lang: string]: string };
        icon: JSX.Element;
        audioUrl?: string;
    };
}

export interface LeaderboardEntry {
    id: string;
    playerId: string;
    name: string;
    country: string;
    score: number;
    time: number;
    avatar: string;
    rank: number;
    reactions?: {
        flowers: number;
        hearts: number;
        claps: number;
    };
}