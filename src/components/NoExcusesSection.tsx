import { motion } from 'motion/react';

const NoExcusesSection = () => {
    return (
        <section className="py-12 relative bg-[#050505] overflow-hidden">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tighter mb-12"
                >
                    Plano, organização e execução
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="relative w-full aspect-[4/5] md:aspect-video bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl border border-white/5 mb-10 mx-auto max-w-3xl flex items-center justify-center"
                >
                    {/* Placeholder for GIF */}
                    <img 
                        src="/dash.gif" 
                        alt="App Dashboard Demo" 
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-base md:text-lg text-gray-400 font-medium max-w-2xl mx-auto"
                >
                    simples, rápido e inteligente. Apenas execute e transforme sua vida nos primeiros sete dias.
                </motion.p>
            </div>
        </section>
    );
};

export default NoExcusesSection;
