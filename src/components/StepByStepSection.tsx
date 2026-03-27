import { motion } from 'motion/react';

const steps = [
    {
        title: "Responda o quiz comportamental",
        description: "Entendemos o seu perfil, sua rotina atual e seus hábitos em menos 2 minutos",
        icon: "🧠"
    },
    {
        title: "Deixe a I.A analisar você",
        description: "Nossa tecnologia processa seus dados com base em estudos reais de neurociência.",
        icon: "⚡"
    },
    {
        title: "Sua rotina perfeita é gerada",
        description: "Um cronograma blindado contra erros e procrastinação, feito sob medida.",
        icon: "✨"
    },
    {
        title: "Treinos e Dietas focados",
        description: "Tudo planejado para seu objetivo específico, sem complicação ou planilhas.",
        icon: "🥗"
    },
    {
        title: "Auxílio financeiro inteligente",
        description: "Basta inserir seus dados e a I.A te ajuda a economizar e investir melhor.",
        icon: "💰"
    },
    {
        title: "Ganhe recompensas reais",
        description: "Acumule pontos ao cumprir suas metas e troque por benefícios exclusivos.",
        icon: "🏆"
    }
];

const StepByStepSection = () => {
    return (
        <section id="how-it-works" className="py-12 bg-[#050505] relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-5xl font-black text-white uppercase tracking-tighter"
                    >
                        O primeiro passo leva segundos. <span className="text-emerald-400">O resultado dura a vida toda.</span>
                    </motion.h2>
                    <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: 100 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="h-1 bg-emerald-500/30 mx-auto mt-4"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="relative group h-full"
                        >
                            <div className="absolute -inset-0.5 bg-gradient-to-br from-emerald-500/20 to-transparent rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-500" />
                            
                            <div className="relative h-full bg-[#0a0a0a] border border-white/5 p-8 rounded-[2rem] flex flex-col gap-4 overflow-hidden group-hover:border-emerald-500/30 transition-all duration-300">
                                {/* Step Number */}
                                <div className="absolute top-4 right-6 text-6xl font-black text-white/[0.03] group-hover:text-emerald-500/[0.05] transition-colors pointer-events-none">
                                    0{i + 1}
                                </div>

                                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-500 group-hover:bg-emerald-500/20">
                                    {step.icon}
                                </div>

                                <h3 className="text-xl font-bold text-white uppercase tracking-tight leading-tight pt-2">
                                    {step.title}
                                </h3>

                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {step.description}
                                </p>
                                
                                <div className="mt-auto pt-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-emerald-500/60 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span>Próximo Passo</span>
                                    <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StepByStepSection;
