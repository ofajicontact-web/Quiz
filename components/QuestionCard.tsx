import React, { useState, useEffect, useContext, useRef } from 'react';
import { Question, AnswerHistoryItem } from '../types';
import { LanguageContext } from '../context/LanguageContext';

interface QuestionCardProps {
    question: Question;
    onAnswer: (answer: string) => void;
    answerData?: AnswerHistoryItem;
    timerStartTime?: number;
    onTimeUpdate: (time: number) => void;
    disabledOptions: string[];
    isPaused: boolean;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, onAnswer, answerData, timerStartTime, onTimeUpdate, disabledOptions, isPaused }) => {
    const QUESTION_TIME = 10;
    const { language, t } = useContext(LanguageContext);
    const [timeLeft, setTimeLeft] = useState(QUESTION_TIME);
    const onAnswerRef = useRef(onAnswer);
    onAnswerRef.current = onAnswer;
    const onTimeUpdateRef = useRef(onTimeUpdate);
    onTimeUpdateRef.current = onTimeUpdate;
    const questionRef = useRef<HTMLHeadingElement>(null);
    const optionSpanRefs = useRef<(HTMLSpanElement | null)[]>([]);

    const isAnswered = !!answerData;

    useEffect(() => {
        if (isAnswered) {
            setTimeLeft(0);
            onTimeUpdateRef.current(0);
            return;
        }

        if (isPaused) {
            return;
        }

        if (!timerStartTime) {
            setTimeLeft(QUESTION_TIME);
            onTimeUpdateRef.current(QUESTION_TIME);
            return;
        }

        const calculateRemaining = () => {
            const baseTime = QUESTION_TIME;
            const elapsed = Math.floor((Date.now() - timerStartTime) / 1000);
            return Math.max(0, baseTime - elapsed);
        };
        
        const timerId = setInterval(() => {
            const remaining = calculateRemaining();
            setTimeLeft(remaining);
            onTimeUpdateRef.current(remaining);
            if (remaining <= 0) {
                clearInterval(timerId);
                onAnswerRef.current('TIMEOUT');
            }
        }, 500);

        const initialRemaining = calculateRemaining();
        setTimeLeft(initialRemaining);
        onTimeUpdateRef.current(initialRemaining);
        return () => clearInterval(timerId);
    }, [question.id, isAnswered, timerStartTime, isPaused]);

    useEffect(() => {
        const adjustFontSize = (element: HTMLElement | null) => {
            if (!element) return;

            element.style.fontSize = ''; 

            const style = window.getComputedStyle(element);
            const initialFontSize = parseFloat(style.fontSize);
            element.style.fontSize = `${initialFontSize}px`;

            const checkOverflow = (el: HTMLElement) => el.scrollHeight > el.clientHeight || el.scrollWidth > el.clientWidth;

            if (checkOverflow(element)) {
                let currentSize = initialFontSize;
                while (checkOverflow(element) && currentSize > 8) {
                    currentSize -= 1;
                    element.style.fontSize = `${currentSize}px`;
                }
            }
        };
        
        const timeoutId = setTimeout(() => {
            adjustFontSize(questionRef.current);
            optionSpanRefs.current.forEach(adjustFontSize);
        }, 50);

        return () => clearTimeout(timeoutId);
    }, [question.id, language]);


    const handleAnswerClick = (option: string) => {
        onAnswer(option);
    };

    const getButtonClass = (option: string) => {
        let classes = '';
        const isDisabledByJoker = disabledOptions.includes(option);

        if(isDisabledByJoker) {
            return 'bg-slate-800/30 border-slate-700/30 opacity-40 cursor-not-allowed';
        }

        if (!isAnswered) {
            classes = 'bg-slate-700/50 border-slate-600 hover:bg-indigo-500/50 hover:border-indigo-400';
        } else {
            const isCorrectAnswer = option === question.correctAnswer[language];
            const isSelectedAnswer = answerData && option === answerData.selectedAnswer;

            if (isCorrectAnswer) {
                classes = 'bg-green-500/80 border-green-400';
                 if (isSelectedAnswer) {
                    classes += ' correct-answer-animation';
                }
            } else if (isSelectedAnswer) {
                classes = 'bg-red-500/80 border-red-400 incorrect-answer-animation';
            } else {
                classes = 'bg-slate-800/50 border-slate-700 opacity-60';
            }
        }
        return classes;
    };
    
    const optionsToRender = question.shuffledOptions ? question.shuffledOptions[language] : question.options[language];
    const timeBonus = (timerStartTime || Date.now()) < Date.now() - (QUESTION_TIME * 1000) ? 10 : 0;
    const totalTime = QUESTION_TIME + timeBonus;
    
    return (
        <div className={`relative bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-2xl p-4 sm:p-6 border-2 border-slate-700 h-full flex flex-col`}>
            {!isAnswered && (
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-slate-700 rounded-t-xl overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-amber-400 to-red-500 transition-all duration-500 ease-linear" style={{ width: `${(timeLeft / (totalTime > QUESTION_TIME ? totalTime : QUESTION_TIME)) * 100}%` }}></div>
                </div>
            )}
            
            <div className="h-[160px] sm:h-[180px] md:h-[200px] flex items-center justify-center mb-4 overflow-hidden">
                <h2 ref={questionRef} className="text-lg md:text-2xl font-semibold leading-tight text-center" dangerouslySetInnerHTML={{ __html: question.question[language] }} />
            </div>

            <div className="grid grid-cols-2 gap-2 sm:gap-3 flex-1">
                {optionsToRender.map((option, index) => (
                    <button key={index} onClick={() => handleAnswerClick(option)} disabled={isAnswered || disabledOptions.includes(option)}
                        className={`py-2 px-3 sm:py-3 sm:px-4 text-sm sm:text-base md:text-lg rounded-lg border-2 font-semibold transition-all duration-300 transform disabled:transform-none disabled:cursor-not-allowed h-full flex items-center justify-center text-center ${getButtonClass(option)}`}
                    >
                        <span ref={el => { optionSpanRefs.current[index] = el; }} className="break-words" dangerouslySetInnerHTML={{ __html: option }} />
                    </button>
                ))}
            </div>
        </div>
    );
};

export default QuestionCard;