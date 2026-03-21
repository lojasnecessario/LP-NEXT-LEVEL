import { motion } from 'motion/react';

const AnnouncementTicker = () => {
    const text = <>participe do desafio <span className="whitespace-nowrap">sangue verde neon</span> 30 dias e concorra a 150 reais</>;
    
    return (
        <div className="bg-emerald-500/10 border-y border-emerald-500/20 py-2.5 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <span className="text-emerald-400 font-black text-sm md:text-lg tracking-widest uppercase inline-block drop-shadow-[0_0_10px_rgba(52,211,153,0.5)]">
                    {text}
                </span>
            </div>
        </div>
    );
};

export default AnnouncementTicker;
