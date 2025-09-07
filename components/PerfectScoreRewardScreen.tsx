import React, { useState, useEffect, useContext, useRef } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { NtaaCaftan } from '../constants';
import Confetti from './Confetti';

interface PerfectScoreRewardScreenProps {
    onShowCertificate: () => void;
}

const PerfectScoreRewardScreen: React.FC<PerfectScoreRewardScreenProps> = ({ onShowCertificate }) => {
    const { t, language } = useContext(LanguageContext);
    const [showCaftan, setShowCaftan] = useState(false);
    const narrationAudioRef = useRef<HTMLAudioElement | null>(null);

    const audioMap: { [key: string]: string } = {
        dr: 'https://radiofanida.com/wp/wp-content/uploads/2025/09/Darija_01.mp3',
        fr: 'https://radiofanida.com/wp/wp-content/uploads/2025/09/Francais._01.mp3',
        en: 'https://radiofanida.com/wp/wp-content/uploads/2025/09/Anglais_01.mp3',
        es: 'https://radiofanida.com/wp/wp-content/uploads/2025/09/Espagnol_01.mp3',
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowCaftan(true);
        }, 3000); 
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (showCaftan) {
            const narrationSrc = audioMap[language] || audioMap['fr'];
            narrationAudioRef.current = new Audio(narrationSrc);
            narrationAudioRef.current.play().catch(error => console.error("Narration audio playback failed:", error));
        }

        return () => {
            if (narrationAudioRef.current) {
                narrationAudioRef.current.pause();
                narrationAudioRef.current = null;
            }
        };
    }, [showCaftan, language]);
    
    const handleShowCertificate = () => {
        onShowCertificate();
    };

    if (!showCaftan) {
        return (
            <div className="flex flex-col items-center justify-center h-full text-center animate-fade-in p-4">
                 <div className="w-full max-w-md bg-slate-800/80 rounded-2xl p-8 text-center shadow-lg border border-slate-700 animate-fade-in-up">
                    <h2 className="text-2xl font-bold text-amber-300 mb-4">{t('congratulations_title')}</h2>
                    <p className="text-lg text-slate-300">{t('reward_preparing')}</p>
                    <div className="w-16 h-16 border-4 border-t-transparent border-indigo-400 rounded-full animate-spin mt-6 mx-auto"></div>
                </div>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-lg z-50 flex flex-col items-center justify-center p-4 animate-fade-in">
            <Confetti />
            <div className="text-center w-full max-w-lg flex flex-col items-center justify-center">
                <h2 className="text-4xl sm:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-400 mb-4 animate-fade-in-down">
                    {t('congratulations_title')}
                </h2>

                <div className="relative my-4 sm:my-6 trophy-animation-wrapper">
                    <div className="animate-trophy-glow">
                        <div className="animate-trophy-pulse flex flex-col items-center justify-center h-[40vh] sm:h-[50vh]">
                           <NtaaCaftan className="relative h-full w-auto object-contain drop-shadow-2xl" />
                        </div>
                    </div>
                </div>


                <p className="text-slate-200 text-base sm:text-lg max-w-md mx-auto leading-relaxed mb-2 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                    {t('mention_perfect')}
                </p>
                <p className="text-slate-500 text-xs italic mb-8 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
                    ({t('digital_trophy')})
                </p>

                <button 
                    onClick={handleShowCertificate}
                    className="bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 font-bold py-3 px-8 rounded-lg hover:opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-yellow-500/30 animate-fade-in-up"
                    style={{ animationDelay: '0.9s' }}
                >
                    {t('show_certificate_button')} 
                </button>
            </div>
        </div>
    );
};

export default PerfectScoreRewardScreen;