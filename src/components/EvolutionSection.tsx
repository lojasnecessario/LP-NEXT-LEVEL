import { motion } from 'motion/react';

const EvolutionSection = () => {
    return (
        <section className="py-12 relative bg-[#0a0a0a] overflow-hidden">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tighter mb-12"
                >
                    Quem começa hoje está <span className="whitespace-nowrap">1 ano na frente</span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                    style={{ willChange: "transform, opacity" }}
                    className="relative w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl border border-white/5 mb-8 mx-auto transform-gpu"
                >
                    <img 
                        src="/provasocial-v2.png" 
                        alt="Provas Sociais" 
                        className="w-full h-auto" 
                        loading="lazy"
                        decoding="async"
                    />
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-500"
                >
                    Quem começa hoje já está evoluindo
                </motion.p>
            </div>
        </section>
    );
};

export default EvolutionSection;
