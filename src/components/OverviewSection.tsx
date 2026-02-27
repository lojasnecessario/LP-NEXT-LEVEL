import { Brain, LayoutDashboard, Trophy, Dumbbell, BookOpen, Calendar, Bell, Droplets } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
    {
        icon: Brain,
        title: "Geração de Rotina com IA",
        description: "Responda a um quiz detalhado (metas, dificuldades, horários) e a IA monta uma rotina diária milimetricamente calculada."
    },
    {
        icon: LayoutDashboard,
        title: "Dashboard Inteligente",
        description: "Exibe as tarefas do dia de forma cronológica (Manhã, Tarde e Noite) para foco total."
    },
    {
        icon: Trophy,
        title: "Gamificação e Progresso (XP)",
        description: "Ganhe pontos ao completar tarefas, beber água, treinar e ler. Suba de nível como em um videogame, mantendo a motivação alta."
    },
    {
        icon: Dumbbell,
        title: "Tracker de Treinos Avançado",
        description: "A I.A faz seu planejamento semanal de treinos, registro de exercícios, séries, repetições e conclusão diária."
    },
    {
        icon: BookOpen,
        title: "Tracker de Leitura",
        description: "Acompanhamento de páginas lidas, sessões de leitura, metas semanais e espaço para notas/resumos."
    },
    {
        icon: Calendar,
        title: "Planner Semanal",
        description: "Planejamento de metas para a semana com base na performance anterior, com visão em carrossel dinâmico."
    },
    {
        icon: Bell,
        title: "Notificações Inteligentes",
        description: "Lembretes para beber água, treinar e relatórios diários enviados nos momentos certos (respeitando o horário de sono)."
    },
    {
        icon: Droplets,
        title: "Sistema de Hábitos",
        description: "Controle de ingestão de água e consistência diária."
    }
];

const OverviewSection = () => {
    return (
        <section className="py-24 bg-[#050505] relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[600px] bg-emerald-600/5 blur-[120px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-black mb-6"
                    >
                        Tudo o que a <span className="text-emerald-400">Nossa I.A faz por você</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 text-lg max-w-2xl mx-auto"
                    >
                        Um ecossistema completo para transformar a sua rotina, do momento em que acorda até a hora de dormir.
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
                            className="glass p-6 rounded-3xl border-white/5 hover:border-emerald-500/30 transition-all duration-300 group"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-emerald-500/20">
                                <feat.icon className="w-6 h-6 text-emerald-500" />
                            </div>
                            <h3 className="text-lg font-bold mb-3 text-white">{feat.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {feat.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OverviewSection;
