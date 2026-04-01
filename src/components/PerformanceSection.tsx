import { motion } from 'motion/react';

const PerformanceSection = () => {
    return (
        <section className="py-12 relative bg-[#0a0a0a] overflow-hidden border-t border-white/5">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tighter mb-12 leading-tight"
                >
                    você no <span className="text-emerald-500">controle dos resultados</span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    style={{ willChange: "transform, opacity" }}
                    className="relative w-full aspect-auto bg-emerald-950/20 rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(16,185,129,0.1)] border border-emerald-500/20 mb-10 mx-auto max-w-xl flex items-center justify-center transform-gpu"
                >
                    <img 
                        src="/desempenho.png" 
                        alt="Desempenho" 
                        className="w-full h-full object-contain"
                        loading="lazy"
                        decoding="async"
                    />
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-base md:text-lg text-gray-400 font-medium max-w-2xl mx-auto"
                >
                    Aqui você controla o jogo e seu desempenho é medido de verdade
                </motion.p>
            </div>
        </section>
    );
};

export default PerformanceSection;
