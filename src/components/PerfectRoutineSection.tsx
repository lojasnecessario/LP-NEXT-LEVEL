import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Zap, Target } from 'lucide-react';

const PerfectRoutineSection = () => {
    return (
        <section className="py-24 relative bg-[#050505] overflow-clip">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <div className="glass border-emerald-500/20 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden text-center shadow-[0_0_60px_rgba(16,185,129,0.05)]">
                    {/* Animated side elements */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/10 blur-3xl rounded-full" />
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-500/10 blur-3xl rounded-full" />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8"
                    >
                        <Sparkles className="w-4 h-4 text-emerald-400" />
                        <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Tecnologia Next Level</span>
                    </motion.div>

                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8 leading-[1.1]"
                    >
                        E a nossa I.A de <span className="text-emerald-400">produtividade e performance</span> constrói a rotina perfeita!
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="relative inline-block mb-10"
                    >
                        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-black px-8 py-4 rounded-2xl font-black text-2xl md:text-3xl uppercase tracking-tighter shadow-[0_0_30px_rgba(16,185,129,0.4)]">
                            Você só precisa executar
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-12 border-t border-white/5">
                        <div className="flex flex-col items-center gap-3">
                            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                                <Zap className="w-6 h-6 text-emerald-400" />
                            </div>
                            <p className="text-sm font-medium text-gray-400">Otimização Instântanea</p>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                                <Target className="w-6 h-6 text-emerald-400" />
                            </div>
                            <p className="text-sm font-medium text-gray-400">Foco no seu Objetivo</p>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                                <ArrowRight className="w-6 h-6 text-emerald-400" />
                            </div>
                            <p className="text-sm font-medium text-gray-400">Execução Simplificada</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PerfectRoutineSection;
