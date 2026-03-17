import { Brain, Trophy, Dumbbell, Utensils } from 'lucide-react';
import { motion } from 'motion/react';
import { trackMetaEvent } from '../utils/metaPixel';

const features = [
    {
        icon: Brain,
        title: "Geração de Rotina com IA",
        description: "Responda a um quiz detalhado (metas, dificuldades, horários) e a IA monta uma rotina diária milimetricamente calculada."
    },
    {
        icon: Trophy,
        title: "Gamificação e Progresso (XP)",
        description: "Ganhe pontos ao completar tarefas. Suba de nível como em um videogame e concorra a prêmios físicos exclusivos ao alcançar os combos de constância máxima."
    },
    {
        icon: Utensils,
        title: "A I.A faz sua dieta",
        description: "A I.A calcula seu índice corporal e monta uma dieta única e personalizada focada na sua máxima performance física e mental."
    },
    {
        icon: Dumbbell,
        title: "Tracker de Treinos Avançado",
        description: "A I.A faz seu planejamento semanal de treinos, registro de exercícios, séries, repetições e conclusão diária."
    }
];

const OverviewSection = () => {
    return (
        <section id="overview" className="py-12 bg-[#050505] relative overflow-clip">
            <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[600px] bg-emerald-600/5 blur-[120px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black mb-6"
                    >
                        Tudo o que a <span className="text-emerald-400">Nossa I.A faz por você</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 text-xl max-w-2xl mx-auto font-medium"
                    >
                        Um ecossistema online completo para transformar a sua rotina, do momento em que acorda até a hora de dormir.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass p-8 rounded-3xl border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300 group flex flex-col"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                                <feat.icon className="w-8 h-8 text-emerald-500" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white group-hover:text-emerald-400 transition-colors">{feat.title}</h3>
                            <p className="text-gray-400 text-base leading-relaxed font-medium">
                                {feat.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button
                        onClick={() => { trackMetaEvent('InitiateCheckout'); window.location.href = "/redirect"; }}
                        className="bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all active:scale-95 shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] border border-emerald-400/20"
                    >
                        Quero a IA trabalhando por mim
                    </button>
                </div>
            </div>
        </section>
    );
};

export default OverviewSection;
