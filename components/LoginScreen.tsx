import React, { useState, useEffect, useContext, useRef } from 'react';
import { Player, LevelConfig } from '../types';
import { LanguageContext } from '../context/LanguageContext';
import { AVATARS, LEVELS_CONFIG } from '../constants.tsx';
import { COUNTRIES_DATA } from '../data/countries';
import { db } from '../services/firebase';
import { UserIcon } from './Icons';

declare const firebase: any;

interface LoginScreenProps {
    onLogin: (player: Player) => void;
    requestFullScreen: () => void;
    isMuted: boolean;
    onToggleMute: () => void;
    startMusic: () => void;
    onAvatarChangeStart: () => void;
    showFullscreenPrompt: boolean;
    triggerCloudTransition: (callback: () => void) => void;
    onShowProfile: () => void;
    currentPlayer: Player | null;
}

const SoundOnIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
    </svg>
);

const SoundOffIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
    </svg>
);


const TrophyDetailModal: React.FC<{ trophy: LevelConfig | null, onClose: () => void, language: string }> = ({ trophy, onClose, language }) => {
    if (!trophy) return null;

    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in p-4" onClick={onClose}>
            <div className="relative bg-slate-800/80 rounded-2xl shadow-lg border border-slate-700 p-8 m-4 animate-zoom-in" onClick={(e) => e.stopPropagation()}>
                <div className="trophy-animation-wrapper">
                    <div className="animate-trophy-glow">
                        <div className="animate-trophy-pulse flex flex-col items-center gap-4">
                            {React.cloneElement(trophy.trophy.icon, { className: "w-40 h-40 sm:w-48 sm:h-48" })}
                            <div className="text-center">
                                <h3 className="text-2xl sm:text-3xl font-bold text-amber-300 animate-fade-in-down" style={{ animationDelay: '0.2s' }}>
                                    {trophy.trophy.name[language] || trophy.trophy.name['fr']}
                                </h3>
                                <p className="text-slate-300 mt-1 animate-fade-in-down" style={{ animationDelay: '0.4s' }}>
                                    {trophy.name[language] || trophy.name['fr']}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin, requestFullScreen, isMuted, onToggleMute, startMusic, onAvatarChangeStart, showFullscreenPrompt, triggerCloudTransition, onShowProfile, currentPlayer }) => {
    const [step, setStep] = useState('intro');
    const [username, setUsername] = useState('');
    const [countryKey, setCountryKey] = useState('morocco');
    const [avatar, setAvatar] = useState(AVATARS[0]);
    const [error, setError] = useState('');
    const { language, setLanguage, t } = useContext(LanguageContext);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [unlockedTrophies, setUnlockedTrophies] = useState<number[]>([]);
    const [isChecking, setIsChecking] = useState(false);
    const [selectedTrophy, setSelectedTrophy] = useState<LevelConfig | null>(null);
    const [isFormExiting, setIsFormExiting] = useState(false);
    const [authMode, setAuthMode] = useState<'register' | 'login'>('register');
    const [pinInput, setPinInput] = useState('');
    const [generatedPin, setGeneratedPin] = useState<string | null>(null);
    const [playerForLogin, setPlayerForLogin] = useState<Player | null>(null);
    const [showComingSoon, setShowComingSoon] = useState(false);


    const generateUUID = () => {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    }

    useEffect(() => {
        if (currentPlayer) {
            setUsername(currentPlayer.username);
            setAvatar(currentPlayer.avatar);
        } else {
            const savedUsername = localStorage.getItem('fanidaUsername');
            if (savedUsername) {
                setUsername(savedUsername);
                setAuthMode('login');
            }
            const savedAvatar = localStorage.getItem('fanidaAvatar');
            if (savedAvatar) {
                setAvatar(savedAvatar);
            }
        }
    }, [currentPlayer]);
    
    useEffect(() => {
        if (step === 'intro') {
            const handleFirstInteraction = () => {
                startMusic();
                window.removeEventListener('click', handleFirstInteraction);
                window.removeEventListener('touchend', handleFirstInteraction);
            };

            window.addEventListener('click', handleFirstInteraction);
            window.addEventListener('touchend', handleFirstInteraction);

            return () => {
                window.removeEventListener('click', handleFirstInteraction);
                window.removeEventListener('touchend', handleFirstInteraction);
            };
        }
    }, [step, startMusic]);

    useEffect(() => {
        if (username.trim()) {
            const savedTrophiesRaw = localStorage.getItem(`fanidaTrophies_${username.trim()}`);
            if (savedTrophiesRaw) {
                try {
                    const parsed = JSON.parse(savedTrophiesRaw);
                    if(Array.isArray(parsed)) setUnlockedTrophies(parsed);
                } catch(e) {
                    setUnlockedTrophies([]);
                }
            } else {
                setUnlockedTrophies([]);
            }
        } else {
            setUnlockedTrophies([]);
        }
    }, [username]);

    const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result as string;
                setAvatar(base64String);
                localStorage.setItem('fanidaAvatar', base64String);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleAvatarClick = () => {
        onAvatarChangeStart();
        fileInputRef.current?.click();
    };

    const generatePIN = (): string => {
        return Math.floor(1000 + Math.random() * 9000).toString();
    };

    const handleCreateProfile = async (e: React.FormEvent) => {
        e.preventDefault();
        const trimmedUsername = username.trim();
        if (!trimmedUsername) {
            setError(t('username_error_empty'));
            return;
        }

        if (!db) {
            setError(t('generic_error'));
            return;
        }

        setIsChecking(true);
        setError('');

        try {
            const playersRef = db.collection('players');
            const q = playersRef.where("username_lowercase", "==", trimmedUsername.toLowerCase()).limit(1);
            const querySnapshot = await q.get();

            if (!querySnapshot.empty) {
                setError(t('username_taken_error'));
                setIsChecking(false);
                return;
            }

            const pin = generatePIN();
            let playerId = localStorage.getItem('fanidaPlayerId');
            if (!playerId) {
                playerId = generateUUID();
                localStorage.setItem('fanidaPlayerId', playerId);
            }

            const countryName = COUNTRIES_DATA[countryKey]?.[language] || COUNTRIES_DATA[countryKey]?.fr || 'Maroc';

            const newPlayer: Player = {
                id: playerId,
                username: trimmedUsername,
                country: countryName,
                avatar: avatar,
                unlockedTrophies: []
            };

            const playerDataForFirestore = {
                ...newPlayer,
                username_lowercase: trimmedUsername.toLowerCase(),
                pin: pin,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            };

            await playersRef.doc(playerId).set(playerDataForFirestore);

            localStorage.setItem('fanidaUsername', trimmedUsername);
            localStorage.setItem('fanidaAvatar', avatar);
            localStorage.setItem(`fanidaTrophies_${trimmedUsername}`, JSON.stringify([]));

            setPlayerForLogin(newPlayer);
            setGeneratedPin(pin);
        } catch (err) {
            console.error("Error creating profile:", err);
            setError(t('generic_error'));
        } finally {
            setIsChecking(false);
        }
    };

    const handleLoginWithPin = async (e: React.FormEvent) => {
        e.preventDefault();
        const trimmedUsername = username.trim();
        const trimmedPin = pinInput.trim();
        if (!trimmedUsername || !trimmedPin) {
            setError(t('invalid_credentials_error'));
            return;
        }
        
        if (!db) {
            setError(t('generic_error'));
            return;
        }

        setIsChecking(true);
        setError('');

        try {
            const playersRef = db.collection('players');
            const q = playersRef
                .where("username_lowercase", "==", trimmedUsername.toLowerCase())
                .where("pin", "==", trimmedPin)
                .limit(1);
            
            const querySnapshot = await q.get();

            if (querySnapshot.empty) {
                setError(t('invalid_credentials_error'));
                setIsChecking(false);
                return;
            }

            const doc = querySnapshot.docs[0];
            const playerData = { id: doc.id, ...doc.data() };

            localStorage.setItem('fanidaPlayerId', playerData.id);
            localStorage.setItem('fanidaUsername', playerData.username);
            localStorage.setItem('fanidaAvatar', playerData.avatar);
            
            const trophies = playerData.unlockedTrophies || [];
            localStorage.setItem(`fanidaTrophies_${playerData.username.trim()}`, JSON.stringify(trophies));
            
            const playerToLogin: Player = {
                id: playerData.id,
                username: playerData.username,
                country: playerData.country,
                avatar: playerData.avatar,
                unlockedTrophies: trophies,
                bio: playerData.bio || '',
                hobbies: playerData.hobbies || [],
                hasPerfectScore: playerData.hasPerfectScore || false,
                thought: playerData.thought || '',
                thoughtIcon: playerData.thoughtIcon || '',
            };

            setIsFormExiting(true);
            triggerCloudTransition(() => onLogin(playerToLogin));

        } catch (err) {
            console.error("Error logging in:", err);
            setError(t('generic_error'));
        } finally {
            setIsChecking(false);
        }
    };
    
    const handleStartWithNewProfile = () => {
        setIsFormExiting(true);
        triggerCloudTransition(() => {
            if (playerForLogin) {
                onLogin(playerForLogin);
            }
        });
    };

    const getCheckingText = () => {
        switch(language) {
            case 'en': return 'Checking...';
            case 'es': return 'Verificando...';
            case 'dr': return 'كنتحقق...';
            case 'fr':
            default: return 'Vérification...';
        }
    };

    const UserPlusIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9" />
        </svg>
    );
    
    const handleStartAdventure = (mode: 'solo' | 'duel') => {
        if (mode === 'duel') {
            setShowComingSoon(true);
            setTimeout(() => setShowComingSoon(false), 2000);
            return;
        }

        if (!currentPlayer) {
            setStep('form');
        } else {
             triggerCloudTransition(() => {
                onLogin(currentPlayer);
             });
        }
    };

    const handleBackToIntro = () => {
        setStep('intro');
        setGeneratedPin(null);
        setPlayerForLogin(null);
        setError('');
        setPinInput('');
    };

    const musicButton = (
        <button
            onClick={onToggleMute}
            className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors p-2 rounded-full hover:bg-slate-700/50 z-10"
            aria-label="Toggle music"
        >
            {isMuted ? <SoundOffIcon className="w-6 h-6" /> : <SoundOnIcon className="w-6 h-6" />}
        </button>
    );

    if (step === 'intro') {
        return (
            <div className="relative flex flex-col items-center justify-center h-full p-4 animate-fade-in">
                {musicButton}
                {currentPlayer && (
                    <button onClick={onShowProfile} className="absolute top-4 left-4 flex items-center gap-2 text-slate-300 bg-slate-800/50 hover:bg-slate-700/80 transition-colors p-2 rounded-full z-10" title={t('profile_button')}>
                        <UserIcon className="w-6 h-6" />
                    </button>
                )}
                <div className="text-center mb-6">
                    <div className="trophy-animation-wrapper title-sparkles relative inline-block opacity-0 animate-fade-in-down" style={{ animationDelay: '0.5s' }}>
                        <div className="animate-trophy-glow">
                            <div className="animate-trophy-pulse">
                                <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-yellow-300 to-amber-500 font-serif" dir={language === 'dr' ? 'rtl' : 'ltr'}>
                                    {language === 'dr' ? 'فنيدة' : 'FANIDA'}
                                </h1>
                            </div>
                        </div>
                    </div>
                    <p className="text-slate-300 mt-2 text-lg opacity-0 animate-fade-in-down" style={{animationDelay: '1s'}}>{t('quiz_world_subtitle')}</p>
                </div>

                {currentPlayer && (
                    <div className="mb-4 text-center opacity-0 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
                        <p className="text-xl text-slate-200">{t('welcome_back', { username: currentPlayer.username })}</p>
                    </div>
                )}

                <div className="mb-6 opacity-0 animate-fade-in-up" style={{animationDelay: '1.5s'}}>
                    <p className="text-center text-base mb-2">{t('select_language')}</p>
                    <div className="flex justify-center flex-wrap gap-1 sm:gap-2 bg-slate-800/50 p-2 rounded-xl border border-slate-700">
                        {Object.entries({ fr: 'Français', en: 'English', es: 'Español', dr: 'الدارجة' }).map(([lang, name]) => (
                            <button key={lang} onClick={() => setLanguage(lang)} className={`px-2 py-1 sm:px-3 sm:py-2 rounded-lg font-semibold transition-colors text-xs sm:text-sm ${language === lang ? 'bg-indigo-500 text-white shadow-lg' : 'bg-transparent text-slate-300 hover:bg-slate-700/50'}`}>
                                {name}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="w-full max-w-sm opacity-0 animate-fade-in-up" style={{animationDelay: '2s'}}>
                    <p className="text-center text-lg mb-3 font-semibold">{t('choose_your_mode')}</p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button onClick={() => handleStartAdventure('solo')} className="flex-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold py-3 px-8 rounded-lg hover:opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/30 text-lg">
                            {t('mode_solo')}
                        </button>
                        <button onClick={() => handleStartAdventure('duel')} className="flex-1 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold py-3 px-8 rounded-lg hover:opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/30 text-lg">
                            {t('mode_duel')}
                        </button>
                    </div>
                    {!currentPlayer && (
                         <button onClick={() => setStep('form')} className="w-full mt-4 text-slate-300 underline hover:text-white transition-colors">
                            {t('create_profile')}
                        </button>
                    )}
                </div>
                 {showComingSoon && (
                    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-6 py-3 rounded-lg shadow-2xl animate-fade-in-up z-50 border border-slate-700">
                        <p className="font-semibold">{t('coming_soon')}</p>
                    </div>
                )}
            </div>
        );
    }
    
    const isBase64Image = avatar.startsWith('data:image/');

    const sortedCountries = Object.entries(COUNTRIES_DATA)
    .map(([key, names]) => ({ key, name: names[language] || names.fr }))
    .sort((a, b) => a.name.localeCompare(b.name, language === 'dr' ? 'ar' : language));
    
    const registrationForm = (
        <div className="space-y-4">
            <div className="flex flex-col items-center">
                <label className="block text-sm font-medium text-slate-300 mb-2">{t('choose_avatar')}</label>
                <input type="file" ref={fileInputRef} onChange={handleAvatarChange} className="hidden" accept="image/png, image/jpeg, image/webp" />
                <button type="button" onClick={handleAvatarClick} className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-slate-900/80 flex items-center justify-center border-2 border-dashed border-slate-600 hover:border-indigo-500 transition-all duration-300 overflow-hidden" aria-label={t('choose_avatar')}>
                    {isBase64Image ? <img src={avatar} alt="Avatar Preview" className="w-full h-full object-cover" /> : AVATARS.includes(avatar) ? <span className="text-6xl">{avatar}</span> : <UserPlusIcon />}
                </button>
            </div>
            <div>
                <label htmlFor="username" className="block text-sm font-medium text-slate-300 mb-1">{t('username_label')}</label>
                <input id="username" type="text" value={username} onChange={(e) => { setUsername(e.target.value); setError(''); }} className="w-full bg-slate-900/80 border border-slate-600 rounded-lg px-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300" placeholder={t('username_placeholder')} disabled={!!generatedPin} />
            </div>
            <div className="space-y-2 pt-2">
                <p className="text-sm font-medium text-slate-300 text-center">{t('trophies_unlocked')}</p>
                <div className="grid grid-cols-5 gap-2 sm:gap-3 bg-slate-900/50 p-3 rounded-xl border border-slate-700">
                    {LEVELS_CONFIG.map((levelConfig) => (
                        <button
                            type="button"
                            key={levelConfig.level}
                            onClick={() => setSelectedTrophy(levelConfig)}
                            className="flex flex-col items-center p-1 focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded-lg"
                            aria-label={`${levelConfig.trophy.name[language] || levelConfig.trophy.name['fr']}`}
                        >
                            {React.cloneElement(levelConfig.trophy.icon, { className: "w-10 h-10 sm:w-12 sm:h-12" })}
                        </button>
                    ))}
                </div>
            </div>
            <div>
                <label htmlFor="country" className="block text-sm font-medium text-slate-300 mb-1">{t('country_label')}</label>
                <select id="country" value={countryKey} onChange={(e) => setCountryKey(e.target.value)} className="w-full bg-slate-900/80 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 appearance-none bg-no-repeat" style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%239ca3af' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")` }} disabled={!!generatedPin}>
                    {sortedCountries.map(({ key, name }) => (<option key={key} value={key} className="bg-slate-800">{name}</option>))}
                </select>
            </div>
            
            {generatedPin && (
                <div className="animate-fade-in-up space-y-3">
                    <label className="block text-sm font-medium text-slate-300 -mb-2">{t('your_pin_is')}</label>
                     <div className="bg-slate-900/80 rounded-lg p-3 border border-slate-600">
                        <p className="text-4xl font-mono font-bold tracking-[0.5em] text-white text-center">{generatedPin}</p>
                    </div>
                    <p className="text-center text-amber-300 text-sm p-2 bg-amber-500/10 rounded-md border border-amber-500/20">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block mr-1" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg>
                        {t('pin_generated_prompt')}
                    </p>
                </div>
            )}
            
            {error && <p className="text-red-400 text-sm text-center">{error}</p>}
            
            {!generatedPin ? (
                <button type="button" onClick={handleCreateProfile} disabled={isChecking || isFormExiting} className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/30 flex justify-center items-center disabled:opacity-75 disabled:cursor-not-allowed">
                    {isChecking && <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>}
                    {isChecking ? t('checking_username') : t('generate_pin_button')}
                </button>
            ) : (
                <button type="button" onClick={handleStartWithNewProfile} disabled={isFormExiting} className="w-full bg-gradient-to-r from-green-500 to-teal-500 text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-teal-500/30 flex justify-center items-center disabled:opacity-75 disabled:cursor-not-allowed animate-fade-in-up">
                   {t('mode_solo')}
                </button>
            )}
        </div>
    );

    const loginForm = (
        <form onSubmit={handleLoginWithPin} className="space-y-4">
            <div>
                <label htmlFor="login-username" className="block text-sm font-medium text-slate-300 mb-1">{t('username_label')}</label>
                <input id="login-username" type="text" value={username} onChange={(e) => { setUsername(e.target.value); setError(''); }} className="w-full bg-slate-900/80 border border-slate-600 rounded-lg px-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" placeholder={t('username_placeholder')} />
            </div>
            <div>
                <label htmlFor="pin" className="block text-sm font-medium text-slate-300 mb-1">{t('pin_code_label')}</label>
                <input id="pin" type="tel" inputMode="numeric" maxLength={4} value={pinInput} onChange={(e) => setPinInput(e.target.value.replace(/\D/g, ''))} className="w-full bg-slate-900/80 border border-slate-600 rounded-lg px-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-center text-2xl tracking-[0.5em]" placeholder="◦◦◦◦" />
            </div>
            {error && <p className="text-red-400 text-sm text-center">{error}</p>}
            <button type="submit" disabled={isChecking || isFormExiting} className="w-full bg-gradient-to-r from-green-500 to-teal-500 text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-teal-500/30 flex justify-center items-center disabled:opacity-75 disabled:cursor-not-allowed">
                 {isChecking && <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>}
                {isChecking ? getCheckingText() : t('login_button')}
            </button>
        </form>
    );

    return (
        <>
            <TrophyDetailModal trophy={selectedTrophy} onClose={() => setSelectedTrophy(null)} language={language} />
            <div className={`relative flex flex-col items-center justify-center h-full p-4 py-8 overflow-y-auto ${isFormExiting ? 'animate-fade-out' : ''}`}>
                {musicButton}
                {showFullscreenPrompt && (
                     <div className="mb-4 z-10 animate-fade-in-down">
                        <button
                            onClick={requestFullScreen}
                            className="bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-indigo-700 transition-transform hover:scale-105"
                        >
                            Passez en plein écran
                        </button>
                    </div>
                )}
                <div className="relative w-full bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-2xl shadow-indigo-500/20 p-6 sm:p-8 border border-slate-700">
                    <button onClick={handleBackToIntro} className="absolute top-4 left-4 text-slate-400 hover:text-white transition-colors p-2 rounded-full hover:bg-slate-700/50" aria-label={t('back_button_label')}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" /></svg>
                    </button>
                    <h2 className="text-2xl font-bold text-center mb-6">{authMode === 'register' ? t('create_profile_title') : t('login_with_pin')}</h2>
                    
                    {authMode === 'register' ? registrationForm : loginForm}
                    
                    <div className="text-center mt-4">
                        <button onClick={() => { setAuthMode(authMode === 'register' ? 'login' : 'register'); setError(''); setGeneratedPin(null); }} className="text-sm text-slate-400 hover:text-indigo-300 transition-colors">
                           {authMode === 'register' ? `${t('have_pin_prompt')} ${t('login_with_pin')}` : `${t('no_pin_prompt')} ${t('create_profile')}`}
                        </button>
                    </div>

                </div>
            </div>
        </>
    );
};

export default LoginScreen;
