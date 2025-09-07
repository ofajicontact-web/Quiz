import React, { useState, useEffect, useContext } from 'react';
import { Player, LeaderboardEntry } from '../types';
import { LanguageContext } from '../context/LanguageContext';
// FIX: Imported `firebase` alongside `db` to ensure proper access to Firestore FieldValue, and removed the global declaration.
import { db, firebase } from '../services/firebase';
import { CrownIcon, CloseIcon } from './Icons';

interface LeaderboardProps {
    player: Player | null;
    isVisible: boolean;
    onClose: () => void;
    // FIX: Added missing `onViewProfile` property to align with props passed from `App.tsx`.
    onViewProfile: (playerId: string) => void;
}

const Leaderboard: React.FC<LeaderboardProps> = ({ player, isVisible, onClose, onViewProfile }) => {
    const { t } = useContext(LanguageContext);
    const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
    const [reacted, setReacted] = useState<{ [key: string]: string[] }>({});
    const [shouldRender, setShouldRender] = useState(isVisible);

    useEffect(() => {
        if (isVisible) {
            setShouldRender(true);
        } else {
            const timer = setTimeout(() => setShouldRender(false), 500); // Corresponds to fade-out duration
            return () => clearTimeout(timer);
        }
    }, [isVisible]);

    useEffect(() => {
        try {
            const storedReactions = JSON.parse(localStorage.getItem('fanida_reactions') || '{}');
            setReacted(storedReactions);
        } catch (e) {
            setReacted({});
        }
    }, []);

    useEffect(() => {
        if (!db) {
            console.error("Firestore is not initialized.");
            return;
        }
        
        const leaderboardRef = db.collection('leaderboard_levels');
        const unsubscribe = leaderboardRef
            .orderBy('score', 'desc')
            .limit(50) // Fetch more to sort accurately on the client
            .onSnapshot((snapshot: any) => {
                const docs = snapshot.docs.map((doc: any) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                // Client-side sorting for score tie-breaking
                docs.sort((a: any, b: any) => {
                    if (a.score > b.score) return -1;
                    if (a.score < b.score) return 1;
                    // scores are equal, sort by time (ascending)
                    if (a.time < b.time) return -1;
                    if (a.time > b.time) return 1;
                    return 0;
                });

                const data = docs.slice(0, 10).map((doc: any, index: number) => ({
                    ...doc,
                    rank: index + 1
                }));

                setLeaderboard(data);
            }, (err: Error) => {
                console.error("Error fetching leaderboard: ", err);
            });

        return () => unsubscribe();
    }, []);

    const handleReaction = async (entryId: string, reactionType: 'flowers' | 'hearts' | 'claps') => {
        if (!db || reacted[entryId]?.includes(reactionType)) {
            return;
        }

        const newReacted = { ...reacted, [entryId]: [...(reacted[entryId] || []), reactionType] };
        setReacted(newReacted);
        localStorage.setItem('fanida_reactions', JSON.stringify(newReacted));

        const entryRef = db.collection('leaderboard_levels').doc(entryId);
        try {
            await entryRef.update({
                [`reactions.${reactionType}`]: firebase.firestore.FieldValue.increment(1)
            });
        } catch (error) {
            console.error("Failed to update reaction:", error);
            // Optionally revert local state on error
            const revertedReacted = { ...reacted };
            if (revertedReacted[entryId]) {
                revertedReacted[entryId] = revertedReacted[entryId].filter(r => r !== reactionType);
            }
            setReacted(revertedReacted);
            localStorage.setItem('fanida_reactions', JSON.stringify(revertedReacted));
        }
    };

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    const ReactionButton: React.FC<{ entryId: string, type: 'flowers' | 'hearts' | 'claps', emoji: string, count: number, title: string }> = ({ entryId, type, emoji, count, title }) => {
        const hasReacted = reacted[entryId]?.includes(type);
        return (
            <button
                onClick={(e) => { e.stopPropagation(); handleReaction(entryId, type); }}
                disabled={hasReacted}
                title={title}
                className={`flex items-center gap-1 text-xs px-2 py-1 rounded-full transition-all duration-200 ${
                    hasReacted
                        ? 'bg-indigo-400/50 text-white cursor-default'
                        : 'bg-slate-600/50 hover:bg-indigo-500/50 text-slate-300'
                }`}
            >
                {emoji} <span className="font-mono">{count}</span>
            </button>
        );
    };

    if (!shouldRender) return null;

    return (
        <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm z-40 flex items-center justify-center p-4 ${isVisible ? 'animate-fade-in' : 'animate-fade-out'}`} onClick={onClose}>
            <div className={`w-full max-w-md transition-transform duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} onClick={(e) => e.stopPropagation()}>
                <div className="relative bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-700 max-h-[75vh] flex flex-col p-4 sm:p-6">
                     <button onClick={onClose} className="absolute top-3 right-3 text-slate-400 hover:text-white transition-colors p-1 rounded-full hover:bg-slate-700/50 z-10" aria-label={t('close_button_label')}>
                        <CloseIcon />
                    </button>
                    <h3 className="text-xl md:text-2xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-500">{t('leaderboard_title')}</h3>
                    <ul className="space-y-3 overflow-y-auto flex-grow pr-2">
                        {leaderboard.map((entry, index) => {
                            const isPlayer = player && entry.playerId === player.id;
                            const isBase64Image = entry.avatar && entry.avatar.startsWith('data:image/');

                            return (
                                <li
                                    key={entry.id}
                                    className={`p-2 rounded-lg transition-all duration-500 space-y-2 opacity-0 animate-fade-in-up ${
                                        isPlayer ? 'bg-indigo-500/30 border-2 border-indigo-400 scale-105' : 'bg-slate-700/50'
                                    }`}
                                    style={{ animationDelay: `${index * 100}ms` }}
                                    onClick={() => onViewProfile(entry.playerId)}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3 cursor-pointer">
                                            <span className={`font-bold text-base w-6 text-center ${index < 3 ? 'text-amber-300' : 'text-slate-400'}`}>
                                                {entry.rank}
                                            </span>
                                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-600 flex items-center justify-center text-2xl overflow-hidden">
                                                {index === 0 ? <CrownIcon /> : (
                                                    isBase64Image ? 
                                                    <img src={entry.avatar} alt={entry.name} className="w-full h-full object-cover" /> :
                                                    (entry.avatar || '🧐')
                                                )}
                                            </div>
                                            <div>
                                                <p className="font-semibold text-white text-sm hover:underline">{entry.name}</p>
                                                <p className="text-xs text-slate-400">{entry.country}</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <span className="font-bold text-base text-amber-300">{entry.score} {t('points_abbr')}</span>
                                            <p className="text-xs text-slate-400 font-mono">{formatTime(entry.time)}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-end gap-2 pr-1">
                                        <ReactionButton entryId={entry.id} type="flowers" emoji="🌸" count={entry.reactions?.flowers || 0} title={t('send_flower')} />
                                        <ReactionButton entryId={entry.id} type="hearts" emoji="❤️" count={entry.reactions?.hearts || 0} title={t('send_heart')} />
                                        <ReactionButton entryId={entry.id} type="claps" emoji="👏" count={entry.reactions?.claps || 0} title={t('send_clap')} />
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Leaderboard;