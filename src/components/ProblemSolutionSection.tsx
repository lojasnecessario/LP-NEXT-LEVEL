import { motion } from 'motion/react';

const ProblemSolutionSection = () => {
    return (
        <section id="solution" className="pt-10 pb-20 bg-[#0a0a0a] relative overflow-hidden">
            <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[500px] bg-gradient-to-r from-red-500/5 to-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-3xl lg:text-4xl font-bold text-white uppercase tracking-tighter mb-10 max-w-3xl mx-auto"
                >
                    O sistema que transforma sua rotina em <span className="text-emerald-400">disciplina real</span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="glass p-8 md:p-12 rounded-[2rem] border-white/10 text-center max-w-3xl relative overflow-hidden"
                >
                    <div className="hidden md:block absolute top-0 right-0 w-40 h-40 bg-indigo-500/10 blur-[50px] rounded-full pointer-events-none" />
                    
                    <p className="text-lg md:text-xl font-medium leading-relaxed text-gray-300 mb-8">
                        O único sistema que não da espaço para você falhar.<br />
                        Constrói sua rotina, treino e dieta com foco na sua performance.
                    </p>
                    
                    <div className="w-full h-px bg-white/5 my-8" />

                    <p className="text-lg md:text-xl font-bold uppercase tracking-tight text-white mb-6 leading-tight text-center">
                        Para construir disciplina você precisa de:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-10 w-full max-w-4xl mx-auto">
                        {['Hábitos e rotina', 'Treino', 'Dieta', 'Controle de finanças'].map((item, i) => (
                           <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + i * 0.1 }}
                                className="flex items-center gap-3 bg-white/5 px-4 py-3 rounded-xl border border-white/5 text-left"
                           >
                                <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                                <span className="text-xs font-bold text-gray-200 uppercase tracking-widest">{item}</span>
                           </motion.div>
                        ))}
                    </div>

                    <p className="text-base md:text-lg font-medium leading-relaxed text-gray-400">
                        E a nossa I.A de produtividade e performance constrói a rotina perfeita! <span className="text-emerald-400">Você só precisa executar</span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default ProblemSolutionSection;
