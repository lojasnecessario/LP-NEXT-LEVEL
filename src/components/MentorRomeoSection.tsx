import { motion } from 'motion/react';

const MentorRomeoSection = () => {
    return (
        <section className="py-12 relative bg-[#050505] overflow-hidden border-t border-white/5">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tighter mb-12 leading-tight"
                >
                    Seu <span className="text-blue-500">mentor</span> inteligente
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="relative w-full aspect-square bg-blue-950/20 rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(59,130,246,0.1)] border border-blue-500/20 mb-8 mx-auto max-w-[180px] flex items-center justify-center"
                >
                    <div className="relative">
                        <motion.div
                            animate={{
                                y: [0, -4, 0],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="relative z-10"
                        >
                            <svg width="120" height="120" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="filter drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]">
                                {/* Robot Head Outer */}
                                <rect x="40" y="50" width="120" height="100" rx="30" fill="#0A0A0A" stroke="#3b82f6" strokeWidth="2" />
                                
                                {/* Face Plate */}
                                <rect x="55" y="65" width="90" height="70" rx="15" fill="#1A1A1A" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.3" />
                                {/* Eyes */}
                                <motion.circle 
                                    cx="80" cy="95" r="8" fill="#3b82f6"
                                    animate={{ scaleY: [1, 0.1, 1] }}
                                    transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 6 }}
                                />
                                <motion.circle 
                                    cx="120" cy="95" r="8" fill="#3b82f6"
                                    animate={{ scaleY: [1, 0.1, 1] }}
                                    transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 6 }}
                                />
                                {/* Mouth / Signal */}
                                <rect x="85" y="115" width="30" height="4" rx="2" fill="#3b82f6" />
                                {/* Antennas */}
                                <line x1="100" y1="50" x2="100" y2="30" stroke="#3b82f6" strokeWidth="2" />
                                <circle cx="100" cy="25" r="5" fill="#3b82f6" />
                            </svg>
                        </motion.div>
                        
                        {/* Background Pulsing Glow */}
                        <motion.div 
                            animate={{ opacity: [0.05, 0.15, 0.05] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute inset-0 bg-blue-500 blur-[60px] -z-10 rounded-full"
                        />
                    </div>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-base md:text-lg text-gray-400 font-medium max-w-2xl mx-auto"
                >
                    O Romeo é a inteligencia artificial desenvolvida baseada em produtividade e foco. Peça dicas, sugestões, treinos para ele
                </motion.p>
            </div>
        </section>
    );
};

export default MentorRomeoSection;
