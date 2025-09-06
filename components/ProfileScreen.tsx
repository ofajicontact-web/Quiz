import React, { useState, useContext } from 'react';
import { Player } from '../types';
import { LanguageContext } from '../context/LanguageContext';
import { LEVELS_CONFIG, NtaaCaftan } from '../constants';

interface ProfileScreenProps {
    player: Player;
    onSave: (updatedProfile: Partial<Player>) => void;
    onBack: () => void;
}

const HOBBIES_LIST = ['reading', 'travel', 'music', 'cinema', 'drawing', 'singing', 'writing', 'sport'];

const THOUGHTS = [
    'hope_glow', 'waking_dream', 'shooting_star', 'wind_of_freedom', 'inner_sun', 'sweet_whisper',
    'flower_of_life', 'sparkle_of_joy', 'light_feather', 'infinite_horizon', 'sigh_of_love',
    'wave_of_peace', 'ray_of_dawn', 'open_sky', 'quiet_stream'
];

const ICONS: { [key: string]: string } = {
    heart: '❤️', flower: '🌸', hope: '✨', energy: '⚡', sun: '☀️',
    beach: '🏖️', travel: '✈️', vacation: '🌴'
};

const ProfileScreen: React.FC<ProfileScreenProps> = ({ player, onSave, onBack }) => {
    const { t, language } = useContext(LanguageContext);
    const [isEditing, setIsEditing] = useState(false);
    
    const [bio, setBio] = useState(player.bio || '');
    const [hobbies, setHobbies] = useState<string[]>(player.hobbies || []);
    const [thought, setThought] = useState(player.thought || '');
    const [thoughtIcon, setThoughtIcon] = useState(player.thoughtIcon || '');

    const handleHobbyToggle = (hobby: string) => {
        setHobbies(prev => 
            prev.includes(hobby) ? prev.filter(h => h !== hobby) : [...prev, hobby]
        );
    };

    const handleSave = () => {
        onSave({ bio, hobbies, thought, thoughtIcon });
        setIsEditing(false);
    };
    
    const isBase64Image = player.avatar && player.avatar.startsWith('data:image/');

    const unlockedTrophies = player.unlockedTrophies || [];

    const DisplayView = () => (
        <div className="space-y-6">
            <div className="flex flex-col items-center text-center">
                <div className="relative w-32 h-32 mb-4">
                    <div className="w-full h-full rounded-full bg-slate-900/80 border-2 border-indigo-400 overflow-hidden animate-halo-glow">
                        {isBase64Image ? 
                            <img src={player.avatar} alt="Avatar" className="w-full h-full object-cover" /> :
                            <span className="text-7xl flex items-center justify-center h-full">{player.avatar}</span>
                        }
                    </div>
                </div>
                <h2 className="text-3xl font-bold text-white">{player.username}</h2>
                <p className="text-slate-400">{player.country}</p>
                
                {player.thought && (
                    <div className="mt-4 bg-slate-900/50 rounded-full px-4 py-2 flex items-center gap-2 border border-slate-700">
                        <span className="text-xl">{ICONS[player.thoughtIcon || 'hope']}</span>
                        <p className="text-slate-300 italic">"{t(player.thought)}"</p>
                    </div>
                )}
            </div>

            {player.bio && (
                <div>
                    <p className="text-slate-300 text-center whitespace-pre-wrap">{player.bio}</p>
                </div>
            )}

            {player.hobbies && player.hobbies.length > 0 && (
                <div>
                    <h3 className="font-semibold text-lg text-indigo-300 mb-2 text-center">{t('profile_hobbies')}</h3>
                    <div className="flex flex-wrap justify-center gap-2">
                        {player.hobbies.map(hobby => (
                            <span key={hobby} className="bg-slate-700 text-slate-200 text-sm font-medium px-3 py-1 rounded-full">
                                #{t(`hobby_${hobby}`)}
                            </span>
                        ))}
                    </div>
                </div>
            )}
            
            { (player.hasPerfectScore || unlockedTrophies.length > 0) && (
                 <div>
                    <h3 className="font-semibold text-lg text-amber-300 mb-4 text-center">{t('profile_my_trophies')}</h3>
                    {player.hasPerfectScore && (
                        <div className="mb-6 flex flex-col items-center animate-fade-in-down">
                            <div className="trophy-animation-wrapper">
                               <div className="animate-trophy-glow">
                                    <div className="animate-trophy-pulse">
                                        <NtaaCaftan className="w-40 h-40 drop-shadow-lg"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="grid grid-cols-4 sm:grid-cols-5 gap-4 justify-items-center">
                        {LEVELS_CONFIG.filter(lc => unlockedTrophies.includes(lc.level)).map(levelConfig => (
                             <div key={levelConfig.level} className="flex flex-col items-center text-center" title={levelConfig.trophy.name[language]}>
                                {React.cloneElement(levelConfig.trophy.icon, { className: "w-16 h-16" })}
                            </div>
                        ))}
                    </div>
                 </div>
            )}

            <button onClick={() => setIsEditing(true)} className="w-full mt-4 bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-700 transition-all duration-300">
                {t('profile_edit_button')}
            </button>
        </div>
    );

    const EditView = () => (
        <div className="space-y-6">
            <div>
                <label htmlFor="bio" className="block text-sm font-medium text-slate-300 mb-2">{t('profile_bio')}</label>
                <textarea id="bio" value={bio} onChange={(e) => setBio(e.target.value)} rows={3} className="w-full bg-slate-900/80 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>

            <div>
                 <label htmlFor="thought" className="block text-sm font-medium text-slate-300 mb-2">{t('profile_thought_of_the_day')}</label>
                 <select id="thought" value={thought} onChange={(e) => setThought(e.target.value)} className="w-full bg-slate-900/80 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none bg-no-repeat" style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%239ca3af' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")` }}>
                    <option value="">--</option>
                    {THOUGHTS.map(th => <option key={th} value={th} className="bg-slate-800">{t(th)}</option>)}
                 </select>
                 <div className="flex flex-wrap justify-center gap-2 mt-3 bg-slate-900/50 p-2 rounded-lg">
                    {Object.entries(ICONS).map(([key, emoji]) => (
                        <button key={key} onClick={() => setThoughtIcon(key)} className={`w-10 h-10 rounded-full text-xl transition-all ${thoughtIcon === key ? 'bg-indigo-500 scale-110 ring-2 ring-white' : 'bg-slate-700 hover:bg-slate-600'}`}>
                            {emoji}
                        </button>
                    ))}
                 </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">{t('profile_hobbies')}</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {HOBBIES_LIST.map(hobby => (
                        <button key={hobby} onClick={() => handleHobbyToggle(hobby)} className={`px-3 py-2 text-sm rounded-lg transition-colors border ${hobbies.includes(hobby) ? 'bg-indigo-500 border-indigo-400 text-white font-semibold' : 'bg-slate-700/50 border-slate-600 text-slate-300 hover:bg-slate-600/50'}`}>
                            {t(`hobby_${hobby}`)}
                        </button>
                    ))}
                </div>
            </div>

            <button onClick={handleSave} className="w-full mt-4 bg-gradient-to-r from-green-500 to-teal-500 text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transform hover:scale-105 transition-all">
                {t('profile_save_button')}
            </button>
        </div>
    );


    return (
        <div className="relative flex flex-col items-center justify-center h-full p-2 sm:p-4">
             <div className="relative w-full max-w-lg bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-2xl shadow-indigo-500/20 p-6 sm:p-8 border border-slate-700 overflow-y-auto max-h-full">
                <button onClick={onBack} className="absolute top-3 right-3 text-slate-400 hover:text-white transition-colors p-2 rounded-full hover:bg-slate-700/50 z-10" aria-label={t('back_button_label')}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                    </svg>
                </button>
                
                {isEditing ? <EditView /> : <DisplayView />}

            </div>
        </div>
    );
};

export default ProfileScreen;
