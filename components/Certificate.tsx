import React, { useRef, useContext, useState, useEffect } from 'react';
import { Player, QuizResult } from '../types';
import { LanguageContext } from '../context/LanguageContext';
import { TOTAL_QUESTIONS, LEVELS_CONFIG } from '../constants.tsx';
import Confetti from './Confetti';

interface CertificateProps {
    player: Player;
    result: QuizResult;
    onRestart: () => void;
    onPlayAgain: () => void;
    onShowLeaderboard: () => void;
}

const MoroccanStar: React.FC = () => (
    <svg className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-green-700 mx-auto" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26Z" />
    </svg>
);

const Certificate: React.FC<CertificateProps> = ({ player, result, onRestart, onPlayAgain, onShowLeaderboard }) => {
    const certificateRef = useRef<HTMLDivElement>(null);
    const { t, language } = useContext(LanguageContext);
    const [showConfetti, setShowConfetti] = useState(false);
    const { score, history, earnedTrophies } = result;

    useEffect(() => {
        if (result.status === 'passed') {
            const timer = setTimeout(() => setShowConfetti(true), 300);
            return () => clearTimeout(timer);
        }
    }, [result.status]);

    const getMention = () => {
        if (score === 40) return t('mention_perfect');
        if (score >= 31) return t('mention_31_39');
        if (score >= 26) return t('mention_26_30');
        if (score >= 21) return t('mention_21_25');
        if (score >= 11) return t('mention_11_20');
        return t('mention_0_10');
    };

    const generateCertificateCanvas = (): Promise<HTMLCanvasElement> => {
        return new Promise((resolve, reject) => {
            const certificateNode = certificateRef.current;
            if (!certificateNode || !(window as any).html2canvas) {
                return reject(new Error("Certificate element or html2canvas library not found."));
            }

            (window as any).html2canvas(certificateNode, {
                scale: 2,
                useCORS: true,
            }).then(resolve).catch(reject);
        });
    };
    
    const handleDownload = async () => {
        try {
            const canvas = await generateCertificateCanvas();
            const link = document.createElement('a');
            link.download = 'Mon certificat de culture générale.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        } catch (error) {
            console.error("Failed to download certificate:", error);
        }
    };
    
    const handleShare = async () => {
        const shareText = t('share_text', { score: score, totalQuestions: TOTAL_QUESTIONS });
        const shareTitle = t('share_title');
        const fileName = 'Mon certificat de culture générale.png';

        try {
            const canvas = await generateCertificateCanvas();
            
            const dataUrl = canvas.toDataURL('image/png');
            const response = await fetch(dataUrl);
            const blob = await response.blob();

            if (blob && navigator.share && navigator.canShare) {
                const file = new File([blob], fileName, { type: 'image/png' });
                
                if (navigator.canShare({ files: [file] })) {
                    try {
                        await navigator.share({
                            title: shareTitle,
                            text: shareText,
                            files: [file],
                        });
                    } catch (error) {
                        if ((error as DOMException).name !== 'AbortError') {
                            console.error('Error sharing certificate:', error);
                        }
                    }
                } else {
                    if (navigator.clipboard) {
                        navigator.clipboard.writeText(shareText);
                        alert(t('copied_to_clipboard'));
                    } else {
                        alert(t('share_unsupported'));
                    }
                }
            } else if (navigator.clipboard) {
                navigator.clipboard.writeText(shareText);
                alert(t('copied_to_clipboard'));
            } else {
                alert(t('share_unsupported'));
            }
        } catch (error) {
            console.error("Failed to generate certificate for sharing:", error);
            if (navigator.clipboard) {
                navigator.clipboard.writeText(shareText);
                alert(t('copied_to_clipboard'));
            } else {
                alert(t('share_unsupported'));
            }
        }
    };
    
    const formatInDarija = (date: Date) => {
        const day = date.getDate();
        const year = date.getFullYear();
        const monthIndex = date.getMonth();
        const arabicMonths = [
            "يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو",
            "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"
        ];
        const month = arabicMonths[monthIndex];
        return `${day} ${month} ${year}`;
    };

    const formattedDate = language === 'dr'
        ? formatInDarija(new Date())
        : new Date().toLocaleDateString(language, { year: 'numeric', month: 'long', day: 'numeric' });

    return (
        <div className="relative flex flex-col items-center justify-start md:justify-center gap-4 sm:gap-6 w-full h-full animate-fade-in p-2 sm:p-4 pt-8 md:pt-4 overflow-y-auto">
            {showConfetti && <Confetti />}

            <div className="w-full flex flex-col items-center">
                <div ref={certificateRef} className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl bg-[#fdfaf2] border-2 border-[#a48c66] shadow-2xl shadow-black/40">
                    <div className="border-4 border-double border-[#c9b79c] p-1 sm:p-2 md:p-4 h-full">
                        <div className="border border-dashed border-[#a48c66] p-2 sm:p-4 md:p-6 text-center text-stone-800 flex flex-col justify-between h-full">
                            <div>
                               <div className="flex justify-center mb-1 sm:mb-2 md:mb-4">
                                   <MoroccanStar />
                               </div>
                               <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-serif text-stone-900 tracking-wider">{t('certificate_title')}</h1>
                               <p className="text-xs sm:text-sm text-stone-600 mt-1 sm:mt-2">{t('issuer_line')}</p>
                               
                               <p className="my-2 sm:my-3 md:my-4 text-sm sm:text-base md:text-lg text-stone-700">{t('presented_to')}</p>

                               <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-purple-800 my-1 sm:my-2">{player.username}</h2>
                            </div>

                            <div className="mt-2 sm:mt-4 text-center px-1">
                                <p className="italic max-w-xl mx-auto text-stone-700 text-xs sm:text-base leading-snug">{getMention()}</p>
                            </div>
                            
                            <div>
                                <div className="mt-2 sm:mt-4 md:mt-6 grid grid-cols-2 gap-2 sm:gap-4 md:gap-6 max-w-md sm:max-w-xl mx-auto items-center">
                                    <div className="bg-stone-100/50 p-1 sm:p-2 md:p-4 rounded-xl border border-stone-300">
                                        <p className="text-stone-500 text-xs sm:text-sm font-semibold uppercase tracking-wider">{t('final_score')}</p>
                                        <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-700 mt-1">{score}/{TOTAL_QUESTIONS}</p>
                                    </div>
                                    <div className="bg-stone-100/50 p-1 sm:p-2 md:p-4 rounded-xl border border-stone-300">
                                        <p className="text-stone-500 text-xs sm:text-sm font-semibold uppercase tracking-wider">{t('trophies_earned')}</p>
                                        <div className="flex justify-center items-center gap-1 sm:gap-2 mt-2 flex-wrap">
                                            {earnedTrophies.length > 0 ? LEVELS_CONFIG.filter(lc => earnedTrophies.includes(lc.level)).map(levelConfig => (
                                                <div key={levelConfig.level} className="flex flex-col items-center" title={levelConfig.trophy.name[language]}>
                                                    {React.cloneElement(levelConfig.trophy.icon, { className: "w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" })}
                                                </div>
                                            )) : <span className="text-stone-500">-</span>}
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="mt-3 sm:mt-4 md:mt-6 text-xs sm:text-sm text-stone-500">
                                    <span>{t('date_label')} {formattedDate}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-2 flex flex-wrap justify-center gap-2 sm:gap-4 animate-fade-in-up flex-shrink-0" style={{ animationDelay: '0.5s' }}>
                <button onClick={handleDownload} className="px-4 py-2 text-xs sm:px-5 sm:py-2.5 sm:text-sm font-medium bg-sky-500 hover:bg-sky-600 rounded-lg text-white transition-colors">{t('download_button')}</button>
                <button onClick={onPlayAgain} className="px-4 py-2 text-xs sm:px-5 sm:py-2.5 sm:text-sm font-medium bg-green-500 hover:bg-green-600 rounded-lg text-white transition-colors">{t('replay_button')}</button>
                <button onClick={handleShare} className="px-4 py-2 text-xs sm:px-5 sm:py-2.5 sm:text-sm font-medium bg-fuchsia-500 hover:bg-fuchsia-600 rounded-lg text-white transition-colors">{t('share_button')}</button>
                <button onClick={onRestart} className="px-4 py-2 text-xs sm:px-5 sm:py-2.5 sm:text-sm font-medium bg-slate-600 hover:bg-slate-700 rounded-lg text-white transition-colors">{t('home_button_label')}</button>
                <button onClick={onShowLeaderboard} className="px-4 py-2 text-xs sm:px-5 sm:py-2.5 sm:text-sm font-medium bg-amber-500 hover:bg-amber-600 rounded-lg text-white transition-colors">{t('leaderboard_button')}</button>
            </div>
        </div>
    );
};

export default Certificate;