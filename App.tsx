import React, { useState, useCallback, useContext, useEffect, useRef } from 'react';
import { GameState, Player, QuizResult } from './types';
import LoginScreen from './components/LoginScreen';
import QuizScreen from './components/QuizScreen';
import Certificate from './components/Certificate';
import Leaderboard from './components/Leaderboard';
import PerfectScoreRewardScreen from './components/PerfectScoreRewardScreen';
import ProfileScreen from './components/ProfileScreen';
import { LanguageProvider, LanguageContext } from './context/LanguageContext';
import { db } from './services/firebase';
import { TOTAL_QUESTIONS } from './constants';
import { ExitFullscreenIcon, EnterFullscreenIcon } from './components/Icons';
import CloudTransition from './components/CloudTransition';

declare const firebase: any;

const BackgroundShapes: React.FC = () => (
    <div className="background-shapes" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
);

const App: React.FC = () => {
    const [gameState, setGameState] = useState<GameState>(GameState.Login);
    const [player, setPlayer] = useState<Player | null>(null);
    const [quizResult, setQuizResult] = useState<QuizResult | null>(null);
    const [gameId, setGameId] = useState<number>(0);
    const [isLeaderboardVisible, setIsLeaderboardVisible] = useState(false);
    const { t } = useContext(LanguageContext);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const musicStartedRef = useRef(false);
    const [isMuted, setIsMuted] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(!!document.fullscreenElement);
    const [showFullscreenPrompt, setShowFullscreenPrompt] = useState(false);
    const isChangingAvatar = useRef(false);
    const initialVolume = 0.4;
    const [showCloudTransition, setShowCloudTransition] = useState(false);

    const triggerCloudTransition = useCallback((callback: () => void) => {
        setShowCloudTransition(true);
        setTimeout(() => {
            callback();
            setTimeout(() => {
                setShowCloudTransition(false);
            }, 800); 
        }, 750);
    }, []);

    const fadeInMusic = useCallback(() => {
        const audio = audioRef.current;
        if (!audio) return;

        audio.volume = 0;
        audio.muted = false; // Always unmute when fading in.
        audio.play().catch(e => console.error("Audio playback failed on interaction:", e));
        
        const fadeDuration = 1500;
        const fadeInterval = 50;
        const volumeStep = initialVolume / (fadeDuration / fadeInterval);

        const fade = setInterval(() => {
            if (audio.volume < initialVolume - volumeStep) {
                audio.volume += volumeStep;
            } else {
                audio.volume = initialVolume;
                clearInterval(fade);
            }
        }, fadeInterval);
    }, []); 

    const startMusic = useCallback(() => {
        if (!musicStartedRef.current) {
            musicStartedRef.current = true;
            if (!isMuted) {
                fadeInMusic();
            }
        }
    }, [isMuted, fadeInMusic]);


    const toggleMute = useCallback(() => {
        setIsMuted(prevMuted => {
            const newMuted = !prevMuted;
            const audio = audioRef.current;
            if (audio) {
                audio.muted = newMuted;
                if (!newMuted && musicStartedRef.current && audio.paused) {
                    fadeInMusic();
                }
            }
            return newMuted;
        });
    }, [fadeInMusic]);


    useEffect(() => {
        const audio = new Audio('https://radiofanida.com/wp/wp-content/uploads/2025/09/MusicQuiz.mp3');
        audio.loop = true;
        audioRef.current = audio;
        
        const playerId = localStorage.getItem('fanidaPlayerId');
        if (playerId && db) {
            db.collection('players').doc(playerId).get().then((doc: any) => {
                if (doc.exists) {
                    const playerData = { id: doc.id, ...doc.data() };
                     const loggedInPlayer: Player = {
                        id: playerData.id,
                        username: playerData.username,
                        country: playerData.country,
                        avatar: playerData.avatar,
                        unlockedTrophies: playerData.unlockedTrophies || [],
                        bio: playerData.bio || '',
                        hobbies: playerData.hobbies || [],
                        hasPerfectScore: playerData.hasPerfectScore || false,
                        thought: playerData.thought || '',
                        thoughtIcon: playerData.thoughtIcon || '',
                    };
                    setPlayer(loggedInPlayer);
                }
            }).catch((error: any) => {
                console.error("Error fetching player data on load:", error);
            });
        }

        return () => {
             if (audioRef.current) {
                audioRef.current.pause();
             }
        };
    }, []);

    const fadeOutMusic = useCallback(() => {
        const audio = audioRef.current;
        if (!audio || audio.paused || audio.volume === 0) return;

        const fadeDuration = 1500;
        const fadeInterval = 50;
        const currentVolume = audio.volume;
        const volumeStep = currentVolume / (fadeDuration / fadeInterval);

        const fade = setInterval(() => {
            if (audio.volume > volumeStep) {
                audio.volume -= volumeStep;
            } else {
                clearInterval(fade);
                audio.pause();
                audio.volume = initialVolume; 
            }
        }, fadeInterval);
    }, []);

    const requestFullScreen = useCallback(() => {
        setShowFullscreenPrompt(false);
        const element = document.documentElement as any;
        const requestMethod = element.requestFullscreen || element.webkitRequestFullscreen || element.mozRequestFullScreen || element.msRequestFullscreen;
        if (requestMethod) {
            requestMethod.call(element).catch((err: any) => {
                 console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
            });
        }
    }, []);

    const exitFullScreen = () => {
        if (document.exitFullscreen) {
            document.exitFullscreen().catch(err => console.error(err));
        } else if ((document as any).webkitExitFullscreen) { 
            (document as any).webkitExitFullscreen();
        } else if ((document as any).msExitFullscreen) { 
            (document as any).msExitFullscreen();
        }
    };

    const handleAvatarChangeStart = () => {
        isChangingAvatar.current = true;
    };

    useEffect(() => {
        const handleFullscreenChange = () => {
            const isCurrentlyFullscreen = !!document.fullscreenElement;
            setIsFullscreen(isCurrentlyFullscreen);

            if (!isCurrentlyFullscreen && isChangingAvatar.current) {
                setShowFullscreenPrompt(true);
                isChangingAvatar.current = false;
            } else if (isCurrentlyFullscreen) {
                setShowFullscreenPrompt(false);
            }
        };

        document.addEventListener('fullscreenchange', handleFullscreenChange);
        document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
        document.addEventListener('mozfullscreenchange', handleFullscreenChange);
        document.addEventListener('MSFullscreenChange', handleFullscreenChange);

        return () => {
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
            document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
            document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
            document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
        };
    }, []);


    const handleLogin = useCallback((loggedInPlayer: Player) => {
        if (musicStartedRef.current) {
            fadeOutMusic();
        }
        setPlayer(loggedInPlayer);
        setGameId(0);
        setGameState(GameState.Playing);
    }, [fadeOutMusic]);
    
    const handleShowProfile = useCallback(() => {
        setGameState(GameState.Profile);
    }, []);

    const handleSaveProfile = async (updatedProfile: Partial<Player>) => {
        if (!player || !player.id || !db) return;

        const playerRef = db.collection('players').doc(player.id);
        try {
            await playerRef.update(updatedProfile);
            setPlayer(prev => prev ? { ...prev, ...updatedProfile } : null);
        } catch (error) {
            console.error("Failed to save profile:", error);
        }
    };


    const handleQuizComplete = useCallback((result: QuizResult) => {
        // --- STEP 1: Update UI state immediately for a responsive feel ---
        setQuizResult(result);
        if (result.score === TOTAL_QUESTIONS) {
            setGameState(GameState.PerfectScoreReward);
        } else {
            setGameState(GameState.PreCertificate);
        }

        // --- STEP 2: Handle fast local storage updates ---
        if (player?.username && result.earnedTrophies && result.earnedTrophies.length > 0) {
            const username = player.username.trim();
            const trophyKey = `fanidaTrophies_${username}`;
            const existingTrophiesRaw = localStorage.getItem(trophyKey);
            let existingTrophies: number[] = [];
            try {
                const parsed = JSON.parse(existingTrophiesRaw || '[]');
                if(Array.isArray(parsed)) existingTrophies = parsed;
            } catch(e) { /* ignore */ }
            const updatedTrophies = [...new Set([...existingTrophies, ...result.earnedTrophies])];
            localStorage.setItem(trophyKey, JSON.stringify(updatedTrophies));
        }

        // --- STEP 3: Perform slow database operations in the background ---
        const updateFirestoreData = async () => {
            if (player?.id && player?.username && db) {
                try {
                    const username = player.username.trim();
                    const leaderboardRef = db.collection('leaderboard_levels');
                    const q = leaderboardRef.where("name", "==", username);
                    const querySnapshot = await q.get();
        
                    let bestExistingDoc: { id: string, ref: any, data: any } | null = null;
        
                    if (!querySnapshot.empty) {
                        querySnapshot.docs.forEach((doc: any) => {
                            const data = doc.data();
                            if (!bestExistingDoc) {
                                bestExistingDoc = { id: doc.id, ref: doc.ref, data: data };
                            } else {
                                if (data.score > bestExistingDoc.data.score) {
                                    bestExistingDoc = { id: doc.id, ref: doc.ref, data: data };
                                } else if (data.score === bestExistingDoc.data.score && data.time < bestExistingDoc.data.time) {
                                    bestExistingDoc = { id: doc.id, ref: doc.ref, data: data };
                                }
                            }
                        });
                    }
        
                    const finalEntry = {
                        score: result.score,
                        time: result.time,
                        reactions: bestExistingDoc ? bestExistingDoc.data.reactions : { flowers: 0, hearts: 0, claps: 0 }
                    };
        
                    if (bestExistingDoc) {
                        const existing = bestExistingDoc.data;
                        if (existing.score > result.score) {
                            finalEntry.score = existing.score;
                            finalEntry.time = existing.time;
                        } else if (existing.score === result.score && existing.time < result.time) {
                            finalEntry.time = existing.time;
                        }
                    }
                    
                    const batch = db.batch();
        
                    querySnapshot.docs.forEach((doc: any) => {
                        batch.delete(doc.ref);
                    });
        
                    const newEntryRef = leaderboardRef.doc();
                    batch.set(newEntryRef, {
                        playerId: player.id,
                        name: username,
                        score: finalEntry.score,
                        country: player.country,
                        time: finalEntry.time,
                        avatar: player.avatar,
                        lastUpdated: firebase.firestore.FieldValue.serverTimestamp(),
                        reactions: finalEntry.reactions || { flowers: 0, hearts: 0, claps: 0 }
                    });

                    // Player data update
                    const playerRef = db.collection('players').doc(player.id);
                    const playerUpdateData: any = {};

                    if (result.earnedTrophies && result.earnedTrophies.length > 0) {
                        playerUpdateData.unlockedTrophies = firebase.firestore.FieldValue.arrayUnion(...result.earnedTrophies);
                    }
                    if (result.score === TOTAL_QUESTIONS) {
                        playerUpdateData.hasPerfectScore = true;
                    }
                    
                    if (Object.keys(playerUpdateData).length > 0) {
                        batch.update(playerRef, playerUpdateData);
                    }
        
                    await batch.commit();

                    if(playerUpdateData.hasPerfectScore) {
                        setPlayer(prev => prev ? {...prev, hasPerfectScore: true} : null);
                    }
        
                } catch (error) {
                    console.error("Failed to update Firestore data:", error);
                }
            }
        };

        updateFirestoreData(); // Fire-and-forget the async operation

    }, [player]);

    const handlePlayAgain = useCallback(() => {
        setQuizResult(null);
        setGameState(GameState.Playing);
        setGameId(id => id + 1);
    }, []);

    const handleRestart = useCallback(() => {
        setQuizResult(null);
        // Do not clear player, so they remain logged in
        setGameState(GameState.Login);
    }, []);
    
    const handlePreparationFinished = () => {
        setGameState(GameState.Finished);
    };

    const showLeaderboard = () => setIsLeaderboardVisible(true);
    const hideLeaderboard = () => setIsLeaderboardVisible(false);


    const CertificatePreparationScreen: React.FC<{ onPrepared: () => void }> = ({ onPrepared }) => {
        const { t } = useContext(LanguageContext);
        const [progress, setProgress] = useState(0);

        useEffect(() => {
            const totalDuration = 3000; 
            const intervalTime = 30;
            const increment = 100 / (totalDuration / intervalTime);

            const interval = setInterval(() => {
                setProgress(prev => {
                    const newProgress = prev + increment;
                    if (newProgress >= 100) {
                        clearInterval(interval);
                        setTimeout(onPrepared, 500); 
                        return 100;
                    }
                    return newProgress;
                });
            }, intervalTime);

            return () => clearInterval(interval);
        }, [onPrepared]);

        return (
            <div className="flex flex-col items-center justify-center h-full text-center animate-fade-in p-4">
                <div className="w-full max-w-md bg-slate-800/80 rounded-2xl p-8 text-center shadow-lg border border-slate-700 animate-fade-in-up">
                    <p className="text-lg text-slate-300 mb-6">{t('certificate_preparing_message')}</p>
                    <div className="w-full bg-slate-700 rounded-full h-4 border border-slate-600 overflow-hidden">
                        <div
                            className="bg-gradient-to-r from-indigo-500 to-purple-500 h-full rounded-full"
                            style={{ width: `${progress}%`, transition: 'width 0.05s linear' }}
                        ></div>
                    </div>
                </div>
            </div>
        );
    };


    const renderContent = () => {
        switch (gameState) {
            case GameState.Playing:
                return player && <QuizScreen key={gameId} gameId={gameId} player={player} onComplete={handleQuizComplete} onRestart={handleRestart} onShowLeaderboard={showLeaderboard} />;
            case GameState.PreCertificate:
                return <CertificatePreparationScreen onPrepared={handlePreparationFinished} />;
            case GameState.PerfectScoreReward:
                return player && quizResult && <PerfectScoreRewardScreen onShowCertificate={() => setGameState(GameState.PreCertificate)} />;
            case GameState.Finished:
                return player && quizResult && <Certificate player={player} result={quizResult} onRestart={handleRestart} onPlayAgain={handlePlayAgain} onShowLeaderboard={showLeaderboard} />;
            case GameState.Profile:
                return player && <ProfileScreen player={player} onSave={handleSaveProfile} onBack={() => setGameState(GameState.Login)} />;
            case GameState.Login:
            default:
                return <LoginScreen onLogin={handleLogin} requestFullScreen={requestFullScreen} isMuted={isMuted} onToggleMute={toggleMute} startMusic={startMusic} onAvatarChangeStart={handleAvatarChangeStart} showFullscreenPrompt={showFullscreenPrompt} triggerCloudTransition={triggerCloudTransition} onShowProfile={handleShowProfile} currentPlayer={player} />;
        }
    };

    const getContainerClass = () => {
        switch (gameState) {
            case GameState.Login: return "max-w-2xl";
            case GameState.Playing: return "max-w-5xl";
            case GameState.PreCertificate: return "max-w-2xl";
            case GameState.PerfectScoreReward: return "max-w-2xl";
            case GameState.Finished: return "max-w-7xl";
            case GameState.Profile: return "max-w-3xl";
            default: return "max-w-7xl";
        }
    };
    
    return (
        <div id="fanida-quiz-container">
            <div className="relative h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white flex items-center justify-center overflow-hidden">
                <BackgroundShapes />
                {showCloudTransition && <CloudTransition />}
                <button
                    onClick={isFullscreen ? exitFullScreen : requestFullScreen}
                    className={`absolute top-4 ${gameState === GameState.Login ? 'right-16' : 'right-4'} text-slate-400 hover:text-white transition-colors p-2 rounded-full hover:bg-slate-700/50 z-50`}
                    aria-label={isFullscreen ? "Exit full screen" : "Enter full screen"}
                    title={isFullscreen ? "Quitter le plein écran" : "Passer en plein écran"}
                >
                    {isFullscreen ? <ExitFullscreenIcon className="w-6 h-6" /> : <EnterFullscreenIcon className="w-6 h-6" />}
                </button>

                <div className={`relative w-full h-full mx-auto transition-all duration-500 ease-in-out ${getContainerClass()}`}>
                    {renderContent()}
                </div>
                
                 {isLeaderboardVisible && (
                    <div className="absolute inset-0 z-40">
                         <Leaderboard player={player} isVisible={isLeaderboardVisible} onClose={hideLeaderboard} />
                    </div>
                )}
            </div>
        </div>
    );
};


const AppWrapper = () => (
    <LanguageProvider>
        <App />
    </LanguageProvider>
);

export default AppWrapper;
