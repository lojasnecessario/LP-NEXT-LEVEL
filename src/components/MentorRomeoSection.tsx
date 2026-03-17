import { motion } from 'motion/react';
import { Brain, Sparkles, ShieldCheck, Zap } from 'lucide-react';

const MentorRomeoSection = () => {
    return (
        <section className="py-8 bg-[#050505] relative overflow-hidden border-b border-white/5">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center">
                    {/* Content */}
                    <div className="w-full text-center overflow-hidden">
                        <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-full mb-6">
                            <Zap className="w-4 h-4 text-emerald-400" />
                            <span className="text-xs font-black text-emerald-400 uppercase tracking-widest">Mentor Romeo I.A</span>
                        </div>
                        
                        <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight px-4 md:px-0 tracking-tighter">
                            Seu Mentor de <span className="text-emerald-400">Alta Performance</span>.
                        </h2>
                        
                        <p className="text-gray-400 text-base md:text-lg mb-8 leading-relaxed font-medium max-w-2xl mx-auto px-6">
                            Inteligência baseada em <span className="text-white">psicologia comportamental</span> e <span className="text-white">biologia do desempenho</span>. Hacks reais para sua atenção e foco.
                        </p>
                        
                        {/* Auto-sliding features */}
                        <div className="relative w-full overflow-hidden pb-4 flex justify-center">
                            <motion.div 
                                className="flex gap-4"
                                animate={{ x: ["0%", "-50%"] }}
                                transition={{ 
                                    duration: 25, 
                                    repeat: Infinity, 
                                    ease: "linear" 
                                }}
                                style={{ width: "fit-content" }}
                            >
                                {[...Array(2)].map((_, groupIndex) => (
                                    <div key={groupIndex} className="flex gap-4 shrink-0">
                                        {[
                                            { title: "Performance", desc: "Hackeie sua atenção/foco." },
                                            { title: "Foco Neural", desc: "Entre em estado de Flow." },
                                            { title: "Desenvolvimento", desc: "Elimine seus vícios reais." }
                                        ].map((item, i) => (
                                            <div key={`${groupIndex}-${i}`} className="w-[65vw] md:w-[280px] shrink-0 p-4 rounded-2xl bg-white/5 border border-white/5 flex items-start gap-4 transition-colors">
                                                <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                                <div className="text-left">
                                                    <h4 className="font-bold text-white text-sm mb-1">{item.title}</h4>
                                                    <p className="text-gray-500 text-[11px] leading-snug">{item.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MentorRomeoSection;
