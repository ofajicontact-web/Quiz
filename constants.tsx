import React from 'react';
import { LevelConfig } from './types';

// Custom trophy components using user-provided image URLs
const TaarijaTrophy: React.FC<{ className?: string }> = ({ className }) => (
    <img src="https://radiofanida.com/wp/wp-content/uploads/2025/09/Taarija.png" alt="Trophée Taarija" className={`${className} crisp-image`} />
);
const BerradTrophy: React.FC<{ className?: string }> = ({ className }) => (
    <img src="https://radiofanida.com/wp/wp-content/uploads/2025/09/berrad.png" alt="Trophée Berrad" className={`${className} crisp-image`} />
);
const TagineTrophy: React.FC<{ className?: string }> = ({ className }) => (
    <img src="https://radiofanida.com/wp/wp-content/uploads/2025/09/Tagine1.png" alt="Trophée Tagine" className={`${className} crisp-image`} />
);
const TarboucheTrophy: React.FC<{ className?: string }> = ({ className }) => (
    <img src="https://radiofanida.com/wp/wp-content/uploads/2025/09/Tarbouche.png" alt="Trophée Tarbouche" className={`${className} crisp-image`} />
);
const CherbilTrophy: React.FC<{ className?: string }> = ({ className }) => (
    <img src="https://radiofanida.com/wp/wp-content/uploads/2025/09/Cherbil.png" alt="Trophée Cherbil" className={`${className} crisp-image`} />
);
const AkhnifTrophy: React.FC<{ className?: string }> = ({ className }) => (
    <img src="https://radiofanida.com/wp/wp-content/uploads/2025/09/akhnif.png" alt="Trophée Akhnif" className={`${className} crisp-image`} />
);
const KassElBellarTrophy: React.FC<{ className?: string }> = ({ className }) => (
    <img src="https://radiofanida.com/wp/wp-content/uploads/2025/09/kass-elbellar.png" alt="Trophée Kass El Bellar" className={`${className} crisp-image`} />
);
const ChekkaraTrophy: React.FC<{ className?: string }> = ({ className }) => (
    <img src="https://radiofanida.com/wp/wp-content/uploads/2025/09/chekkara.png" alt="Trophée Chekkara" className={`${className} crisp-image`} />
);
const TabssilTaoussTrophy: React.FC<{ className?: string }> = ({ className }) => (
    <img src="https://radiofanida.com/wp/wp-content/uploads/2025/09/tabssil-taouss.png" alt="Trophée Tabssil Taouss" className={`${className} crisp-image`} />
);
const MdamaTrophy: React.FC<{ className?: string }> = ({ className }) => (
    <img src="https://radiofanida.com/wp/wp-content/uploads/2025/09/Mdama1.png" alt="Trophée Mdama" className={`${className} crisp-image`} />
);
export const NtaaCaftan: React.FC<{ className?: string }> = ({ className }) => (
    <img src="https://radiofanida.com/wp/wp-content/uploads/2025/09/Caftan-Ntaa.png" alt="Caftan Ntaa" className={`${className} crisp-image`} />
);


export const QUESTIONS_PER_LEVEL = 4;
export const TOTAL_LEVELS = 10;
export const TOTAL_QUESTIONS = TOTAL_LEVELS * QUESTIONS_PER_LEVEL;
export const PASSING_SCORE_PER_LEVEL = 3;

export const AVATARS = ['😊', '😎', '🤔', '🚀', '✨', '🤓', '😇', '🤖'];

