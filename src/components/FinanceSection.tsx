import { motion } from 'motion/react';
import { DollarSign, TrendingUp, Wallet, Target } from 'lucide-react';

const FinanceSection = () => {
    return (
        <section className="py-12 relative bg-[#050505] overflow-hidden border-t border-white/5">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 blur-[120px] rounded-full -z-10" />

            <div className="max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8"
                >
                    <DollarSign className="w-4 h-4 text-emerald-500" />
                    <span className="text-emerald-500 text-xs font-bold uppercase tracking-widest">Controle Financeiro</span>
                </motion.div>

                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter mb-12 leading-tight"
                >
                    Controle financeiro com <span className="text-emerald-500">Assistente I.A</span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="relative w-full aspect-[4/5] md:aspect-video bg-zinc-900/50 rounded-3xl overflow-hidden shadow-2xl border border-white/5 mb-10 mx-auto max-w-3xl flex items-center justify-center group"
                >
                    {/* Placeholder for GIF/Mockup */}
                    <img 
                        src="/financas.gif" 
                        alt="Finance Management Demo" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-lg md:text-xl text-gray-400 font-medium max-w-3xl mx-auto leading-relaxed"
                >
                    Controle sálario, lucros, gastos, visualize o seu progresso de metas financeiras e tenha assistência da I.A para controlar gastos e pedir dicas
                </motion.p>
            </div>
        </section>
    );
};

export default FinanceSection;
