import { motion } from 'motion/react';

const ProblemSolutionSection = () => {
    return (
        <section id="solution" className="py-12 bg-[#0a0a0a] relative overflow-hidden">
            <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[500px] bg-gradient-to-r from-red-500/5 to-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-3xl lg:text-4xl font-black text-white uppercase tracking-tighter mb-10 max-w-4xl mx-auto leading-tight"
                >
                    O sistema que transforma sua rotina em <span className="text-emerald-400 whitespace-nowrap">disciplina real.</span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="glass p-8 md:p-16 rounded-[3rem] border-white/10 text-center max-w-4xl relative overflow-hidden w-full"
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
                    <div className="hidden md:block absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none" />
                    
                    <div className="relative z-10 space-y-10">
                        <div className="flex flex-col items-center gap-2 md:gap-4">
                            <p className="text-xl md:text-3xl lg:text-4xl font-black text-white uppercase tracking-tight">
                                <span className="text-red-500">Sem</span> achismos
                            </p>
                            <p className="text-xl md:text-3xl lg:text-4xl font-black text-white uppercase tracking-tight">
                                <span className="text-red-500">Sem</span> metodologia fraca
                            </p>
                            <p className="text-xl md:text-3xl lg:text-4xl font-black text-white uppercase tracking-tight">
                                <span className="text-red-500">Sem</span> milhões de planilhas para preencher
                            </p>
                            
                            <div className="w-24 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent mt-6" />

                            <p className="text-lg md:text-2xl font-medium leading-relaxed text-gray-300 max-w-3xl mx-auto">
                                Nós criamos o <span className="text-white font-bold underline decoration-emerald-500/50 underline-offset-8">primeiro sistema com I.A integrada</span> baseado em neurociência e produtividade para você parar de falhar e finalmente cumprir seus objetivos todos os dias, te guiamos com uma rotina gamificada a prova de falhas.
                            </p>
                        </div>

                        <motion.div 
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="pt-4"
                        >
                            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs md:text-sm font-black uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(16,185,129,0.1)]">
                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                Alta Performance Neurocientífica
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ProblemSolutionSection;
