import { motion } from 'motion/react';
import { ClipboardList, Cpu, Trophy, Settings2 } from 'lucide-react';

const steps = [
    {
        icon: <ClipboardList className="w-8 h-8" />,
        title: "Quiz de Perfil",
        description: "Responda o quiz inicial para a I.A conhecer você, seus objetivos e sua rotina atual.",
        color: "emerald"
    },
    {
        icon: <Cpu className="w-8 h-8" />,
        title: "Construção por I.A",
        description: "Ela irá construir rotina, treinos e uma dieta de alta performance totalmente personalizada.",
        color: "emerald"
    },
    {
        icon: <Trophy className="w-8 h-8" />,
        title: "Gamificação",
        description: "Cumpra as missões no app, ganhe xp e troque por prêmios físicos reais.",
        color: "emerald"
    },
    {
        icon: <Settings2 className="w-8 h-8" />,
        title: "Personalização",
        description: "Personalize sua rotina do seu jeito ou peça para o Romeo ajustar cada detalhe.",
        color: "emerald"
    }
];

const HowItWorksSection = () => {
    return (
        <section id="como-funciona" className="py-12 bg-[#050505] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter"
                    >
                        Veja como <span className="text-emerald-400">funciona</span>
                    </motion.h2>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
                        Simples, prático e focado na sua evolução constante.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative p-8 rounded-[2.5rem] bg-white/5 border border-white/5 hover:border-emerald-500/20 transition-all hover:bg-emerald-500/[0.02]"
                        >
                            <div className="absolute top-0 right-0 p-6 text-emerald-500/10 font-black text-6xl group-hover:text-emerald-500/20 transition-colors pointer-events-none">
                                0{index + 1}
                            </div>
                            
                            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-8 border border-emerald-500/20 text-emerald-400 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all">
                                {step.icon}
                            </div>
                            
                            <h3 className="text-xl font-bold mb-4 text-white group-hover:text-emerald-400 transition-colors">
                                {step.title}
                            </h3>
                            
                            <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
            
            {/* Decorative background light */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-64 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
        </section>
    );
};

export default HowItWorksSection;
