
import React, { useState, useEffect, useContext, useRef } from 'react';
import { Player, LevelConfig } from '../types';
import { LanguageContext } from '../context/LanguageContext';
import { AVATARS, LEVELS_CONFIG, NtaaCaftan } from '../constants.tsx';
import { COUNTRIES_DATA } from '../data/countries';
import { db, firebase } from '../services/firebase';
import { UserIcon } from './Icons';

interface LoginScreenProps {
    onLogin: (player: Player) => void;
    requestFullScreen: () => void;
    onAvatarChangeStart: () => void;
    showFullscreenPrompt: boolean;
    onShowProfile: () => void;
    currentPlayer: Player | null;
    onStartGame?: () => void;
}

const TrophyDisplayModal: React.FC<{
    trophyConfig: LevelConfig | null;
    onClose: () => void;
    language: string;
    t: (key: string) => string;
}> = ({ trophyConfig, onClose, language, t }) => {
    const narrationAudioRef = useRef<HTMLAudioElement | null>(null);

    const cleanupAudio = () => {
        if (narrationAudioRef.current) {
            narrationAudioRef.current.pause();
            narrationAudioRef.current = null;
        }
    };
    
    useEffect(() => {
        if (trophyConfig?.trophy?.audioUrl) {
            cleanupAudio(); 

            const audio = new Audio(trophyConfig.trophy.audioUrl);
            narrationAudioRef.current = audio;
            audio.volume = 1;
            audio.play().catch(e => console.error("Audio playback failed:", e));
        }

        return () => {
            cleanupAudio();
        };
    }, [trophyConfig]);


    if (!trophyConfig) return null;

    const isCaftan = trophyConfig.trophy.name.fr === 'Caftan Ntaa';

    const trophySizeClass = isCaftan 
        ? "w-[85vmin] h-[85vmin] max-w-xl max-h-xl sm:w-[60vw] sm:h-[60vw]"
        : "w-64 h-64 sm:w-80 sm:h-80";
    
    const caftanPositionClass = isCaftan ? 'transform -translate-y-8' : '';
    const titlePositionClass = isCaftan ? 'mt-[-8rem] sm:mt-[-12rem]' : 'mt-4';
    const modalContainerClass = isCaftan ? 'majestic-caftan-sparkles' : '';
    
    const imageClasses = [trophySizeClass, 'object-contain', 'mx-auto', 'relative', 'z-10'];
    if (isCaftan) {
        imageClasses.push('animate-slow-trophy-reveal');
    } else {
        imageClasses.push('animate-modal-trophy-glow', 'modal-trophy-sparkles');
    }

    const handleClose = () => {
        cleanupAudio();
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in p-4" onClick={handleClose}>
             <div 
                className={`relative w-auto h-auto text-center flex flex-col items-center ${isCaftan ? 'animate-fade-in' : 'animate-trophy-reveal'} ${caftanPositionClass} ${modalContainerClass}`}
                onClick={(e) => e.stopPropagation()}
            >
                {isCaftan && <i></i>}
                <button onClick={handleClose} className="absolute top-[-15px] right-[-15px] text-white bg-slate-900/60 rounded-full p-2 z-20 hover:bg-slate-800/80 transition-colors" aria-label={t('close_button_label')}>
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                
                <div className="relative">
                    {React.cloneElement(trophyConfig.trophy.icon, { 
                        className: imageClasses.join(' ')
                    })}
                </div>

                <div className={`z-10 ${titlePositionClass} animate-trophy-title-pulse`}>
                    <h3 className="text-3xl sm:text-4xl font-bold animated-glass-text">
                        {trophyConfig.trophy.name[language] || trophyConfig.trophy.name.fr}
                    </h3>
                    {trophyConfig.trophy.name.dr && (
                         <p className="text-2xl sm:text-3xl font-serif mt-1 animated-glass-text" dir="rtl">
                           {trophyConfig.trophy.name.dr}
                         </p>
                    )}
                </div>
            </div>
        </div>
    );
};

