import { motion } from 'motion/react';

const ComparisonSection = () => {
    return (
        <section id="comparison" className="py-12 bg-[#050505] relative overflow-hidden">
            {/* Background elements */}
            <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-[600px] bg-emerald-500/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter mb-12 text-center max-w-3xl mx-auto leading-tight"
                >
                    Veja como o <span className="text-emerald-400">Next Level</span> vai mudar sua disciplina
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="glass p-6 md:p-12 rounded-[2.5rem] border-white/10 relative overflow-hidden w-full shadow-[0_0_50px_rgba(16,185,129,0.02)]"
                >
                    {/* Comparison Header Labels */}
                    <div className="hidden md:grid grid-cols-[1fr_auto_1fr] gap-8 mb-8 px-4">
                        <div className="text-red-500/40 text-xs font-black uppercase tracking-[0.2em] text-center">A vida sem o Next Level</div>
                        <div className="w-10" />
                        <div className="text-emerald-500/80 text-xs font-black uppercase tracking-[0.2em] text-center">A vida com o Next Level</div>
                    </div>

                    <div className="space-y-4 md:space-y-6 mb-12">
                        {[
                            { before: "Acorda sem saber por onde começar, pula de tarefa em tarefa e termina o dia com sensação de fracasso", after: "Acorda com um plano claro, executa sem pensar e termina o dia com sensação de progresso real" },
                            { before: "Dinheiro entra e some… você nunca sabe pra onde foi", after: "Controle total das suas finanças com um assistente que te orienta em cada decisão" },
                            { before: "Chega na academia perdido, repete os mesmos exercícios e não vê resultado", after: "Treinos prontos, personalizados e focados no seu objetivo" },
                            { before: "Come no automático e nunca sabe se tá fazendo certo", after: "Dieta ajustada pra você com controle total de macros e orientação prática no dia a dia" }
                        ].map((item, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 * i }}
                                className="group grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-3 md:gap-8 items-stretch"
                            >
                                {/* Before State */}
                                <div className="relative group/card overflow-hidden rounded-2xl bg-white/[0.02] border border-white/5 p-5 md:p-6 transition-all duration-300 hover:bg-red-500/[0.03] hover:border-red-500/20">
                                    <div className="md:hidden text-red-500/60 text-[10px] font-black uppercase tracking-widest mb-2">Sem o Next Level</div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0 border border-red-500/20 text-red-500">
                                            <span className="text-lg font-bold">×</span>
                                        </div>
                                        <p className="text-gray-400 text-sm md:text-base font-medium leading-relaxed group-hover/card:text-gray-300 transition-colors uppercase tracking-tight">{item.before}</p>
                                    </div>
                                </div>

                                {/* Arrow/Separator */}
                                <div className="hidden md:flex items-center justify-center">
                                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-600 group-hover:text-emerald-500 group-hover:border-emerald-500/30 transition-all duration-500 shadow-inner">
                                        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                                    </div>
                                </div>

                                {/* After State */}
                                <div className="relative group/card overflow-hidden rounded-2xl bg-emerald-500/[0.03] border border-emerald-500/10 p-5 md:p-6 transition-all duration-500 hover:bg-emerald-500/[0.08] hover:border-emerald-500/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]">
                                    <div className="md:hidden text-emerald-500/60 text-[10px] font-black uppercase tracking-widest mb-2">Com o Next Level</div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center shrink-0 border border-emerald-500/30 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                                            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                        </div>
                                        <p className="text-white text-sm md:text-base font-bold leading-relaxed uppercase tracking-tight">{item.after}</p>
                                    </div>
                                    <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-emerald-500/10 blur-2xl rounded-full opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Highly highlighted complementary block */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="relative p-4 md:p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 overflow-hidden text-center shadow-[0_0_40px_rgba(16,185,129,0.05)] group max-w-2xl mx-auto"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-emerald-500/10 opacity-30 animate-pulse" />
                        <div className="relative z-10 flex flex-col items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                            </div>
                            <p className="text-sm md:text-lg font-bold text-white uppercase tracking-tight leading-tight">
                                Tudo feito <span className="text-emerald-400 font-black">automáticamente</span> por um cérebro inteligente baseado em neurociência
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default ComparisonSection;
