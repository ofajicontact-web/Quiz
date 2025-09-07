

import React, { useState, useCallback, useContext, useEffect, useRef } from 'react';
import { GameState, Player, QuizResult } from './types';
import LoginScreen from './components/LoginScreen';
import QuizScreen from './components/QuizScreen';
import Certificate from './components/Certificate';
import Leaderboard from './components/Leaderboard';
import PerfectScoreRewardScreen from './components/PerfectScoreRewardScreen';
import ProfileScreen from './components/ProfileScreen';
import { LanguageProvider, LanguageContext } from './context/LanguageContext';
import { db, firebase } from './services/firebase';
import { TOTAL_QUESTIONS } from './constants';
import { ExitFullscreenIcon, EnterFullscreenIcon } from './components/Icons';
import CloudTransition from './components/CloudTransition';

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
    const [isProfileVisible, setIsProfileVisible] = useState(false);
    const [viewedProfile, setViewedProfile] = useState<Player | null>(null);
    const [isOwnProfile, setIsOwnProfile] = useState(false);

    const { t } = useContext(LanguageContext);
    const [isFullscreen, setIsFullscreen] = useState(!!document.fullscreenElement);
    const [showFullscreenPrompt, setShowFullscreenPrompt] = useState(false);
    const isChangingAvatar = useRef(false);
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
    
    const onToggleFullscreen = isFullscreen ? exitFullScreen : requestFullScreen;

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
        setPlayer(loggedInPlayer);
        setGameId(0); 
    }, []);

    const handleLogout = useCallback(() => {
        setIsProfileVisible(false);
        setViewedProfile(null);
        setPlayer(null);
        setGameState(GameState.Login);
    }, []);

    const handleShowOwnProfile = () => {
        if (player) {
            setViewedProfile(player);
            setIsOwnProfile(true);
            setIsProfileVisible(true);
        }
    };

    const handleViewProfileFromLeaderboard = async (playerId: string) => {
        if (!db) return;
        try {
            const playerDoc = await db.collection('players').doc(playerId).get();
            if (playerDoc.exists) {
                setViewedProfile({ id: playerDoc.id, ...playerDoc.data() } as Player);
                setIsOwnProfile(player?.id === playerId);
                setIsLeaderboardVisible(false);
                setIsProfileVisible(true);
            }
        } catch (error) {
            console.error("Error fetching player profile:", error);
        }
    };

    const handleHideProfile = () => setIsProfileVisible(false);

    const handleUpdateAvatar = async (newAvatar: string) => {
        if (player) {
            const updatedPlayer = { ...player, avatar: newAvatar };
            setPlayer(updatedPlayer);
            if(viewedProfile && viewedProfile.id === player.id) {
                setViewedProfile(updatedPlayer);
            }
            if (db) {
                await db.collection('players').doc(player.id).update({ avatar: newAvatar });
            }
        }
    };

    const handleQuizComplete = useCallback(async (result: QuizResult) => {
        setQuizResult(result);
        if (result.score === TOTAL_QUESTIONS) {
            setGameState(GameState.PerfectScoreReward);
        } else {
            setGameState(GameState.PreCertificate);
        }

        if (player?.id && db) {
            const playerRef = db.collection('players').doc(player.id);
            const playerDoc = await playerRef.get();
            if (playerDoc.exists) {
                const playerData = playerDoc.data();
                const existingTrophies = playerData.unlockedTrophies || [];
                const updatedTrophies = [...new Set([...existingTrophies, ...result.earnedTrophies])];
                await playerRef.update({ unlockedTrophies: updatedTrophies });
                setPlayer(p => p ? { ...p, unlockedTrophies: updatedTrophies } : null);
            }

            const leaderboardRef = db.collection('leaderboard_levels');
            const q = leaderboardRef.where("playerId", "==", player.id);

            q.get().then((querySnapshot: any) => {
                let bestExistingDoc: { id: string; ref: any; data: any } | null = null;
                if (!querySnapshot.empty) {
                    bestExistingDoc = { id: querySnapshot.docs[0].id, ref: querySnapshot.docs[0].ref, data: querySnapshot.docs[0].data() };
                }

                const finalEntry = {
                    score: result.score,
                    time: result.time,
                    reactions: bestExistingDoc ? bestExistingDoc.data.reactions : { flowers: 0, hearts: 0, claps: 0 }
                };
                
                let shouldUpdate = true;
                if (bestExistingDoc) {
                    const existing = bestExistingDoc.data;
                    if (existing.score > result.score || (existing.score === result.score && existing.time < result.time)) {
                       shouldUpdate = false;
                    }
                }

                if (shouldUpdate) {
                     const batch = db.batch();
                     if (bestExistingDoc) {
                         batch.delete(bestExistingDoc.ref);
                     }
                     const newEntryRef = leaderboardRef.doc();
                     batch.set(newEntryRef, {
                         playerId: player.id,
                         name: player.username,
                         score: finalEntry.score,
                         country: player.country,
                         time: finalEntry.time,
                         avatar: player.avatar,
                         lastUpdated: firebase.firestore.FieldValue.serverTimestamp(),
                         reactions: finalEntry.reactions || { flowers: 0, hearts: 0, claps: 0 }
                     });
                     return batch.commit();
                }

            }).catch((error: any) => {
                console.error("Failed to update leaderboard:", error);
            });
        }
    }, [player]);

    const handlePlayAgain = useCallback(() => {
        setQuizResult(null);
        setGameState(GameState.Playing);
        setGameId(id => id + 1);
    }, []);
    
    const handleGoHome = useCallback(() => {
        setQuizResult(null);
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
        if (!player) {
            return <LoginScreen onLogin={(p) => triggerCloudTransition(() => handleLogin(p))} requestFullScreen={requestFullScreen} onAvatarChangeStart={handleAvatarChangeStart} showFullscreenPrompt={showFullscreenPrompt} onShowProfile={handleShowOwnProfile} currentPlayer={player} />;
        }
        switch (gameState) {
            case GameState.Playing:
                return <QuizScreen key={gameId} gameId={gameId} player={player} onComplete={handleQuizComplete} onRestart={handleGoHome} onShowLeaderboard={showLeaderboard} isFullscreen={isFullscreen} onToggleFullscreen={onToggleFullscreen} />;
            case GameState.PreCertificate:
                return <CertificatePreparationScreen onPrepared={handlePreparationFinished} />;
            case GameState.PerfectScoreReward:
                return <PerfectScoreRewardScreen onShowCertificate={() => setGameState(GameState.PreCertificate)} />;
            case GameState.Finished:
                return <Certificate player={player} result={quizResult!} onRestart={handleGoHome} onPlayAgain={handlePlayAgain} onShowLeaderboard={showLeaderboard} />;
            case GameState.Login:
            default:
                return <LoginScreen onLogin={(p) => triggerCloudTransition(() => handleLogin(p))} onStartGame={() => setGameState(GameState.Playing)} requestFullScreen={requestFullScreen} onAvatarChangeStart={handleAvatarChangeStart} showFullscreenPrompt={showFullscreenPrompt} onShowProfile={handleShowOwnProfile} currentPlayer={player} />;
        }
    };

    const getContainerClass = () => {
        switch (gameState) {
            case GameState.Login: return "max-w-2xl";
            case GameState.Playing: return "max-w-7xl";
            case GameState.PreCertificate: return "max-w-2xl";
            case GameState.PerfectScoreReward: return "max-w-2xl";
            case GameState.Finished: return "max-w-7xl";
            default: return "max-w-7xl";
        }
    };
    
    return (
        <div id="fanida-quiz-container">
            <div className="relative h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white flex items-center justify-center overflow-hidden">
                <BackgroundShapes />
                {showCloudTransition && <CloudTransition />}
                
                {gameState !== GameState.Playing && (
                     <button
                        onClick={onToggleFullscreen}
                        className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors p-2 rounded-full hover:bg-slate-700/50 z-50"
                        aria-label={isFullscreen ? "Exit full screen" : "Enter full screen"}
                        title={isFullscreen ? "Quitter le plein écran" : "Passer en plein écran"}
                    >
                        {isFullscreen ? <ExitFullscreenIcon className="w-6 h-6" /> : <EnterFullscreenIcon className="w-6 h-6" />}
                    </button>
                )}

                <div className={`relative w-full h-full mx-auto transition-all duration-500 ease-in-out ${getContainerClass()}`}>
                    {renderContent()}
                </div>
                
                {isLeaderboardVisible && (
                    <Leaderboard player={player} isVisible={isLeaderboardVisible} onClose={hideLeaderboard} onViewProfile={handleViewProfileFromLeaderboard} />
                )}
                 {isProfileVisible && viewedProfile && (
                     <ProfileScreen 
                        player={viewedProfile}
                        isOwnProfile={isOwnProfile}
                        onBack={handleHideProfile}
                        onLogout={handleLogout}
                        onUpdateAvatar={handleUpdateAvatar}
                        onAvatarChangeStart={handleAvatarChangeStart}
                    />
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