const PinModal: React.FC<{ pin: string, onClose: () => void }> = ({ pin, onClose }) => {
    const { t } = useContext(LanguageContext);
    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in p-4">
            <div className="w-full max-w-sm bg-slate-800 rounded-2xl p-8 text-center shadow-lg border border-slate-700 animate-fade-in-up">
                <h3 className="text-xl font-bold text-amber-300 mb-2">{t('pin_modal_title')}</h3>
                <p className="text-slate-300 mb-6">{t('pin_modal_subtitle')}</p>
                <div className="bg-slate-900 border-2 border-slate-600 rounded-lg p-4 mb-6">
                    <p className="text-4xl font-mono font-bold tracking-widest text-white">{pin}</p>
                </div>
                <button onClick={onClose} className="w-full bg-indigo-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-600 transition-colors">
                    {t('pin_modal_cta')}
                </button>
            </div>
        </div>
    );
};


const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin, requestFullScreen, onAvatarChangeStart, showFullscreenPrompt, onShowProfile, currentPlayer, onStartGame }) => {
    const [step, setStep] = useState('intro'); // 'intro', 'select_auth', 'create', 'login'
    const [username, setUsername] = useState('');
    const [pin, setPin] = useState('');
    const [countryKey, setCountryKey] = useState('morocco');
    const [avatar, setAvatar] = useState(AVATARS[0]);
    const [error, setError] = useState('');
    const [isCheckingUsername, setIsCheckingUsername] = useState(false);
    const { language, setLanguage, t } = useContext(LanguageContext);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [viewingTrophy, setViewingTrophy] = useState<LevelConfig | null>(null);
    const [generatedPin, setGeneratedPin] = useState<string | null>(null);

    useEffect(() => {
        // This effect synchronizes the component's view with the player's login status.
        // When the currentPlayer prop changes (on login or logout), we reset the view to the intro screen.
        setStep('intro');

        if (!currentPlayer) {
            // If the player has logged out, we also clear the form fields.
            setUsername('');
            setPin('');
            setError('');
            setAvatar(AVATARS[0]);
        }
    }, [currentPlayer]);

    const caftanConfig: LevelConfig = {
        level: 11,
        name: { fr: 'Caftan Ntaa', en: 'Ntaa Caftan', es: 'Caftán Ntaa', dr: 'قفطان نطع' },
        trophy: {
          name: { fr: 'Caftan Ntaa', en: 'Ntaa Caftan', es: 'Caftán Ntaa', dr: 'قفطان نطع' },
          icon: <NtaaCaftan />,
          audioUrl: "https://radiofanida.com/wp/wp-content/uploads/2025/09/CaftanNtaaTrophee.mp3",
        },
    };

    const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];

            const reader = new FileReader();
            reader.onload = (event) => {
                if (!event.target?.result) return;
                const img = new Image();
                img.src = event.target.result as string;
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    const MAX_WIDTH = 256;
                    const MAX_HEIGHT = 256;
                    let width = img.width;
                    let height = img.height;

                    if (width > height) {
                        if (width > MAX_WIDTH) {
                            height *= MAX_WIDTH / width;
                            width = MAX_WIDTH;
                        }
                    } else {
                        if (height > MAX_HEIGHT) {
                            width *= MAX_HEIGHT / height;
                            height = MAX_HEIGHT;
                        }
                    }

                    canvas.width = width;
                    canvas.height = height;
                    const ctx = canvas.getContext('2d');
                    if (!ctx) return;
                    ctx.drawImage(img, 0, 0, width, height);
                    
                    const dataUrl = canvas.toDataURL('image/jpeg', 0.9);
                    setAvatar(dataUrl);
                };
            };
            reader.readAsDataURL(file);
        }
    };

    const handleAvatarClick = () => {
        onAvatarChangeStart();
        fileInputRef.current?.click();
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

        setIsCheckingUsername(true);
        setError('');

        try {
            const playersRef = db.collection('players');
            const querySnapshot = await playersRef.where("username", "==", trimmedUsername).get();
            if (!querySnapshot.empty) {
                setError(t('username_taken_error'));
                setIsCheckingUsername(false);
                return;
            }

            const newPin = Math.floor(1000 + Math.random() * 9000).toString();
            const countryName = COUNTRIES_DATA[countryKey]?.[language] || COUNTRIES_DATA[countryKey]?.fr || 'Maroc';

            const newPlayer: Omit<Player, 'id'> = {
                username: trimmedUsername,
                pin: newPin,
                country: countryName,
                avatar: avatar,
                unlockedTrophies: [],
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            };

            const docRef = await playersRef.add(newPlayer);
            setGeneratedPin(newPin);
            
        } catch (err) {
            console.error(err);
            setError(t('generic_error'));
        } finally {
            setIsCheckingUsername(false);
        }
    };

    const handleLoginWithPin = async (e: React.FormEvent) => {
        e.preventDefault();
        const trimmedUsername = username.trim();
        if (!trimmedUsername || !pin) {
            setError(t('invalid_credentials_error'));
            return;
        }
        if (!db) {
            setError(t('generic_error'));
            return;
        }

        setError('');
        try {
            const playersRef = db.collection('players');
            const querySnapshot = await playersRef.where("username", "==", trimmedUsername).where("pin", "==", pin).get();

            if (querySnapshot.empty) {
                setError(t('invalid_credentials_error'));
            } else {
                const playerData = querySnapshot.docs[0].data();
                const playerId = querySnapshot.docs[0].id;
                onLogin({ id: playerId, ...playerData } as Player);
            }
        } catch (err) {
            console.error(err);
            setError(t('generic_error'));
        }
    };
    
    const handleClosePinModal = async () => {
        if (!db || !generatedPin) return;
        try {
            const querySnapshot = await db.collection('players')
                .where("username", "==", username)
                .where("pin", "==", generatedPin)
                .get();

            if (!querySnapshot.empty) {
                const doc = querySnapshot.docs[0];
                onLogin({ id: doc.id, ...doc.data() } as Player);
            }
        } catch (error) {
            console.error("Error during auto-login after profile creation:", error);
            setError(t('generic_error'));
        } finally {
            setGeneratedPin(null);
        }
    };

    const handleStartAuthProcess = () => {
        if (window.innerWidth <= 768 && !document.fullscreenElement) {
            requestFullScreen();
        }
        setStep('create');
        setUsername('');
        setPin('');
        setError('');
    };

    const handleStartGameClick = () => {
        if (window.innerWidth <= 768 && !document.fullscreenElement) {
            requestFullScreen();
        }
        if (onStartGame) {
            onStartGame();
        }
    };

    const renderAuthForms = () => (
        <div className="relative flex flex-col items-center justify-center h-full p-4 overflow-y-auto animate-zoom-in">
             <div className="w-full max-w-sm">
                <div className="flex mb-4 border border-slate-600 rounded-lg p-1 bg-slate-900/80">
                    <button onClick={() => setStep('create')} className={`w-1/2 py-2 rounded-md font-semibold transition-colors ${step === 'create' ? 'bg-indigo-500 text-white' : 'text-slate-300'}`}>{t('create_profile')}</button>
                    <button onClick={() => setStep('login')} className={`w-1/2 py-2 rounded-md font-semibold transition-colors ${step === 'login' ? 'bg-indigo-500 text-white' : 'text-slate-300'}`}>{t('login_button')}</button>
                </div>
                 {step === 'create' && (
                     <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-2xl p-6 border-2 border-slate-700">
                         <h2 className="text-2xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">{t('create_profile_title')}</h2>
                         <form onSubmit={handleCreateProfile} className="space-y-3">
                            <div>
                                <label htmlFor="username-create" className="block text-sm font-medium text-slate-300 mb-1">{t('username_label')}</label>
                                <input type="text" id="username-create" value={username} onChange={(e) => setUsername(e.target.value)} placeholder={t('username_placeholder')} className="w-full px-4 py-2 bg-slate-900/80 border-2 border-slate-600 rounded-lg text-white focus:border-indigo-500 outline-none" maxLength={20} />
                            </div>
                            <div>
                                <label htmlFor="country" className="block text-sm font-medium text-slate-300 mb-1">{t('country_label')}</label>
                                <select id="country" value={countryKey} onChange={(e) => setCountryKey(e.target.value)} className="w-full px-4 py-2 bg-slate-900/80 border-2 border-slate-600 rounded-lg text-white focus:border-indigo-500 outline-none">
                                    {Object.entries(COUNTRIES_DATA).map(([key, names]) => (<option key={key} value={key}>{names[language] || names.fr}</option>))}
                                </select>
                            </div>
                             <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">{t('choose_avatar')}</label>
                                <div className="flex flex-wrap justify-center gap-2">
                                    {AVATARS.map((a) => (
                                        <button key={a} type="button" onClick={() => setAvatar(a)} className={`w-12 h-12 text-2xl rounded-full flex items-center justify-center transition-all ${avatar === a ? 'bg-indigo-500 scale-110 ring-2 ring-white' : 'bg-slate-700 hover:bg-slate-600'}`}>
                                            {a}
                                        </button>
                                    ))}
                                    <button type="button" onClick={handleAvatarClick} className={`relative w-12 h-12 rounded-full flex items-center justify-center transition-all overflow-hidden ${avatar.startsWith('data:image/') ? 'bg-indigo-500 scale-110 ring-2 ring-white' : 'bg-slate-700 hover:bg-slate-600'}`}>
                                        {avatar.startsWith('data:image/') ? <img src={avatar} alt="Custom" className="w-full h-full object-cover" /> : <UserIcon className="w-7 h-7" />}
                                    </button>
                                    <input type="file" ref={fileInputRef} onChange={handleAvatarChange} className="hidden" accept="image/png, image/jpeg" />
                                </div>
                            </div>
                            {error && <p className="text-red-400 text-sm text-center">{error}</p>}
                            <div className="pt-2">
                                <button type="submit" disabled={isCheckingUsername} className="w-full bg-gradient-to-r from-green-500 to-teal-500 text-white font-bold py-3 rounded-lg hover:opacity-90 transition-all disabled:opacity-50">
                                    {isCheckingUsername ? t('checking_username') : t('generate_pin_button')}
                                </button>
                            </div>
                         </form>
                     </div>
                 )}
                 {step === 'login' && (
                    <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-2xl p-6 border-2 border-slate-700">
                         <h2 className="text-2xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">{t('login_button')}</h2>
                         <form onSubmit={handleLoginWithPin} className="space-y-4">
                             <div>
                                <label htmlFor="username-login" className="block text-sm font-medium text-slate-300 mb-1">{t('username_label')}</label>
                                <input type="text" id="username-login" value={username} onChange={(e) => setUsername(e.target.value)} placeholder={t('username_placeholder')} className="w-full px-4 py-2 bg-slate-900/80 border-2 border-slate-600 rounded-lg text-white focus:border-indigo-500 outline-none" maxLength={20} />
                            </div>
                             <div>
                                <label htmlFor="pin" className="block text-sm font-medium text-slate-300 mb-1">{t('pin_code_label')}</label>
                                <input type="password" id="pin" inputMode="numeric" pattern="[0-9]*" value={pin} onChange={(e) => setPin(e.target.value)} className="w-full px-4 py-2 bg-slate-900/80 border-2 border-slate-600 rounded-lg text-white focus:border-indigo-500 outline-none" maxLength={4} />
                            </div>
                            {error && <p className="text-red-400 text-sm text-center">{error}</p>}
                             <div className="pt-2">
                                <button type="submit" className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold py-3 rounded-lg hover:opacity-90 transition-all">
                                    {t('login_button')}
                                </button>
                            </div>
                         </form>
                     </div>
                 )}
                <button onClick={() => { setStep('intro'); setError(''); }} className="mt-6 text-slate-400 hover:text-white transition-colors">{t('back_button_label')}</button>
            </div>
        </div>
    );
    

    if (step === 'intro') {
        return (
            <>
                {generatedPin && <PinModal pin={generatedPin} onClose={handleClosePinModal} />}
                <TrophyDisplayModal trophyConfig={viewingTrophy} onClose={() => setViewingTrophy(null)} language={language} t={t} />
                <div className="relative flex flex-col items-center justify-center h-full p-4 animate-fade-in">
                    <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
                        {currentPlayer && (
                            <button onClick={onShowProfile} className="flex items-center justify-center text-slate-300 bg-slate-800/50 hover:bg-slate-700/80 transition-colors w-10 h-10 rounded-full overflow-hidden" title={t('profile_button')}>
                                {currentPlayer.avatar && currentPlayer.avatar.startsWith('data:image/') ? (
                                    <img src={currentPlayer.avatar} alt="Profile" className="w-full h-full rounded-full object-cover" />
                                ) : (
                                    <span className="text-2xl">{currentPlayer.avatar || '👤'}</span>
                                )}
                            </button>
                        )}
                    </div>

                    <div className="text-center mb-2 md:mb-6">
                        <div className="trophy-animation-wrapper title-sparkles relative inline-block opacity-0 animate-fade-in-down" style={{ animationDelay: '0.5s' }}>
                            <div className="animate-trophy-glow">
                                <div className="animate-trophy-pulse">
                                    <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-yellow-300 to-amber-500 font-serif" dir={language === 'dr' ? 'rtl' : 'ltr'}>
                                        {language === 'dr' ? 'فنيدة' : 'FANIDA'}
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <p className="text-slate-300 mt-2 text-lg opacity-0 animate-fade-in-down" style={{animationDelay: '1s'}}>{t('quiz_world_subtitle')}</p>
                    </div>
                    
                    <div className="mb-4 md:mb-6 opacity-0 animate-fade-in-up" style={{animationDelay: '1.5s'}}>
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
                        {currentPlayer ? (
                             <button onClick={handleStartGameClick} className="w-full bg-gradient-to-r from-green-500 to-teal-500 text-white font-bold py-3 px-8 rounded-lg hover:opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-green-500/30 text-lg">
                                 {t('start_game_button')}
                             </button>
                        ) : (
                             <button onClick={handleStartAuthProcess} className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold py-3 px-8 rounded-lg hover:opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/30 text-lg">
                                 {t('create_or_login')}
                             </button>
                        )}
                    </div>
                    
                    <div className="w-full max-w-2xl mt-4 md:mt-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '2.5s' }}>
                        <p className="text-center text-slate-300 mb-4">{t('trophies_unlocked')}</p>
                        <div className="flex flex-col items-center gap-4 sm:gap-6">
                            <button 
                                onClick={() => setViewingTrophy(caftanConfig)} 
                                className="transition-transform hover:scale-110"
                                title={caftanConfig.trophy.name[language]}
                            >
                                <NtaaCaftan className="w-20 h-20 sm:w-24 sm:h-24 animate-trophy-glow" />
                            </button>
                            
                            <div className="grid grid-cols-5 gap-3 sm:gap-5">
                                {LEVELS_CONFIG.map(levelConfig => (
                                    <button 
                                        key={levelConfig.level}
                                        onClick={() => setViewingTrophy(levelConfig)}
                                        className="flex flex-col items-center text-center group transition-transform hover:scale-110"
                                        title={levelConfig.trophy.name[language]}
                                    >
                                        {React.cloneElement(levelConfig.trophy.icon, { className: "w-12 h-12 sm:w-16 sm:h-16 drop-shadow-lg" })}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            {generatedPin && <PinModal pin={generatedPin} onClose={handleClosePinModal} />}
            {renderAuthForms()}
        </>
    );
};

export default LoginScreen;
