import { motion } from 'motion/react';

const ProblemSolutionSection = () => {
    return (
        <section id="solution" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
            <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[500px] bg-gradient-to-r from-red-500/5 to-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-4xl font-bold text-white uppercase tracking-tighter mb-10"
                >
                    Seu futuro depende da sua <span className="text-red-500">decisão</span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="glass p-8 md:p-12 rounded-[2rem] border-white/10 text-center max-w-3xl relative overflow-hidden"
                >
                    <div className="hidden md:block absolute top-0 right-0 w-40 h-40 bg-indigo-500/10 blur-[50px] rounded-full pointer-events-none" />
                    
                    <p className="text-lg md:text-xl font-medium leading-relaxed text-gray-300">
                        O unico aplicativo que não da espaço para você falhar e constrói rotina, treino e dieta com foco na sua performance
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default ProblemSolutionSection;
