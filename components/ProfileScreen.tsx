
import React, { useContext, useRef, useState, useEffect } from 'react';
import { Player } from '../types';
import { LanguageContext } from '../context/LanguageContext';
// FIX: Imported TOTAL_LEVELS constant to resolve reference error.
import { LEVELS_CONFIG, NtaaCaftan, TOTAL_LEVELS } from '../constants';
import { db } from '../services/firebase';

interface ProfileScreenProps {
    player: Player;
    onBack: () => void;
    isOwnProfile: boolean;
    onLogout: () => void;
    onUpdateAvatar: (newAvatar: string) => void;
    onAvatarChangeStart: () => void;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({ player, onBack, isOwnProfile, onLogout, onUpdateAvatar, onAvatarChangeStart }) => {
    const { t, language } = useContext(LanguageContext);
    const backdropRef = useRef<HTMLDivElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [unlockedTrophies, setUnlockedTrophies] = useState<number[]>([]);

     useEffect(() => {
        const fetchTrophies = async () => {
            if (db && player.id) {
                const playerDoc = await db.collection('players').doc(player.id).get();
                if (playerDoc.exists) {
                    setUnlockedTrophies(playerDoc.data().unlockedTrophies || []);
                }
            }
        };
        fetchTrophies();
    }, [player.id]);

    const isBase64Image = player.avatar && player.avatar.startsWith('data:image/');

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === backdropRef.current) {
            onBack();
        }
    };
    
    const handleAvatarClick = () => {
        if (isOwnProfile) {
            onAvatarChangeStart();
            fileInputRef.current?.click();
        }
    };
    
    const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result as string;
                onUpdateAvatar(base64String);
            };
            // FIX: Corrected a typo in the FileReader method name.
            reader.readAsDataURL(file);
        }
    };
    
    const hasPerfectScore = unlockedTrophies.length === TOTAL_LEVELS; // Assuming perfect score unlocks all 10 level trophies.
    const trophiesToShow = LEVELS_CONFIG.filter(config => unlockedTrophies.includes(config.level));

    return (
        <div ref={backdropRef} className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 flex items-center justify-center p-2 sm:p-4 animate-fade-in" onClick={handleBackdropClick}>
             <div className="relative w-full max-w-xl bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-2xl p-6 sm:p-8 border border-slate-700 animate-zoom-in flex flex-col max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
                <button onClick={onBack} className="absolute top-3 right-3 text-slate-400 hover:text-white transition-colors p-2 rounded-full hover:bg-slate-700/50 z-10" aria-label={t('back_button_label')}>
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                
                <div className="flex flex-col items-center text-center mb-6">
                    <div className="relative w-32 h-32 mb-4">
                        <button onClick={handleAvatarClick} disabled={!isOwnProfile} className={`w-full h-full rounded-full bg-slate-900/80 border-2 border-indigo-400 overflow-hidden animate-halo-glow ${isOwnProfile ? 'cursor-pointer' : 'cursor-default'}`}>
                            {isBase64Image ? 
                                <img src={player.avatar} alt="Avatar" className="w-full h-full object-cover" /> :
                                <span className="text-7xl flex items-center justify-center h-full">{player.avatar}</span>
                            }
                        </button>
                         <input type="file" ref={fileInputRef} onChange={handleAvatarChange} className="hidden" accept="image/png, image/jpeg" />
                    </div>
                    <h2 className="text-3xl font-bold text-white">{player.username}</h2>
                    <p className="text-slate-400">{player.country}</p>
                </div>
                
                <div className="flex-grow">
                    {unlockedTrophies.length > 0 ? (
                        <>
                            <h3 className="text-xl font-semibold text-amber-300 mb-4 text-center">{t('profile_trophies_won')}</h3>
                            <div className="flex flex-col items-center gap-6">
                                {hasPerfectScore && (
                                    <div 
                                        className="flex flex-col items-center text-center majestic-caftan-sparkles animate-fade-in" 
                                        title={t('legendary_caftan_name')}
                                    >
                                        <i></i> {/* Required for sparkles */}
                                        <NtaaCaftan className="w-20 h-20 sm:w-24 sm:h-24 object-contain animate-trophy-glow" />
                                        <span className="text-sm mt-2 text-slate-300 font-semibold">{t('legendary_caftan_name')}</span>
                                    </div>
                                )}
                                <div className="grid grid-cols-5 gap-y-6 gap-x-4">
                                    {trophiesToShow.map((config, index) => (
                                        <div 
                                            key={config.level} 
                                            className="flex flex-col items-center text-center animate-trophy-reveal" 
                                            style={{ animationDelay: `${(hasPerfectScore ? 0 : index) * 100}ms` }} 
                                            title={config.trophy.name[language]}
                                        >
                                            <div className="trophy-animation-wrapper">
                                                {React.cloneElement(config.trophy.icon, { className: "w-14 h-14 sm:w-16 sm:h-16 object-contain"})}
                                            </div>
                                            <span className="text-xs mt-2 text-slate-300 truncate w-full px-1">{config.trophy.name[language]}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </>
                    ) : (
                        <p className="text-slate-400 text-center">{isOwnProfile ? t('profile_no_trophies_own') : t('profile_no_trophies')}</p>
                    )}
                </div>

                {isOwnProfile && (
                     <div className="mt-6 pt-6 border-t border-slate-700">
                         <button onClick={onLogout} className="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold py-3 px-4 rounded-lg transition-colors">
                            {t('logout_button')}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProfileScreen;