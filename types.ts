

export enum GameState {
  Login,
  Playing,
  PreCertificate,
  PerfectScoreReward,
  Finished,
  Profile,
}

export interface Player {
  id: string;
  username: string;
  country: string;
  avatar: string;
  unlockedTrophies?: number[];
  bio?: string;
  hobbies?: string[];
  hasPerfectScore?: boolean;
  thought?: string;
  thoughtIcon?: string;
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
