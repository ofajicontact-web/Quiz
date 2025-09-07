import React, { useState, useEffect, useCallback, useContext, useRef } from 'react';
import { Player, Question, AnswerHistoryItem } from '../types';
import { LanguageContext } from '../context/LanguageContext';
import { QUESTIONS_PER_LEVEL, TOTAL_LEVELS, TOTAL_QUESTIONS, PASSING_SCORE_PER_LEVEL, LEVELS_CONFIG } from '../constants.tsx';
import { MOROCCAN_QUESTIONS, GLOBAL_QUESTIONS } from '../data/questions';
import Loader from './Loader';
import QuestionCard from './QuestionCard';
import CloudTransition from './CloudTransition';
import useOnlineCounter from '../hooks/useOnlineCounter';
import { FiftyFiftyIcon, SkipIcon, ClockIcon, EnterFullscreenIcon, ExitFullscreenIcon, VolumeUpIcon, VolumeOffIcon } from './Icons';

interface QuizScreenProps {
    player: Player;
    onComplete: (result: any) => void;
    onRestart: () => void;
    gameId: number;
    onShowLeaderboard: () => void;
    isFullscreen: boolean;
    onToggleFullscreen: () => void;
}

const PauseIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const PlayIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
    </svg>
);

const MistakesModal: React.FC<{
    mistakes: AnswerHistoryItem[];
    onClose: () => void;
}> = ({ mistakes, onClose }) => {
    const { t, language } = useContext(LanguageContext);
    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in p-4" onClick={onClose}>
            <div className="relative w-full max-w-lg bg-slate-800 rounded-2xl shadow-lg border border-slate-700 animate-fade-in-up" onClick={(e) => e.stopPropagation()}>
                <div className="p-6">
                    <h3 className="font-bold text-xl text-amber-300 mb-4 text-center">{t('mistakes_modal_title')}</h3>
                    <div className="max-h-[60vh] overflow-y-auto pr-2 space-y-4">
                        {mistakes.map((mistake, index) => (
                            <div key={index} className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                                <p className="font-semibold text-slate-300 mb-2" dangerouslySetInnerHTML={{ __html: mistake.question.question[language] }} />
                                <div className="space-y-1 text-sm">
                                    <p><span className="font-semibold text-red-400">{t('your_answer')}:</span> <span className="text-slate-400" dangerouslySetInnerHTML={{ __html: mistake.selectedAnswer }} /></p>
                                    <p><span className="font-semibold text-green-400">{t('correct_answer')}:</span> <span className="text-slate-400" dangerouslySetInnerHTML={{ __html: mistake.correctAnswer }} /></p>
                                </div>
                                <div className="mt-3 pt-3 border-t border-slate-700">
                                    <p className="text-amber-400 font-semibold text-sm">{t('explanation_title')}</p>
                                    <p className="text-slate-400 mt-1 text-sm" dangerouslySetInnerHTML={{ __html: mistake.question.explanation[language] }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <button onClick={onClose} className="w-full bg-indigo-500 text-white font-bold py-3 px-4 rounded-b-2xl hover:bg-indigo-600 transition-colors">
                    {t('close_button_label')}
                </button>
            </div>
        </div>
    );
};

const LevelTransitionScreen: React.FC<{
    levelResult: any;
    onContinue: () => void;
    onShowResults: () => void;
    mistakes: AnswerHistoryItem[];
    onShowMistakes: () => void;
}> = ({ levelResult, onContinue, onShowResults, mistakes, onShowMistakes }) => {
    const { t, language } = useContext(LanguageContext);
    const [isContinuing, setIsContinuing] = useState(false);
    const [showTrophy, setShowTrophy] = useState(false);
    
    useEffect(() => {
        if (levelResult?.trophyWon) {
            // Audio narration is now played when viewing the trophy from the home screen.
            setShowTrophy(true);
        }
    }, [levelResult]);

    if (!levelResult) return null;

    const { level, score, passed, trophyWon, levelConfig } = levelResult;
    const hasMistakes = mistakes.length > 0;

    const handleContinueClick = () => {
        setIsContinuing(true);
        if (hasMistakes) {
            onShowMistakes();
        } else {
            onContinue();
        }
    };

    const handleShowResultsClick = () => {
        setIsContinuing(true);
        onShowResults();
    }

    return (
        <div className="flex flex-col items-center justify-start md:justify-center h-full text-center animate-fade-in p-4 pt-8 md:pt-4 overflow-y-auto">
            <h2 className="text-4xl font-bold text-amber-300 mb-2">{passed ? t('level_cleared') : t('game_over')}</h2>
            <p className="text-lg text-slate-300 mb-6">{t('level_label')} {level}: {levelConfig.name[language]}</p>
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 mb-8 shadow-lg w-full max-w-sm">
                <p className="text-slate-400 text-sm mb-1">{t('your_score_for_this_level')}</p>
                <p className={`text-6xl font-bold mb-4 ${passed ? 'text-green-400' : 'text-red-400'}`}>{score}<span className="text-3xl text-slate-500">/{QUESTIONS_PER_LEVEL}</span></p>
                {trophyWon && (
                    <div className="flex flex-col items-center">
                        <p className="text-amber-300">{t('trophy_unlocked_message')}</p>
                        <div className={`trophy-animation-wrapper mt-2 ${showTrophy ? 'animate-trophy-reveal' : 'opacity-0'}`}>
                            <div className="animate-trophy-glow">
                                <div className="animate-trophy-pulse flex flex-col items-center gap-2">
                                   {React.cloneElement(levelConfig.trophy.icon, { className: "w-36 h-36" })}
                                   <span className="text-xl font-semibold">{levelConfig.trophy.name[language] || levelConfig.trophy.name['fr']}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <p className="text-base text-slate-300 mt-4">{passed ? t('level_cleared_message') : t('game_over_message')}</p>
            </div>

            {passed ? (
                 <button
                    onClick={handleContinueClick}
                    disabled={isContinuing}
                    className="w-full max-w-sm bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold py-3 px-8 rounded-lg hover:opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg disabled:opacity-75 disabled:cursor-wait"
                >
                    {hasMistakes ? t('understand_mistakes') : t('continue_button')}
                </button>
            ) : (
                <div className="w-full max-w-sm">
                    <button onClick={handleShowResultsClick} disabled={isContinuing} className="w-full bg-gradient-to-r from-rose-500 to-red-500 text-white font-bold py-3 px-8 rounded-lg hover:opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg disabled:opacity-75 disabled:cursor-wait">
                        {t('view_results_button')}
                    </button>
                    {hasMistakes && (
                        <button onClick={onShowMistakes} className="mt-4 text-slate-300 underline hover:text-amber-300 transition-colors">
                            {t('understand_mistakes')}
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

const QuizScreen: React.FC<QuizScreenProps> = ({ player, onComplete, onRestart, gameId, onShowLeaderboard, isFullscreen, onToggleFullscreen }) => {
    const [quizStructure, setQuizStructure] = useState<Question[][]>([]);
    const [currentLevel, setCurrentLevel] = useState(1);
    const [currentQuestionIndexInLevel, setCurrentQuestionIndexInLevel] = useState(0);
    const [score, setScore] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [answerHistory, setAnswerHistory] = useState<AnswerHistoryItem[]>([]);
    const { language, t } = useContext(LanguageContext);
    const [timerStartTimes, setTimerStartTimes] = useState<{ [key: string]: number }>({});
    const [quizState, setQuizState] = useState('playing');
    const [levelResult, setLevelResult] = useState<any>(null);
    const [earnedTrophies, setEarnedTrophies] = useState<number[]>([]);
    const [isMistakesModalVisible, setIsMistakesModalVisible] = useState(false);
    const [currentLevelMistakes, setCurrentLevelMistakes] = useState<AnswerHistoryItem[]>([]);
    const [questionTimeLeft, setQuestionTimeLeft] = useState(10);
    const [isTransitioningQuestion, setIsTransitioningQuestion] = useState(false);
    const onlineCount = useOnlineCounter(quizState === 'playing');
    const [jokers, setJokers] = useState({ fiftyFifty: 1, extraTime: 1 });
    const [disabledOptions, setDisabledOptions] = useState<string[]>([]);
    
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const fadeIntervalRef = useRef<number | null>(null);
    const [isMusicPlaying, setIsMusicPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);

    const [isPaused, setIsPaused] = useState(false);
    const [pauseUsed, setPauseUsed] = useState(false);
    const [pauseStartTime, setPauseStartTime] = useState(0);
    const [showPauseError, setShowPauseError] = useState(false);
    
    const shuffleArray = useCallback(<T,>(array: T[]): T[] => {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }, []);

    const clearFadeInterval = () => {
        if (fadeIntervalRef.current) {
            clearInterval(fadeIntervalRef.current);
            fadeIntervalRef.current = null;
        }
    };

    const fadeOutAndStopMusic = useCallback(() => {
        clearFadeInterval();
        if (!audioRef.current) return;

        const audio = audioRef.current;
        fadeIntervalRef.current = window.setInterval(() => {
            if (audio.volume > 0.1) {
                audio.volume -= 0.1;
            } else {
                audio.pause();
                audio.currentTime = 0;
                audioRef.current = null;
                setIsMusicPlaying(false);
                clearFadeInterval();
            }
        }, 150);
    }, []);

    useEffect(() => {
        setIsLoading(true);

        const getUsedQuestionIds = (key: string): string[] => {
            try {
                const usedIdsRaw = localStorage.getItem(key);
                const parsed = usedIdsRaw ? JSON.parse(usedIdsRaw) : [];
                return Array.isArray(parsed) ? parsed : [];
            } catch (e) {
                return [];
            }
        };
        
        const getQuestionsForGame = (allQuestions: Question[], usedIds: string[], count: number): { selected: Question[], nextUsedIds: string[] } => {
            let available = shuffleArray(allQuestions.filter(q => !usedIds.includes(q.id)));
            
            if (available.length >= count) {
                const selected = available.slice(0, count);
                const nextUsedIds = [...usedIds, ...selected.map(q => q.id)];
                return { selected, nextUsedIds };
            } else {
                const needed = count - available.length;
                const recycledPool = shuffleArray(allQuestions.filter(q => !available.some(aq => aq.id === q.id)));
                const recycled = recycledPool.slice(0, needed);
                
                const selected = shuffleArray([...available, ...recycled]);
                
                const nextUsedIds = selected.map(q => q.id);
                return { selected, nextUsedIds };
            }
        };

        const moroccanUsedIdsKey = 'fanida_used_moroccan_qids';
        const globalUsedIdsKey = 'fanida_used_global_qids';

        let usedMoroccanIds = getUsedQuestionIds(moroccanUsedIdsKey);
        let usedGlobalIds = getUsedQuestionIds(globalUsedIdsKey);

        const moroccanResult = getQuestionsForGame(MOROCCAN_QUESTIONS, usedMoroccanIds, 8);
        const globalResult = getQuestionsForGame(GLOBAL_QUESTIONS, usedGlobalIds, 32);
        
        localStorage.setItem(moroccanUsedIdsKey, JSON.stringify(moroccanResult.nextUsedIds));
        localStorage.setItem(globalUsedIdsKey, JSON.stringify(globalResult.nextUsedIds));

        const selectedMoroccan = moroccanResult.selected;
        const selectedGlobal = globalResult.selected;

        const finalQuestionPool = shuffleArray([...selectedMoroccan, ...selectedGlobal]);

        const newQuizStructure = Array.from({ length: TOTAL_LEVELS }, (_, i) => 
            finalQuestionPool.slice(i * QUESTIONS_PER_LEVEL, (i + 1) * QUESTIONS_PER_LEVEL)
        ).map(levelQuestions => 
            levelQuestions.map(q => ({
                ...q,
                shuffledOptions: {
                    fr: shuffleArray(q.options.fr),
                    en: shuffleArray(q.options.en),
                    es: shuffleArray(q.options.es),
                    dr: shuffleArray(q.options.dr),
                }
            }))
        );
        
        setQuizStructure(newQuizStructure);
        setIsLoading(false);
        setJokers({ fiftyFifty: 1, extraTime: 1 });
        setPauseUsed(false);
    }, [gameId, shuffleArray]);

    useEffect(() => {
        const timer = setInterval(() => {
            if(!isPaused) setElapsedTime(prev => prev + 1)
        }, 1000);
        return () => clearInterval(timer);
    }, [isPaused]);

    useEffect(() => {
        if (!isLoading && quizStructure.length > 0) {
            const audio = new Audio('https://radiofanida.com/wp/wp-content/uploads/2025/09/QuiMusic_01.mp3');
            audio.loop = true;
            audio.volume = 0;
            audioRef.current = audio;

            audio.play().then(() => {
                setIsMusicPlaying(true);
                clearFadeInterval();
                fadeIntervalRef.current = window.setInterval(() => {
                    if (audioRef.current && audioRef.current.volume < 0.5) {
                        audioRef.current.volume = Math.min(0.5, audioRef.current.volume + 0.05);
                    } else {
                        clearFadeInterval();
                    }
                }, 150);
            }).catch(e => console.error("Audio playback failed:", e));
        }

        return () => {
            fadeOutAndStopMusic();
        };
    }, [isLoading, gameId, quizStructure.length, fadeOutAndStopMusic]);

    const currentQuestion = !isLoading && quizStructure.length > 0 ? quizStructure[currentLevel - 1]?.[currentQuestionIndexInLevel] : null;

    const advanceQuestion = useCallback(() => {
        setIsTransitioningQuestion(true);
        setTimeout(() => {
            setCurrentQuestionIndexInLevel(i => i + 1);
            setQuestionTimeLeft(10);
            setDisabledOptions([]);
            setIsTransitioningQuestion(false);
        }, 1000);
    }, []);

    useEffect(() => {
        if (quizState === 'playing' && currentQuestion && !timerStartTimes[currentQuestion.id] && !isPaused) {
            setTimerStartTimes(prev => ({ ...prev, [currentQuestion.id]: Date.now() }));
        }
    }, [quizState, currentQuestion, timerStartTimes, isPaused]);
    
    const handleQuizCompletion = useCallback((result: any) => {
        fadeOutAndStopMusic();
        onComplete(result);
    }, [onComplete, fadeOutAndStopMusic]);

    const handleAnswer = useCallback((selectedAnswer: string) => {
        if (!currentQuestion || answerHistory.length !== ((currentLevel - 1) * QUESTIONS_PER_LEVEL + currentQuestionIndexInLevel)) return;

        const isTimeout = selectedAnswer === 'TIMEOUT';
        const correctAnswer = currentQuestion.correctAnswer[language];
        const isCorrect = !isTimeout && selectedAnswer === correctAnswer;
        
        if (isCorrect) {
            setScore(s => s + 1);
        }

        const newHistoryItem = { question: currentQuestion, selectedAnswer: isTimeout ? t('answer_timed_out') : selectedAnswer, correctAnswer, isCorrect };
        const newHistory = [...answerHistory, newHistoryItem];
        setAnswerHistory(newHistory);
        
        setTimeout(() => {
            const levelJustFinished = currentQuestionIndexInLevel === QUESTIONS_PER_LEVEL - 1;
            if (levelJustFinished) {
                 const levelAnswers = newHistory.slice((currentLevel - 1) * QUESTIONS_PER_LEVEL);
                 const levelScore = levelAnswers.filter(a => a.isCorrect).length;
                 const mistakes = levelAnswers.filter(a => !a.isCorrect);
                 setCurrentLevelMistakes(mistakes);

                 const passed = levelScore >= PASSING_SCORE_PER_LEVEL;
                 const trophyWon = levelScore === QUESTIONS_PER_LEVEL;

                 const newTrophies = trophyWon ? [...new Set([...earnedTrophies, currentLevel])] : earnedTrophies;
                 setEarnedTrophies(newTrophies);
                 setLevelResult({
                     level: currentLevel,
                     score: levelScore,
                     passed,
                     trophyWon,
                     levelConfig: LEVELS_CONFIG[currentLevel - 1]
                 });
                 setQuizState('level_transition');
             } else {
                 advanceQuestion();
             }
         }, 1500);

    }, [currentQuestion, answerHistory, currentLevel, currentQuestionIndexInLevel, language, t, advanceQuestion, earnedTrophies]);

    const handleUseFiftyFifty = () => {
        if (jokers.fiftyFifty > 0 && currentQuestion) {
            setJokers(prev => ({ ...prev, fiftyFifty: prev.fiftyFifty - 1 }));
            const correctAnswer = currentQuestion.correctAnswer[language];
            const incorrectOptions = currentQuestion.options[language].filter(opt => opt !== correctAnswer);
            const shuffledIncorrect = shuffleArray(incorrectOptions);
            const optionsToDisable = shuffledIncorrect.slice(0, 2);
            setDisabledOptions(optionsToDisable);
        }
    };
    
    const handleUseExtraTime = () => {
        if (jokers.extraTime > 0 && currentQuestion) {
            setJokers(prev => ({ ...prev, extraTime: prev.extraTime - 1 }));
            setTimerStartTimes(prev => ({...prev, [currentQuestion.id]: (prev[currentQuestion.id] || Date.now()) + 10000 }));
        }
    };

    const handlePause = () => {
        if (pauseUsed) {
            setShowPauseError(true);
            setTimeout(() => setShowPauseError(false), 2000);
            return;
        }
        setIsPaused(true);
        setPauseUsed(true);
        setPauseStartTime(Date.now());
    };

    const handleResume = () => {
        if(currentQuestion){
            const pauseDuration = Date.now() - pauseStartTime;
            setTimerStartTimes(prev => ({ ...prev, [currentQuestion.id]: (prev[currentQuestion.id] || Date.now()) + pauseDuration }));
        }
        setIsPaused(false);
    };

    const handleContinue = () => {
        if (currentLevel < TOTAL_LEVELS) {
            setCurrentLevel(l => l + 1);
            setCurrentQuestionIndexInLevel(0);
            setLevelResult(null);
            setQuizState('playing');
            setQuestionTimeLeft(10);
        } else {
            handleQuizCompletion({ score, time: elapsedTime, history: answerHistory, status: 'passed', earnedTrophies });
        }
    };

    const handleCloseMistakesModal = () => {
        setIsMistakesModalVisible(false);
        if (levelResult?.passed) {
            handleContinue();
        }
    };

    const handleShowResults = () => {
        handleQuizCompletion({ score, time: elapsedTime, history: answerHistory, status: 'failed', earnedTrophies });
    };

    const toggleMute = () => {
        if (audioRef.current) {
            const newMutedState = !isMuted;
            audioRef.current.muted = newMutedState;
            setIsMuted(newMutedState);
        }
    };

    if (isLoading || !currentQuestion) {
        return <div className="flex items-center justify-center h-full"><Loader /></div>;
    }
    
    const levelStartIndex = (currentLevel - 1) * QUESTIONS_PER_LEVEL;
    const levelAnswers = answerHistory.slice(levelStartIndex);
    const correctAnswersInLevel = levelAnswers.filter(item => item.isCorrect).length;
    const progressPercentage = (correctAnswersInLevel / QUESTIONS_PER_LEVEL) * 100;
    
    const isBase64Image = player.avatar && player.avatar.startsWith('data:image/');
    const levelConfig = LEVELS_CONFIG[currentLevel - 1];
    const isAnswered = !!answerHistory[(currentLevel - 1) * QUESTIONS_PER_LEVEL + currentQuestionIndexInLevel];


    return (
        <>
            {isMistakesModalVisible && <MistakesModal mistakes={currentLevelMistakes} onClose={handleCloseMistakesModal} />}
            {isTransitioningQuestion && <CloudTransition />}
            {isPaused && (
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center animate-fade-in">
                    <button onClick={handleResume} className="text-white/80 hover:text-white transition-transform hover:scale-110">
                        <PlayIcon className="w-32 h-32" />
                    </button>
                </div>
            )}
            
            {quizState === 'level_transition' ? (
                <LevelTransitionScreen 
                    levelResult={levelResult} 
                    onContinue={handleContinue} 
                    onShowResults={handleShowResults} 
                    mistakes={currentLevelMistakes} 
                    onShowMistakes={() => setIsMistakesModalVisible(true)} 
                />
            ) : (
                <div className="relative flex flex-col items-center w-full mx-auto h-full p-2 sm:p-4 overflow-hidden">
                    <div className="w-full h-full flex flex-col md:flex-row md:gap-4 lg:gap-6 max-w-7xl mx-auto">
                        
                        {/* Left Column for Desktop / Top Area for Mobile */}
                        <div className="w-full md:w-96 lg:w-[448px] md:flex-shrink-0 md:flex md:flex-col md:space-y-4">
                            <header className="animate-fade-in space-y-3">
                                <div className="flex justify-center items-center gap-4">
                                    <button onClick={onRestart} className="bg-slate-700/80 hover:bg-slate-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm">{t('home_button_label')}</button>
                                    
                                    <div className="flex items-center gap-3">
                                        {isMusicPlaying && (
                                            <button onClick={toggleMute} className="text-slate-400 hover:text-white transition-colors" title={isMuted ? "Activer la musique" : "Couper la musique"}>
                                                {isMuted ? <VolumeOffIcon className="w-5 h-5" /> : <VolumeUpIcon className="w-5 h-5" />}
                                            </button>
                                        )}
                                        <button onClick={handlePause} className="text-slate-400 hover:text-white transition-colors" title="Pause">
                                            <PauseIcon className={`w-6 h-6 ${!pauseUsed ? 'text-teal-400 animate-pulse' : 'text-slate-600'}`} />
                                        </button>
                                        <button 
                                            onClick={onToggleFullscreen}
                                            className="text-slate-400 hover:text-white transition-colors"
                                            title={isFullscreen ? "Quitter le plein écran" : "Passer en plein écran"}
                                        >
                                            {isFullscreen ? <ExitFullscreenIcon className="w-5 h-5" /> : <EnterFullscreenIcon className="w-5 h-5" />}
                                        </button>
                                    </div>
                                    
                                    <button onClick={onShowLeaderboard} className="bg-slate-700/80 hover:bg-slate-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm">{t('leaderboard_button')}</button>
                                </div>
                                <div className="px-3 py-1 bg-slate-900 rounded-md border border-slate-600">
                                    <p className="text-center text-slate-300 font-semibold text-xs tracking-wider">{t('level_label')} {currentLevel} &bull; {t('question_label')} {currentQuestionIndexInLevel + 1} / {QUESTIONS_PER_LEVEL}</p>
                                </div>
                                <div className="flex justify-between items-center gap-2 sm:gap-4 bg-slate-800/50 p-2 rounded-xl border border-slate-700">
                                <div className="flex items-center gap-2 flex-1 min-w-0">
                                        {isBase64Image ? <img src={player.avatar} alt="Player Avatar" className="w-12 h-12 rounded-full object-cover" /> : <span className="text-3xl w-12 h-12 flex items-center justify-center">{player.avatar}</span>}
                                        <div className="truncate">
                                            <p className="font-bold text-sm md:text-base leading-tight truncate">{player.username}</p>
                                            <p className="text-xs text-slate-400 truncate">{player.country}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 sm:gap-4">
                                        <div className="flex-shrink-0">
                                            {!isAnswered && (
                                                <div className={`w-16 h-16 flex items-center justify-center rounded-full border-2 transition-colors duration-300 ${questionTimeLeft <= 3 ? 'border-red-500' : 'border-slate-600'} bg-slate-900/80 animate-fade-in`}>
                                                    <span className={`font-mono font-bold text-lg md:text-2xl transition-colors duration-300 ${questionTimeLeft <= 3 ? 'text-red-400' : 'text-amber-300'}`}>{questionTimeLeft}</span>
                                                </div>
                                            )}
                                        </div>
                                        <div className="text-right">
                                            <p className="font-mono text-xl md:text-2xl font-bold text-amber-300">{`${Math.floor(elapsedTime / 60).toString().padStart(2, '0')}:${(elapsedTime % 60).toString().padStart(2, '0')}`}</p>
                                            <p className="text-xs text-slate-400">{score} / {TOTAL_QUESTIONS}</p>
                                        </div>
                                    </div>
                                </div>
                                {showPauseError && (
                                    <div className="text-center animate-fade-in -my-1">
                                        <span className="bg-red-500/90 text-white text-sm font-medium px-3 py-0.5 rounded-full shadow-lg">
                                            {t('option_already_used')}
                                        </span>
                                    </div>
                                )}
                                <div className="w-full bg-slate-700/50 rounded-full h-2.5 border border-slate-600 overflow-hidden"><div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-full rounded-full transition-all duration-300" style={{ width: `${progressPercentage}%` }}></div></div>
                            </header>

                            <div className="my-3 p-3 bg-slate-900/50 rounded-lg border border-slate-700">
                                <div className="text-center mb-2 flex items-center justify-center gap-1 text-green-400">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                    </span>
                                    <span className="font-semibold text-xs">En ligne : {onlineCount}</span>
                                </div>
                                <div className="grid grid-cols-3 items-center pt-2">
                                    <button onClick={handleUseFiftyFifty} disabled={jokers.fiftyFifty === 0 || isAnswered} className="flex flex-col items-center gap-1 text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:text-amber-300 transition-colors">
                                        <FiftyFiftyIcon className="w-8 h-8" />
                                        <span className="text-xs md:text-sm font-semibold text-center">{t('joker_fifty_fifty')} ({jokers.fiftyFifty})</span>
                                    </button>
                                    <span className="font-bold text-amber-300 animate-joker-glow text-sm text-center">{t('jokers_label')}</span>
                                    <button onClick={handleUseExtraTime} disabled={jokers.extraTime === 0 || isAnswered} className="flex flex-col items-center gap-1 text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:text-amber-300 transition-colors">
                                        <ClockIcon className="w-8 h-8" />
                                        <span className="text-xs md:text-sm font-semibold text-center">{t('joker_extra_time')} ({jokers.extraTime})</span>
                                    </button>
                                </div>
                            </div>
                            
                            <footer className="hidden md:flex justify-center items-center flex-grow">
                                {levelConfig && (
                                    <div className="bottom-trophy-wrapper" title={levelConfig.trophy.name[language]}>
                                        {React.cloneElement(levelConfig.trophy.icon, { className: "trophy-icon w-40 h-40 drop-shadow-lg" })}
                                    </div>
                                )}
                            </footer>
                        </div>

                        {/* Right Column for Desktop / Main Area for Mobile */}
                        <main className={`flex-1 w-full min-h-0 pt-4 md:pt-0 ${isTransitioningQuestion ? 'animate-fade-out' : 'animate-fade-in'}`}>
                            <QuestionCard key={currentQuestion.id} question={currentQuestion} onAnswer={handleAnswer} answerData={isAnswered ? answerHistory[answerHistory.length-1] : undefined} timerStartTime={timerStartTimes[currentQuestion.id]} onTimeUpdate={setQuestionTimeLeft} disabledOptions={disabledOptions} isPaused={isPaused} />
                        </main>

                    </div>
                    <footer className="absolute bottom-4 left-1/2 -translate-x-1/2 z-0 animate-fade-in md:hidden">
                        {levelConfig && (
                            <div className="bottom-trophy-wrapper" title={levelConfig.trophy.name[language]}>
                                {React.cloneElement(levelConfig.trophy.icon, { className: "trophy-icon w-20 h-20 drop-shadow-lg" })}
                            </div>
                        )}
                    </footer>
                </div>
            )}
        </>
    );
};

export default QuizScreen;