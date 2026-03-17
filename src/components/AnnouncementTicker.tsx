import { motion } from 'motion/react';

const AnnouncementTicker = () => {
    const text = "DESAFIO NEXT LEVEL 30 DIAS COMEÇOU — SE JUNTE À COMUNIDADE MAIS PRODUTIVA E BEM SUCEDIDA DO BRASIL — ";
    
    return (
        <div className="bg-emerald-600/10 border-y border-emerald-500/20 py-3 overflow-hidden whitespace-nowrap relative">
            <motion.div 
                className="flex"
                animate={{ x: [0, -1000] }}
                transition={{ 
                    duration: 20, 
                    repeat: Infinity, 
                    ease: "linear" 
                }}
            >
                <span className="text-emerald-400 font-black text-sm md:text-base tracking-widest uppercase flex-shrink-0">
                    {text}{text}{text}{text}
                </span>
                <span className="text-emerald-400 font-black text-sm md:text-base tracking-widest uppercase flex-shrink-0">
                    {text}{text}{text}{text}
                </span>
            </motion.div>
        </div>
    );
};

export default AnnouncementTicker;
