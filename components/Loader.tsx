
import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const Loader: React.FC = () => {
    const { t } = useContext(LanguageContext);
    return (
        <div className="flex flex-col items-center justify-center p-12 bg-slate-800/50 rounded-2xl">
            <div className="w-16 h-16 border-4 border-t-transparent border-indigo-400 rounded-full animate-spin"></div>
            <p className="mt-4 text-lg font-semibold text-slate-300">{t('loader_preparing')}</p>
            <p className="text-sm text-slate-400">{t('loader_loading')}</p>
        </div>
    );
};

export default Loader;
