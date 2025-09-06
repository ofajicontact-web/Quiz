import React, { useState, useEffect, useCallback, useContext, useRef } from 'react';
import { Player, Question, AnswerHistoryItem } from '../types';
import { LanguageContext } from '../context/LanguageContext';
import { QUESTIONS_PER_LEVEL, TOTAL_LEVELS, TOTAL_QUESTIONS, PASSING_SCORE_PER_LEVEL, LEVELS_CONFIG } from '../constants.tsx';
import { MOROCCAN_QUESTIONS, GLOBAL_QUESTIONS } from '../data/questions';
import Loader from './Loader';
import QuestionCard from './QuestionCard';
import DynamicText from './DynamicText';
import CloudTransition from './CloudTransition';
import useOnlineCounter from '../hooks/useOnlineCounter';
import { FiftyFiftyIcon, SkipIcon, ClockIcon } from './Icons';

interface QuizScreenProps {
    player: Player;
    onComplete: (result: any) => void;
    onRestart: () => void;
    gameId: number;
    onShowLeaderboard: () => void;
}

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
        <div className="flex flex-col items-center justify-center h-full text-center animate-fade-in p-4">
            <h2 className="text-4xl font-bold text-amber-300 mb-2">{passed ? t('level_cleared') : t('game_over')}</h2>
            <p className="text-lg text-slate-300 mb-6">{t('level_label')} {level}: {levelConfig.name[language]}</p>
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 mb-8 shadow-lg w-full max-w-sm">
                <p className="text-slate-400 text-sm mb-1">{t('your_score_for_this_level')}</p>
                <p className={`text-6xl font-bold mb-4 ${passed ? 'text-green-400' : 'text-red-400'}`}>{score}<span className="text-3xl text-slate-500">/{QUESTIONS_PER_LEVEL}</span></p>
                {trophyWon && (
                    <div className="animate-fade-in-up flex flex-col items-center">
                        <p className="text-amber-300">{t('trophy_unlocked_message')}</p>
                        <div className="trophy-animation-wrapper mt-2">
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

const correctEmojis = ['✅', '✨', '🎉', '💯', '🙌', '😎', '👍'];
const incorrectEmojis = ['❌', '🤔', '😬', '🤦‍♂️', '🤷‍♀️', '👎'];

const QuizScreen: React.FC<QuizScreenProps> = ({ player, onComplete, onRestart, gameId, onShowLeaderboard }) => {
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
    const [feedback, setFeedback] = useState<{ id: number; text: string } | null>(null);
    const feedbackIdCounter = useRef(0);
    const [isMistakesModalVisible, setIsMistakesModalVisible] = useState(false);
    const [currentLevelMistakes, setCurrentLevelMistakes] = useState<AnswerHistoryItem[]>([]);
    const [questionTimeLeft, setQuestionTimeLeft] = useState(10);
    const [isTransitioningQuestion, setIsTransitioningQuestion] = useState(false);
    const onlineCount = useOnlineCounter(quizState === 'playing');
    const [jokers, setJokers] = useState({ fiftyFifty: 1, skip: 1, extraTime: 1 });
    const [disabledOptions, setDisabledOptions] = useState<string[]>([]);
    
    const shuffleArray = useCallback(<T,>(array: T[]): T[] => {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
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
                const recycledPool = shuffleArray(allQuestions.filter(q => !available.map(aq => aq.id).includes(q.id)));
                const recycled = recycledPool.slice(0, needed);
                const selected = [...available, ...recycled];
                const nextUsedIds = recycled.map(q => q.id);
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
        setJokers({ fiftyFifty: 1, skip: 1, extraTime: 1 });
        
        const timer = setInterval(() => setElapsedTime(prev => prev + 1), 1000);
        return () => clearInterval(timer);
    }, [gameId, shuffleArray]);

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
        if (quizState === 'playing' && currentQuestion && !timerStartTimes[currentQuestion.id]) {
            setTimerStartTimes(prev => ({ ...prev, [currentQuestion.id]: Date.now() }));
        }
    }, [quizState, currentQuestion, timerStartTimes]);
    
    const handleAnswer = useCallback((selectedAnswer: string) => {
        if (!currentQuestion || answerHistory.length !== ((currentLevel - 1) * QUESTIONS_PER_LEVEL + currentQuestionIndexInLevel)) return;

        const isTimeout = selectedAnswer === 'TIMEOUT';
        const correctAnswer = currentQuestion.correctAnswer[language];
        const isCorrect = !isTimeout && selectedAnswer === correctAnswer;
        
        if (isCorrect) {
            setScore(s => s + 1);
        }
        
        let emoji = isCorrect ? correctEmojis[Math.floor(Math.random() * correctEmojis.length)] : incorrectEmojis[Math.floor(Math.random() * incorrectEmojis.length)];
        
        feedbackIdCounter.current += 1;
        const newFeedback = { id: feedbackIdCounter.current, text: emoji };
        setFeedback(newFeedback);

        setTimeout(() => {
            if (feedbackIdCounter.current === newFeedback.id) setFeedback(null);
        }, 2500);

        const newHistoryItem = { question: currentQuestion, selectedAnswer: isTimeout ? t('answer_timed_out') : selectedAnswer, correctAnswer, isCorrect };
        const newHistory = [...answerHistory, newHistoryItem];
        setAnswerHistory(newHistory);
        
        // Trophy sound on perfect level score
        if (isCorrect && currentQuestionIndexInLevel === QUESTIONS_PER_LEVEL - 1) {
            const levelAnswers = newHistory.slice((currentLevel - 1) * QUESTIONS_PER_LEVEL);
            const levelScore = levelAnswers.filter(a => a.isCorrect).length;

            if (levelScore === QUESTIONS_PER_LEVEL) {
                const levelConfig = LEVELS_CONFIG[currentLevel - 1];
                if (levelConfig && levelConfig.trophy.audioUrl) {
                    const audio = new Audio(levelConfig.trophy.audioUrl);
                    audio.play().catch(error => console.error("Trophy audio playback failed:", error));
                }
            }
        }
        
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

    }, [currentQuestion, answerHistory, currentLevel, currentQuestionIndexInLevel, language, t, advanceQuestion, earnedTrophies, score]);

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

    const handleUseSkip = () => {
        if (jokers.skip > 0 && currentQuestion) {
            setJokers(prev => ({ ...prev, skip: prev.skip - 1 }));
            const newHistory = [...answerHistory, { question: currentQuestion, selectedAnswer: 'SKIPPED', correctAnswer: currentQuestion.correctAnswer[language], isCorrect: false }];
            setAnswerHistory(newHistory);
            
            setIsTransitioningQuestion(true);
            setTimeout(() => {
                if (currentQuestionIndexInLevel === QUESTIONS_PER_LEVEL - 1) {
                    // Level finished logic after skip
                    const levelAnswers = newHistory.slice((currentLevel - 1) * QUESTIONS_PER_LEVEL);
                    const levelScore = levelAnswers.filter(a => a.isCorrect).length;
                    const mistakes = levelAnswers.filter(a => !a.isCorrect);
                    setCurrentLevelMistakes(mistakes);
                    const passed = levelScore >= PASSING_SCORE_PER_LEVEL;
                    setLevelResult({ level: currentLevel, score: levelScore, passed, trophyWon: false, levelConfig: LEVELS_CONFIG[currentLevel - 1] });
                    setQuizState('level_transition');
                } else {
                   advanceQuestion();
                }
                 setIsTransitioningQuestion(false);
            }, 500);
        }
    };
    
    const handleUseExtraTime = () => {
        if (jokers.extraTime > 0 && currentQuestion) {
            setJokers(prev => ({ ...prev, extraTime: prev.extraTime - 1 }));
            setTimerStartTimes(prev => ({...prev, [currentQuestion.id]: (prev[currentQuestion.id] || Date.now()) + 10000 }));
        }
    };

    const handleContinue = () => {
        if (currentLevel < TOTAL_LEVELS) {
            setCurrentLevel(l => l + 1);
            setCurrentQuestionIndexInLevel(0);
            setLevelResult(null);
            setQuizState('playing');
            setQuestionTimeLeft(10);
        } else {
            onComplete({ score, time: elapsedTime, history: answerHistory, status: 'passed', earnedTrophies });
        }
    };

    const handleCloseMistakesModal = () => {
        setIsMistakesModalVisible(false);
        if (levelResult?.passed) {
            handleContinue();
        }
    };

    const handleShowResults = () => onComplete({ score, time: elapsedTime, history: answerHistory, status: 'failed', earnedTrophies });

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
            <DynamicText feedback={feedback} />
            {isMistakesModalVisible && <MistakesModal mistakes={currentLevelMistakes} onClose={handleCloseMistakesModal} />}
            {isTransitioningQuestion && <CloudTransition />}
            
            {quizState === 'level_transition' ? (
                <LevelTransitionScreen 
                    levelResult={levelResult} 
                    onContinue={handleContinue} 
                    onShowResults={handleShowResults} 
                    mistakes={currentLevelMistakes} 
                    onShowMistakes={() => setIsMistakesModalVisible(true)} 
                />
            ) : (
                <div className="flex flex-col items-center w-full mx-auto h-full p-2 sm:p-4 overflow-hidden">
                    <div className="w-full h-full flex flex-col md:flex-row md:gap-4 lg:gap-6 max-w-7xl mx-auto">
                        
                        {/* Left Column for Desktop / Top Area for Mobile */}
                        <div className="w-full md:w-[300px] lg:w-[350px] md:flex-shrink-0 md:flex md:flex-col md:space-y-4">
                            <header className="animate-fade-in space-y-3">
                                <div className="flex justify-center items-center gap-4">
                                    <button onClick={onRestart} className="bg-slate-700/80 hover:bg-slate-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm">{t('home_button_label')}</button>
                                    <div className="flex items-center gap-2 text-green-400 animate-slow-pulse">
                                        <span className="relative flex h-2.5 w-2.5">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                                        </span>
                                        <span className="font-semibold text-sm">En ligne : {onlineCount}</span>
                                    </div>
                                    <button onClick={onShowLeaderboard} className="bg-slate-700/80 hover:bg-slate-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm">{t('leaderboard_button')}</button>
                                </div>
                                <div className="px-3 py-1 bg-slate-900 rounded-md border border-slate-600">
                                    <p className="text-center text-slate-300 font-semibold text-xs tracking-wider">{t('level_label')} {currentLevel} &bull; {t('question_label')} {currentQuestionIndexInLevel + 1} / {QUESTIONS_PER_LEVEL}</p>
                                </div>
                                <div className="flex justify-between items-center gap-2 sm:gap-4 bg-slate-800/50 p-2 rounded-xl border border-slate-700">
                                <div className="flex items-center gap-2 flex-1 min-w-0">
                                        {isBase64Image ? <img src={player.avatar} alt="Player Avatar" className="w-10 h-10 rounded-full object-cover" /> : <span className="text-2xl w-10 h-10 flex items-center justify-center">{player.avatar}</span>}
                                        <div className="truncate">
                                            <p className="font-bold text-sm leading-tight truncate">{player.username}</p>
                                            <p className="text-xs text-slate-400 truncate">{player.country}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 sm:gap-4">
                                        <div className="flex-shrink-0">
                                            {!isAnswered && (
                                                <div className={`w-12 h-12 flex items-center justify-center rounded-full border-2 transition-colors duration-300 ${questionTimeLeft <= 3 ? 'border-red-500' : 'border-slate-600'} bg-slate-900/80 animate-fade-in`}>
                                                    <span className={`font-mono font-bold text-lg transition-colors duration-300 ${questionTimeLeft <= 3 ? 'text-red-400' : 'text-amber-300'}`}>{questionTimeLeft}</span>
                                                </div>
                                            )}
                                        </div>
                                        <div className="text-right">
                                            <p className="font-mono text-xl font-bold text-amber-300">{`${Math.floor(elapsedTime / 60).toString().padStart(2, '0')}:${(elapsedTime % 60).toString().padStart(2, '0')}`}</p>
                                            <p className="text-xs text-slate-400">{score} / {TOTAL_QUESTIONS}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full bg-slate-700/50 rounded-full h-2.5 border border-slate-600 overflow-hidden"><div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-full rounded-full transition-all duration-300" style={{ width: `${progressPercentage}%` }}></div></div>
                            </header>

                            <div className="my-3 p-2 bg-slate-900/50 rounded-lg border border-slate-700">
                                <div className="flex justify-around items-center">
                                    <button onClick={handleUseFiftyFifty} disabled={jokers.fiftyFifty === 0 || isAnswered} className="flex flex-col items-center gap-1 text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:text-amber-300 transition-colors">
                                        <FiftyFiftyIcon className="w-7 h-7" />
                                        <span className="text-xs font-semibold">{t('joker_fifty_fifty')} ({jokers.fiftyFifty})</span>
                                    </button>
                                    <button onClick={handleUseSkip} disabled={jokers.skip === 0 || isAnswered} className="flex flex-col items-center gap-1 text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:text-amber-300 transition-colors">
                                        <SkipIcon className="w-7 h-7" />
                                        <span className="text-xs font-semibold">{t('joker_skip')} ({jokers.skip})</span>
                                    </button>
                                    <button onClick={handleUseExtraTime} disabled={jokers.extraTime === 0 || isAnswered} className="flex flex-col items-center gap-1 text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:text-amber-300 transition-colors">
                                        <ClockIcon className="w-7 h-7" />
                                        <span className="text-xs font-semibold">{t('joker_extra_time')} ({jokers.extraTime})</span>
                                    </button>
                                </div>
                            </div>
                            
                            <footer className="hidden md:flex justify-center items-center flex-grow">
                                {levelConfig && (
                                    <div className="bottom-trophy-wrapper" title={levelConfig.trophy.name[language]}>
                                        {React.cloneElement(levelConfig.trophy.icon, { className: "trophy-icon w-20 h-20 drop-shadow-lg" })}
                                    </div>
                                )}
                            </footer>
                        </div>

                        {/* Right Column for Desktop / Main Area for Mobile */}
                        <main className={`flex-1 w-full min-h-0 pt-4 md:pt-0 ${isTransitioningQuestion ? 'animate-fade-out' : 'animate-fade-in'}`}>
                            <QuestionCard key={currentQuestion.id} question={currentQuestion} onAnswer={handleAnswer} answerData={isAnswered ? answerHistory[answerHistory.length-1] : undefined} timerStartTime={timerStartTimes[currentQuestion.id]} onTimeUpdate={setQuestionTimeLeft} disabledOptions={disabledOptions}/>
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