// CONFIGURATION DES NIVEAUX
export const LEVELS_CONFIG: LevelConfig[] = [
    {
        level: 1,
        name: { fr: "Apprenti Curieux", en: "Curious Apprentice", es: "Aprendiz Curioso", dr: "متعلم فضولي" },
        trophy: { name: { fr: "Taarija", en: "Taarija", es: "Taarija", dr: "طعريجة" }, icon: <TaarijaTrophy />, audioUrl: "https://radiofanida.com/wp/wp-content/uploads/2025/09/Taarija.wav" }
    },
    {
        level: 2,
        name: { fr: "Explorateur des Mondes", en: "World Explorer", es: "Explorador de Mundos", dr: "مستكشف العوالم" },
        trophy: { name: { fr: "Berrad", en: "Berrad", es: "Berrad", dr: "براد" }, icon: <BerradTrophy />, audioUrl: "https://radiofanida.com/wp/wp-content/uploads/2025/09/Berrad.wav" }
    },
    {
        level: 3,
        name: { fr: "Chasseur de Faits", en: "Fact Hunter", es: "Cazador de Hechos", dr: "صياد الحقائق" },
        trophy: { name: { fr: "Tagine", en: "Tagine", es: "Tagine", dr: "طجين" }, icon: <TagineTrophy />, audioUrl: "https://radiofanida.com/wp/wp-content/uploads/2025/09/Tagine.wav" }
    },
    {
        level: 4,
        name: { fr: "Détective de l'Histoire", en: "History Detective", es: "Detective de la Historia", dr: "محقق التاريخ" },
        trophy: { name: { fr: "Tarbouche", en: "Tarbouche", es: "Tarbouche", dr: "طربوش" }, icon: <TarboucheTrophy />, audioUrl: "https://radiofanida.com/wp/wp-content/uploads/2025/09/Tarbouche.wav" }
    },
    {
        level: 5,
        name: { fr: "Virtuose Culturel", en: "Cultural Virtuoso", es: "Virtuoso Cultural", dr: "فنان ثقافي" },
        trophy: { name: { fr: "Cherbil", en: "Cherbil", es: "Cherbil", dr: "شربيل" }, icon: <CherbilTrophy />, audioUrl: "https://radiofanida.com/wp/wp-content/uploads/2025/09/Cherbil.wav" }
    },
    {
        level: 6,
        name: { fr: "Savant Éclairé", en: "Enlightened Scholar", es: "Erudito Iluminado", dr: "عالم مستنير" },
        trophy: { name: { fr: "Akhnif", en: "Akhnif", es: "Akhnif", dr: "أخنيف" }, icon: <AkhnifTrophy />, audioUrl: "https://radiofanida.com/wp/wp-content/uploads/2025/09/Akhnif.wav" }
    },
    {
        level: 7,
        name: { fr: "Gardien du Savoir", en: "Guardian of Knowledge", es: "Guardián del Saber", dr: "حارس المعرفة" },
        trophy: { name: { fr: "Kass El Bellar", en: "Kass El Bellar", es: "Kass El Bellar", dr: "كاس البلار" }, icon: <KassElBellarTrophy />, audioUrl: "https://radiofanida.com/wp/wp-content/uploads/2025/09/Kass-El-bellar.wav" }
    },
    {
        level: 8,
        name: { fr: "Maître des Énigmes", en: "Master of Riddles", es: "Maestro de los Enigmas", dr: "سيد الألغاز" },
        trophy: { name: { fr: "Chekkara", en: "Chekkara", es: "Chekkara", dr: "شكارة" }, icon: <ChekkaraTrophy />, audioUrl: "https://radiofanida.com/wp/wp-content/uploads/2025/09/Chekkara.wav" }
    },
    {
        level: 9,
        name: { fr: "Oracle de la Connaissance", en: "Oracle of Knowledge", es: "Oráculo del Conocimiento", dr: "وحي المعرفة" },
        trophy: { name: { fr: "Tabssil Taouss", en: "Tabssil Taouss", es: "Tabssil Taouss", dr: "طبسيل الطاوس" }, icon: <TabssilTaoussTrophy />, audioUrl: "https://radiofanida.com/wp/wp-content/uploads/2025/09/Tabssil-taouss.wav" }
    },
    {
        level: 10,
        name: { fr: "Légende Vivante", en: "Living Legend", es: "Leyenda Viviente", dr: "أسطورة حية" },
        trophy: { name: { fr: "Mdama", en: "Mdama", es: "Mdama", dr: "مضمة" }, icon: <MdamaTrophy />, audioUrl: "https://radiofanida.com/wp/wp-content/uploads/2025/09/Mdama.wav" }
    }
];