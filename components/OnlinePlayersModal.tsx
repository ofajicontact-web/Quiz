import React, { useContext, useEffect, useState } from 'react';
import { Player } from '../types';
import { db } from '../services/firebase';
import { LanguageContext } from '../context/LanguageContext';
import { CloseIcon } from './Icons';

interface OnlinePlayersModalProps {
    isVisible: boolean;
    onClose: () => void;
    onViewProfile: (playerId: string) => void;
    onSendRequest: (player: Player, type: 'friend_request' | 'duel_challenge') => void;
    currentPlayer: Player | null;
    sentRequests: { [playerId: string]: 'friend' | 'duel' };
}

const OnlinePlayersModal: React.FC<OnlinePlayersModalProps> = ({ isVisible, onClose, onViewProfile, onSendRequest, currentPlayer, sentRequests }) => {
    const { t } = useContext(LanguageContext);
    const [onlinePlayers, setOnlinePlayers] = useState<Player[]>([]);
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
        if (isVisible && db) {
            db.collection('players').orderBy('createdAt', 'desc').limit(15).get().then((snapshot: any) => {
                const players = snapshot.docs.map((doc: any) => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setOnlinePlayers(players);
            }).catch((err: any) => {
                console.error("Error fetching online players:", err);
            });
        }
    }, [isVisible]);
    
    if (!shouldRender) return null;

    return (
        <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm z-40 flex items-center justify-center p-4 ${isVisible ? 'animate-fade-in' : 'animate-fade-out'}`} onClick={onClose}>
            <div className={`w-full max-w-sm transition-transform duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} onClick={(e) => e.stopPropagation()}>
                <div className="relative bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-700 max-h-[75vh] flex flex-col p-4 sm:p-6">
                    <button onClick={onClose} className="absolute top-3 right-3 text-slate-400 hover:text-white transition-colors p-1 rounded-full hover:bg-slate-700/50 z-10" aria-label={t('close_button_label')}>
                        <CloseIcon />
                    </button>
                    <h3 className="text-xl md:text-2xl font-bold text-center mb-1 text-green-400">{t('online_players_title')}</h3>
                    <p className="text-center text-slate-400 text-sm mb-4">{t('duel_instructions')}</p>
                    <ul className="space-y-3 overflow-y-auto flex-grow pr-2">
                        {onlinePlayers.length > 0 ? onlinePlayers.map((player, index) => {
                             const isBase64Image = player.avatar && player.avatar.startsWith('data:image/');
                             const isSelf = currentPlayer?.id === player.id;
                             const requestStatus = sentRequests[player.id];

                             return (
                                <li
                                    key={player.id}
                                    className="p-2 rounded-lg bg-slate-700/50 flex items-center justify-between animate-fade-in-up"
                                    style={{ animationDelay: `${index * 50}ms` }}
                                >
                                    <div 
                                        className="flex items-center gap-3 cursor-pointer"
                                        onClick={() => onViewProfile(player.id)}
                                    >
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-600 flex items-center justify-center text-2xl overflow-hidden">
                                            {isBase64Image ? 
                                                <img src={player.avatar} alt={player.username} className="w-full h-full object-cover" /> :
                                                (player.avatar || '🧐')
                                            }
                                        </div>
                                        <div>
                                            <p className="font-semibold text-white text-sm hover:underline">{player.username}</p>
                                            <p className="text-xs text-slate-400">{player.country}</p>
                                        </div>
                                    </div>
                                    {!isSelf && (
                                        <div className="flex items-center gap-2">
                                            <button 
                                                onClick={(e) => { e.stopPropagation(); onSendRequest(player, 'friend_request'); }} 
                                                disabled={!!requestStatus}
                                                className="text-xs font-semibold bg-sky-600 hover:bg-sky-700 text-white py-1 px-3 rounded-full transition-colors disabled:bg-slate-500 disabled:cursor-not-allowed"
                                            >
                                                {requestStatus === 'friend' ? t('request_sent') : t('add_friend_button')}
                                            </button>
                                            
                                            <button 
                                                onClick={(e) => { e.stopPropagation(); onSendRequest(player, 'duel_challenge'); }} 
                                                disabled={!!requestStatus}
                                                className="text-xs font-semibold bg-rose-600 hover:bg-rose-700 text-white py-1 px-3 rounded-full transition-colors disabled:bg-slate-500 disabled:cursor-not-allowed"
                                            >
                                                {requestStatus === 'duel' ? t('request_sent') : t('challenge_button')}
                                            </button>
                                        </div>
                                    )}
                                </li>
                             );
                        }) : <p className="text-center text-slate-400 py-4">Aucun joueur en ligne.</p>}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default OnlinePlayersModal;