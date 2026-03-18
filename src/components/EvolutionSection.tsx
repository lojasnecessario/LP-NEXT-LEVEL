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
                    Quem começa hoje está 1 ano a frente
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="relative w-full max-w-[360px] aspect-[9/16] bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl border border-white/5 mb-8 mx-auto"
                >
                    {/* Placeholder for Photo 1080x1920 */}
                    <img 
                        src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop" 
                        alt="Evolução" 
                        className="w-full h-full object-cover opacity-80" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
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
